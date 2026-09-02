# Prayas 2.0 — Test Planner

A calendar-based test planner PWA for the Prayas 2.0 (2027) JEE batch — every AITS
and part test mapped to its date, with the full syllabus breakdown one tap away.
Design language matches the Pocket Buddy dark-clay aesthetic (Baloo 2 / Nunito /
Caveat, soft neumorphic "clay" shadows, coral + violet + gold accents). The
calendar interaction pattern (month grid + day detail pane) mirrors StudyBun's
`StudyCalendar`.

## Stack

- React 18 + Vite
- Vanilla CSS (no Tailwind/UI kit — everything in `src/styles/index.css`)
- Installable PWA (manifest + service worker, offline-capable)
- Zero backend — all test data lives in `src/data/testPlanner.js`

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build for production

```bash
npm run build      # outputs to dist/
npm run preview    # serve the build locally to sanity-check
```

## Deploy

`dist/` is a static site — drop it on Vercel, Netlify, GitHub Pages, or the same
host as StudyBun. `vercel.json` is included for a one-click Vercel deploy
(SPA rewrite + no-cache header on the service worker so updates roll out fast).

**Important for PWA install:** the manifest and service worker only work over
`https://` (or `localhost`). If you preview over plain `http://` on a LAN IP,
Chrome/Android will not offer the install prompt — that's expected, not a bug.

## Updating the test schedule

Everything is in `src/data/testPlanner.js` — one object per test:

```js
{
  id: "t1", name: "JEE Main-1", date: "2026-06-28",
  type: "part" | "full", track: "main" | "advanced", pattern: "JEE Main",
  cumulative: true,       // optional — shows a "+30% cumulative" badge
  fullSyllabus: true,     // optional — for the AITS full-syllabus tests, skips the chapter lists
  subjects: { physics: [...], chemistry: [...], maths: [...] }
}
```

Add, remove, or edit entries and the calendar, stats, filters, and upcoming
list all update automatically — no other file needs to change.

## Project structure

```
src/
  data/testPlanner.js       ← the test schedule (edit this to update dates/syllabus)
  utils/date.js             ← date-key helpers (YYYY-MM-DD, countdowns, labels)
  icons/Icons.jsx           ← hand-drawn line icons matching the reference design
  components/
    TopBar.jsx              ← brand + install button
    Hero.jsx                ← headline, stat row, "next up" spotlight card
    FilterBar.jsx           ← All / Main / Advanced / Full-test chips
    TestCalendar.jsx        ← month grid + day detail panel (two-pane on desktop)
    UpcomingList.jsx        ← next tests as a scannable list
    InstallPrompt.jsx       ← bottom install banner (beforeinstallprompt)
  styles/index.css          ← the entire design system (tokens, layout, responsive rules)
public/
  manifest.webmanifest, sw.js, icons/  ← PWA assets
```

## Responsive behaviour

- **< 480px:** single column, 2-up stat grid, calendar cells shrink to 40px.
- **481–859px:** calendar stays stacked (grid above, detail panel below).
- **≥ 860px:** two-pane layout — calendar pinned left (max 400px), detail panel
  fills the remaining width and scrolls independently for long syllabus lists.
