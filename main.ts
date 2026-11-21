// main.ts — entry validator + copier for the make.fun news-image entry.
// Node.js standard library only. No network access at runtime.
// Reads entry.png next to this file, validates the PNG, copies it
// byte-identical to $MAKEFUN_OUTPUT_DIR/entry.png (default /output),
// re-reads the copy and compares it byte-for-byte, then prints sha256.
// Never writes to the current working directory or to this repo.
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(HERE, 'entry.png');
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const DST = path.join(OUT_DIR, 'entry.png');
const MAX_BYTES = 1024 * 1024;
const MAX_SIDE = 1024;

// Safety: never write into this repo or the working directory.
const RESOLVED_DST = path.resolve(DST);
if (RESOLVED_DST === path.resolve(SRC) ||
    RESOLVED_DST.startsWith(path.resolve(HERE) + path.sep)) {
  console.error('ERROR: output must not be inside the repo: ' + RESOLVED_DST);
  process.exit(1);
}

function fail(message: string): never {
  console.error('ERROR: ' + message);
  process.exit(1);
}

function sha256(buf: Buffer): string {
  return crypto.createHash('sha256').update(buf).digest('hex');
}

// CRC-32 (IEEE) for PNG chunk validation.
const CRC_TABLE: number[] = (() => {
  const table: number[] = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) !== 0 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table.push(c >>> 0);
  }
  return table;
})();

function crc32(buf: Buffer): number {
  let c = 0xffffffff;
  for (const b of buf) {
    c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

let buf: Buffer;
try {
  buf = fs.readFileSync(SRC);
} catch (err) {
  fail('cannot read ' + SRC + ': ' + (err as Error).message);
}

if (buf.length === 0 || buf.length > MAX_BYTES) {
  fail('entry.png size ' + buf.length + ' bytes, must be 1..' + MAX_BYTES);
}

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!buf.subarray(0, 8).equals(PNG_MAGIC)) {
  fail('entry.png is not a PNG (bad magic)');
}

// Walk the chunk stream: first chunk IHDR, at least one IDAT, IEND last.
let off = 8;
let sawIHDR = false;
let sawIDAT = false;
let sawIEND = false;
let width = 0;
let height = 0;
while (off + 8 <= buf.length) {
  const len = buf.readUInt32BE(off);
  const type = buf.toString('ascii', off + 4, off + 8);
  if (off + 12 + len > buf.length) {
    fail('truncated PNG chunk ' + type);
  }
  const storedCrc = buf.readUInt32BE(off + 8 + len);
  const actualCrc = crc32(buf.subarray(off + 4, off + 8 + len));
  if (storedCrc !== actualCrc) {
    fail('bad CRC in PNG chunk ' + type);
  }
  if (!sawIHDR) {
    if (type !== 'IHDR' || len !== 13) {
      fail('first chunk must be IHDR (13 bytes)');
    }
    width = buf.readUInt32BE(off + 8);
    height = buf.readUInt32BE(off + 12);
    if (width < 1 || width > MAX_SIDE || height < 1 || height > MAX_SIDE) {
      fail('IHDR size ' + width + 'x' + height + ', sides must be 1..' + MAX_SIDE);
    }
    sawIHDR = true;
  }
  if (type === 'IDAT') {
    sawIDAT = true;
  }
  if (type === 'IEND') {
    if (len !== 0 || off + 12 !== buf.length) {
      fail('IEND must be the final 12 bytes of the file');
    }
    sawIEND = true;
    break;
  }
  off += 12 + len;
}
if (!sawIHDR) {
  fail('missing IHDR chunk');
}
if (!sawIDAT) {
  fail('missing IDAT chunk');
}
if (!sawIEND) {
  fail('missing IEND chunk at end of file');
}

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(DST, buf);

let back: Buffer;
try {
  back = fs.readFileSync(DST);
} catch (err) {
  fail('cannot re-read output: ' + (err as Error).message);
}
if (!back.equals(buf)) {
  fail('output differs from source (' + back.length + ' vs ' + buf.length + ' bytes)');
}

console.log('entry.png OK: ' + width + 'x' + height + ', ' + buf.length + ' bytes');
console.log('sha256 ' + sha256(buf));
console.log('copied to ' + DST);
process.exit(0);
