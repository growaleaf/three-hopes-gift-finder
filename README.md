# Fire Emblem Warriors: Three Hopes Gift Finder

Static page. Search an item to see which characters prefer or dislike it, with star ratings. Or pick a character to see their full gift list.

## Data

Parsed from `../source_samurai_gamers.html` (samurai-gamers.com, "Fire Emblem Warriors: Three Hopes - Gift Guide for all Characters", published 2022-06-17, modified 2022-08-08, fetched 2026-11-25) via `../parse.py` into `../parsed.json`, then embedded in `data.js`.

47 characters covered by the source, all 47 parsed cleanly (none skipped). One source quirk is disclosed: Anna's name carried a trailing asterisk in the source tied to a footnote ("Recommended Gifts available but no Expeditions currently available. Possibly a future DLC pack."); the asterisk is stripped from the displayed name and the footnote is kept as a `footnote` field, shown on the page when Anna is selected. Nothing is invented to fill gaps; characters or items not in the source are simply not listed.

## Files

- `index.html` — the page
- `data.js` — the 47 characters' gift data, each gift as `{name, stars}` (also usable from Node via `module.exports`)
- `test.js` — known-answer tests, run with `node test.js`

## Caveat

Single source. Community gift guides can disagree with each other and with in-game behavior. Verify in-game.
