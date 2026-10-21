# Daily Mood Log

A quick daily mood check-in with feelings and notes, and a month calendar colored by mood.

Live page (private): https://claude.ai/artifact/DBsZrYPWtXH5ncHLtJEdAE

## Phone app

The installable version lives in `docs/` and is served by GitHub Pages at https://nurnhe.github.io/mood-tracker/. On Android, open that address in Chrome and choose **Install app** (or **Add to Home screen**) from the menu. It works offline.

The app saves check-ins on the device only. Use **Export check-ins** and **Import check-ins** at the bottom of the page to move them between the app and the claude.ai version. Importing merges: check-ins already on the device are kept, and newer copies win.

`docs/` is generated, so don't edit it by hand. After changing `index.html`, rebuild it:

```
node scripts/build-app.mjs      # page, manifest and offline cache
node scripts/make-icons.mjs     # icons (only when the icon changes; needs Playwright)
```

## How it works

- `index.html` is the whole app: plain HTML, CSS and JavaScript with no build step.
- It runs as a claude.ai artifact. Check-ins are saved through the artifact's `db` capability in the `entries` collection, one document per check-in, so a day can have several:
  `{ date: "YYYY-MM-DD", time: "HH:MM", mood (1-5), tags: [], note, updatedAt }`
  Ids are `<date>_<suffix>`. The earliest check-ins used the bare date as their id and have no `time`; the app reads both.
- The calendar colors each day by the average of its check-ins.
- Outside claude.ai (the phone app, or the file opened directly) it saves in the browser's local storage.

## Roadmap

1. Daily check-in and mood calendar, with several check-ins a day (done)
2. Pattern views: mood by weekday, monthly trend, feelings on good and bad days, streaks, weekly ups and downs, best and worst days
3. Richer logging: sleep and activities linked into the pattern views, plus CSV export
