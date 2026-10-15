# Daily Mood Log

A quick daily mood check-in with feelings and notes, and a month calendar colored by mood.

Live page (private): https://claude.ai/artifact/DBsZrYPWtXH5ncHLtJEdAE

## How it works

- `index.html` is the whole app: plain HTML, CSS and JavaScript with no build step.
- It runs as a claude.ai artifact. Check-ins are saved through the artifact's `db` capability in the `entries` collection, one document per day with the date (`YYYY-MM-DD`) as its id:
  `{ date, mood (1-5), tags: [], note, updatedAt }`
- Opened directly in a browser, outside claude.ai, it falls back to saving in that browser's local storage.

## Roadmap

1. Daily check-in and mood calendar (done)
2. Pattern views: mood by weekday, monthly trend, feelings on good and bad days, streaks, weekly ups and downs, best and worst days
3. Richer logging: sleep and activities linked into the pattern views, plus CSV export
