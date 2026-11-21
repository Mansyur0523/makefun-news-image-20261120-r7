# The Daily World — Friday 20 November 2026

[![news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/Mansyur0523/makefun-news-image-20261120-r7/rank.svg)](https://make.fun/bounty/news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/Mansyur0523/makefun-news-image-20261120-r7/reward.svg)](https://make.fun/bounty/news-image-20261120)

One image that sums up Friday 20 November 2026: **38 verified news stories on a
single 1024×1024 newspaper poster, drawn entirely in code.** No photos, no
stock, no AI images. Every letter is a hand-built 5×7 bitmap glyph; every
picture is vector art plotted by the generator — a night skyline over Kyiv, a
cyclone spiral over the Bay of Bengal, a falling market chart, a world map
with 13 numbered pins.

## What is on the poster

- **Masthead:** FRIDAY 20 NOVEMBER 2026, with the day's deck line.
- **6 big numbers:** 110+ missiles and drones at Kyiv · 300,000+ evacuated
  ahead of Cyclone Akvan · −5.3% Nasdaq Friday close · 1,144 children killed
  or hurt (UNICEF, Jan–Oct 2026) · $2.36BN GTA VI day-one sales · 118 runs by
  Glenn Phillips against India.
- **Region bar:** EUROPE 12 · MID EAST 5 · ASIA 7 · AFRICA 2 · N AMERICA 7 ·
  LAT AM 1 STORY · OCEANIA+SPORT 2 STORIES.
- **3 leads:** Kyiv bridges hit · Cyclone Akvan landfall · AI sell-off sinks
  Asia's markets (with an index table inside the picture).
- **10 features (4–13):** UK–EU reset deal · COP31 last day, no deal ·
  Phillips 118 · cancer pill 60.7% · BepiColombo reaches Mercury · GTA VI
  $2.36BN · Kenya's first oil drilling · Bukele files for a third term ·
  Japan inflation 2.3% · Italy general strike.
- **World map:** WHERE IT HAPPENED — PINS 1–13, with a numbered legend.
- **25 more in brief (14–38):** one line each, with source.
- **Date check box:** what was deliberately left out because it was not
  Friday 20 November (ICJ Myanmar ruling Thu 19 Nov · Anthropic IPO debut
  Thu 19 Nov · Wall Street −2% Thu 19 Nov · BepiColombo orbit burn Sat 21 Nov
  · Peru quake Sat 21 Nov · Sensex Sat 21 Nov) versus what was in (Akvan
  landfall Fri 07:30 IST · Nasdaq −5.3% Fri close · Kyiv strike Fri
  overnight).

## The 38 stories

1. Russian missiles hit three Kyiv bridges — REUTERS
2. Cyclone Akvan comes ashore in eastern India — IMD
3. AI sell-off sinks Asia's stock markets — REUTERS
4. UK and EU seal a "reset" deal — REUTERS
5. COP31 reaches its last day with no deal — CARBON BRIEF
6. Phillips hits 118 against India — CRICINFO
7. Pill shrinks pancreatic tumours 60.7% — EORTC
8. BepiColombo reaches Mercury — ESA
9. GTA VI sales top $2.36BN in a day — SENSOR TOWER
10. Kenya starts drilling its first oil — CAPITAL FM
11. Bukele files to run for a third term — REUTERS
12. Japan's inflation picks up to 2.3% — STATISTICS BUR.
13. General strike over Italy's budget — REUTERS
14. Shenzhen summit: Trump, Xi, Putin say nuclear war cannot be won — REUTERS
15. UNICEF: 1,144 Ukraine children killed or hurt in 2026, near 2022 — UNICEF
16. Germany: Pistorius sorry for calling Pentagon view stupid — REUTERS
17. Brent near $91, set for third weekly fall of about 5% — REUTERS
18. Anthropic shares fell 8.5% Fri to $88.91, just above $83 IPO price — WSJ
19. S&P 500 fell 3.7% Fri; US 10-year yield fell to 4.93% — AP
20. India forex reserves $705.3BN, a 3-month low — REUTERS
21. CoreWeave slumped 12% Fri as neoclouds joined the AI rout — REUTERS
22. France seeks UN Security Council meeting after Kyiv strikes — REUTERS
23. Nvidia fell 14% Fri, worst day in nearly two years, −22.9% on week — CNN
24. Dutch embassy in Kyiv damaged as a projectile landed nearby — REUTERS
25. Chile quake M4.7, no damage reported — USGS
26. Thailand warns of flash floods in south lowlands — TMD
27. Spain's migrants fuelled boom, investors wary — REUTERS
28. UK retail sales beat forecasts on Friday — REUTERS
29. Gold fell for a fifth day, biggest weekly drop since March — BLOOMBERG
30. Kenya: crude name shortlist has four, winner unveiled on 1 Dec — PEOPLE DAILY
31. Italy: Landini claims 1m-plus marched in more than 100 cities — REUTERS
32. COP31: US absent a second year after ending climate cooperation — REUTERS
33. Japan: industrial goods inflation runs at about 4% — FXSTREET
34. Philippines: Marcos back from APEC with P41.1BN investment pledges — PNA
35. Hormuz: shipping traffic down about 15% this week, threat severe — UKMTO
36. Odisha: no major damage, no deaths — minister — PTI
37. Odisha assembly adjourned to 23 Nov — PTI
38. Qeshm blast reported over island again Fri morning [CLAIM] — REUTERS

## Verification notes

Every brief was checked against Reuters / AP / BBC / primary sources on
20–21 November 2026. Two items changed during verification:

- **#34 Philippines** had no verifiable Friday story in the original slot, so
  it was replaced with a verified Friday story: President Marcos returned
  from the APEC meeting in Shenzhen on Friday 20 November with P41.1 billion
  in investment pledges (PNA).
- **#38 Qeshm** stays labelled **[CLAIM]**: Iranian media first reported a
  missile strike on the island; Tasnim later said the explosion and smoke
  came from the disposal of unexploded munitions (Reuters, 20 Nov).
- **#26 Thailand** is written as the official Thai Meteorological Department
  warning issued for Friday 20 November (flash-flood risk in southern
  lowlands), not as confirmed flooding.
- **#14 Shenzhen, #11 Bukele, #24 Dutch embassy:** the events happened on
  Thursday 19 November but were reported as Friday 20 November news; the
  poster never dates them to Friday, and the date-check box keeps Thursday
  items out of the "in" list.

## Files

- `entry.png` — the poster, 1024×1024, PNG, under 1 MiB.
- `main.ts` — validator + copier (Node.js standard library only).
- `README.md` — this file.
- `LICENSE` — MIT.
- `.makefun/owner.json` — owner wallet.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
# validates entry.png, copies it byte-identical to /tmp/out/entry.png,
# re-reads the copy, compares bytes, prints sha256, exits 0.
```

The poster itself is produced by a deterministic pure-stdlib Python
generator kept outside this repo; re-running it produces a byte-identical
`entry.png` (same sha256).
