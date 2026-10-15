# Daily Mood Log

A quick daily mood check-in with feelings and notes, and a month calendar colored by mood.

Live page (private): https://claude.ai/artifact/DBsZrYPWtXH5ncHLtJEdAE

## How it works

- `index.html` is the whole app: plain HTML, CSS and JavaScript with no build step.
- It runs as a claude.ai artifact. Check-ins are saved through the artifact's `db` capability in the `entries` collection, one document per check-in, so a day can have several:
  `{ date: "YYYY-MM-DD", time: "HH:MM", mood (1-5), tags: [], note, updatedAt }`
  Ids are `<date>_<suffix>`. The earliest check-ins used the bare date as their id and have no `time`; the app reads both.
- The calendar colors each day by the average of its check-ins.
- Opened directly in a browser, outside claude.ai, it falls back to saving in that browser's local storage.

## Roadmap

1. Daily check-in and mood calendar, with several check-ins a day (done)
2. Pattern views: mood by weekday, monthly trend, feelings on good and bad days, streaks, weekly ups and downs, best and worst days
3. Richer logging: sleep and activities linked into the pattern views, plus CSV export
