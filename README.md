# Windows XP Portfolio — Nawaf Al Hussain

A nostalgic, fully-interactive Windows XP-themed developer portfolio built with **React 19**, **Vite 7**, **Tailwind CSS 4**, and **Framer Motion**. Forked and hardened from [Jones-6199/Windows-xp-portfolio](https://github.com/Jones-6199/Windows-xp-portfolio) — every UI element now actually works.

![Windows XP](https://img.shields.io/badge/theme-Windows%20XP-245edb) ![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react) ![Vite 7](https://img.shields.io/badge/Vite-7-646CFF?logo=vite) ![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwind-css) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow)

## Live demo

**https://nawaf-al-hussain.github.io/windows-xp-portfolio/**

## What's new vs. the original

Every "decorative" button in the upstream repo has been wired to actually do something. Plus several new apps:

- ✅ **Real drag** — mouse + touch
- ✅ **Real resize** — E, S, and SE handles actually resize the window
- ✅ **Working BSOD** — "Turn Off Computer" → blue screen of death → any key restarts
- ✅ **Working Log Off** — reloads to the login screen
- ✅ **Playable Minesweeper** — left-click reveal, right-click flag, win/lose detection, timer
- ✅ **Working Paint app** — full canvas with brush, eraser, color palette, save-as-PNG
- ✅ **Working Notepad** — editable text + Ctrl+S to save as .txt
- ✅ **Skills window** — animated skill bars + category cards
- ✅ **Recycle Bin** — opens and shows the empty bin
- ✅ **Mobile responsive** — icons grid reflows, windows auto-maximize, tap-to-open
- ✅ **Resume download** — actually downloads a .txt resume
- ✅ **Contact form** — opens user's email client via mailto:
- ✅ **Real Bliss wallpaper** — shipped as SVG (no binary asset)
- ✅ **All start menu items work** — nothing is dead UI

## Tech stack

- **React** 19 — UI components
- **Vite** 7 — build tool
- **Tailwind CSS** 4 — styling
- **Framer Motion** 12 — animations
- **lucide-react** — generic icons (volume, wifi, etc.)
- **date-fns** — clock formatting
- Custom hand-drawn SVG icons for that authentic XP look

## Run locally

```bash
git clone https://github.com/nawaf-al-hussain/windows-xp-portfolio.git
cd windows-xp-portfolio
npm install
npm run dev
# open http://localhost:5173/windows-xp-portfolio/
```

## Build for production

```bash
npm run build
# output goes to ./dist
```

## Deploy to GitHub Pages

The `vite.config.js` is already configured with `base: '/windows-xp-portfolio/'` for project-page hosting. To deploy:

```bash
npm run build
# then push the contents of ./dist to the gh-pages branch (or use any GH Pages action)
```

The repo uses the "legacy" GitHub Pages deployment (deploy from `main` / root). After each push to `main`, the site auto-rebuilds.

## Customize

Open **`src/data/profile.js`** and edit the `PROFILE` object — your name, bio, skills, projects, contact info, and resume are all there. No other file needs to change for content edits.

For visual customization (wallpaper, avatar, colors):
- `public/bliss.svg` — the desktop wallpaper
- `public/avatar.svg` — your avatar (replace with a real photo at `public/avatar.jpg` and update `PROFILE.avatar`)
- `src/index.css` — Tailwind theme tokens (XP blue, XP green, etc.)

## Project structure

```
windows-xp-portfolio/
├── public/
│   ├── bliss.svg          # XP wallpaper
│   ├── avatar.svg         # profile picture
│   └── favicon.svg
├── src/
│   ├── apps/              # "applications" that open in windows
│   │   ├── AboutMe.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   ├── ContactMe.jsx
│   │   ├── Skills.jsx
│   │   ├── Minesweeper.jsx
│   │   ├── Paint.jsx
│   │   ├── Notepad.jsx
│   │   └── RecycleBin.jsx
│   ├── components/        # OS chrome
│   │   ├── Desktop.jsx
│   │   ├── Window.jsx     # drag + resize + chrome
│   │   ├── Taskbar.jsx
│   │   ├── StartMenu.jsx
│   │   ├── LoginScreen.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── DesktopIcon.jsx
│   │   ├── BSOD.jsx
│   │   └── Icons.jsx      # custom XP SVG icons
│   ├── data/
│   │   └── profile.js     # ← edit this to customize
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Credits

- Original design: [Jones-6199/Windows-xp-portfolio](https://github.com/Jones-6199/Windows-xp-portfolio) (MIT)
- SVG icon set: adapted from the original repo with additions
- Bliss wallpaper: hand-crafted SVG approximation
- Windows XP is a trademark of Microsoft Corporation — this is a fan-made tribute for portfolio purposes.

## License

MIT — do whatever you want. Attribution appreciated but not required.
