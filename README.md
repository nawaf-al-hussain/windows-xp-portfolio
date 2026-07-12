# Windows XP Portfolio

A nostalgic Windows XP-themed developer portfolio built with vanilla HTML, CSS, and JavaScript. No frameworks, no build step — just open `index.html` and go.

![Windows XP Portfolio](https://img.shields.io/badge/theme-Windows%20XP-245edb) ![No dependencies](https://img.shields.io/badge/dependencies-zero-success) ![License](https://img.shields.io/badge/license-MIT-blue)

## Features

- **Boot sequence** — animated Windows XP boot screen with the classic loading bar
- **Welcome / login screen** — click your user account to "log in" to the desktop
- **Functional desktop** — draggable, resizable windows with minimize / maximize / close
- **Start menu** — XP-style start menu with user header, program list, and shutdown
- **Taskbar** — running apps appear as taskbar buttons; click to focus or minimize
- **System tray & live clock** — updates every second
- **Window apps**:
  - `About Me` — bio and avatar
  - `My Projects` — clickable project cards
  - `Skills` — animated skill bars
  - `Resume.txt` — Notepad-style resume
  - `Contact Me` — clickable contact links
  - `Internet Explorer` — simulated browser window
  - `Minesweeper` — fully playable mini-game (left-click to reveal, right-click to flag)
  - `Recycle Bin` — empty, of course
- **BSOD easter egg** — click "Turn Off Computer" in the start menu

## Customize

Open `app.js` and edit the `PORTFOLIO` object at the top of the file:

```js
const PORTFOLIO = {
  name: 'Your Name',
  role: 'Full-Stack Developer & Designer',
  bio: '...',
  skills: [ ... ],
  projects: [ ... ],
  contact: [ ... ],
  resumeText: `...`,
};
```

No other changes needed — everything else updates automatically.

## Run locally

Just open `index.html` in your browser. That's it.

For a quick local server:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Deploy

This is a static site — deploy anywhere:

- **GitHub Pages**: push to a repo, enable Pages in repo settings, done
- **Netlify / Vercel**: drag-and-drop the folder
- **Any static host**: just upload the three files (`index.html`, `styles.css`, `app.js`)

## Tech stack

- Vanilla HTML5
- Vanilla CSS3 (gradients, flex, grid, animations — no preprocessor)
- Vanilla JavaScript (no libraries, no frameworks, no build step)

## Browser support

Works in any modern browser (Chrome, Firefox, Safari, Edge). Mobile-friendly via responsive layout.

## License

MIT — do whatever you want. Attribution appreciated but not required.
