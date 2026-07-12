/* ====================================================
   Windows XP Portfolio - Application Logic
   ==================================================== */

(function () {
  'use strict';

  // ----- PERSONAL INFO — edit these to customize -----
  const PORTFOLIO = {
    name: 'Nawaf Al Hussain',
    role: 'Passionate Coder & CS Student at UIU',
    bio: 'Hi! I\'m Nawaf, a passionate coder currently studying Computer Science & Engineering at United International University (UIU) in Dhaka, Bangladesh. I love building delightful, useful, and beautiful software — from clean web apps to experimental retro UIs (clearly!). When I\'m not coding, I\'m exploring new tech, contributing to projects, and learning everything I can about software engineering.',
    skills: [
      { name: 'C / C++', percent: 88 },
      { name: 'JavaScript / TypeScript', percent: 82 },
      { name: 'Python', percent: 85 },
      { name: 'Java', percent: 75 },
      { name: 'HTML / CSS', percent: 90 },
      { name: 'SQL / Databases', percent: 78 },
      { name: 'React / Next.js', percent: 80 },
      { name: 'Git & DevOps', percent: 72 },
    ],
    projects: [
      { title: 'Windows XP Portfolio', desc: 'A browser-based Windows XP simulation — yes, this very portfolio you\'re looking at right now!', icon: '🪟' },
      { title: 'Personal Website', desc: 'My main portfolio website hosted on Vercel — built with modern web technologies.', icon: '🌐' },
      { title: 'Algorithm Visualizer', desc: 'Interactive tool that visualizes classic sorting and pathfinding algorithms step by step.', icon: '📊' },
      { title: 'University Projects', desc: 'Collection of coursework projects from UIU — covering data structures, OOP, databases, and more.', icon: '🎓' },
      { title: 'CLI Utilities', desc: 'Handy command-line tools and scripts I\'ve built to automate everyday dev workflows.', icon: '⚙️' },
      { title: 'Open Source', desc: 'Contributions and experiments on GitHub — always learning, always shipping.', icon: '🐙' },
    ],
    contact: [
      { icon: '✉️', label: 'Email', value: 'nkhondokar2420136@bscse.uiu.ac.bd', href: 'mailto:nkhondokar2420136@bscse.uiu.ac.bd' },
      { icon: '🐙', label: 'GitHub', value: 'github.com/nawaf-al-hussain', href: 'https://github.com/nawaf-al-hussain' },
      { icon: '🌐', label: 'Website', value: 'nawaf-al-hussain.vercel.app', href: 'https://nawaf-al-hussain.vercel.app/' },
      { icon: '📍', label: 'Location', value: 'Dhaka, Bangladesh', href: '#' },
      { icon: '🎓', label: 'University', value: 'United International University', href: '#' },
    ],
    resumeText: `============================================
        NAWAF AL HUSSAIN - RESUME
============================================

PASSIONATE CODER & CS STUDENT

CONTACT
  Email:     nkhondokar2420136@bscse.uiu.ac.bd
  GitHub:    github.com/nawaf-al-hussain
  Website:   nawaf-al-hussain.vercel.app
  Location:  Dhaka, Bangladesh

SUMMARY
  I am a passionate coder currently studying Computer
  Science & Engineering at United International
  University (UIU). I love building software that is
  both useful and delightful, and I'm always eager to
  learn new technologies and tackle challenging problems.

EDUCATION
  B.Sc. in Computer Science & Engineering
  United International University (UIU)
  Dhaka, Bangladesh
  Ongoing

SKILLS
  Languages:   C, C++, Python, JavaScript, Java
  Frontend:    HTML, CSS, JavaScript, React
  Backend:     Node.js, Express
  Databases:   SQL, MongoDB
  Tools:       Git, GitHub, VS Code, Linux

PROJECTS
  Windows XP Portfolio
  - Browser-based Windows XP simulation built with
    vanilla HTML, CSS, and JavaScript
  - Features draggable windows, start menu,
    taskbar, and playable Minesweeper

  Personal Website
  - Main portfolio site hosted on Vercel
  - Showcases projects, skills, and contact info

  Algorithm Visualizer
  - Interactive tool for sorting and pathfinding
  - Built to help students understand algorithms

INTERESTS
  Retro computing, open source, system programming,
  UI/UX design, and competitive programming.

============================================
`,
  };

  // ----- WINDOW DEFINITIONS -----
  const WINDOW_DEFS = {
    about: {
      title: 'About Me',
      icon: '👤',
      width: 460,
      height: 320,
      content: function () {
        return `
          <div class="about-content">
            <div class="about-avatar">🧑‍💻</div>
            <div class="about-text">
              <h2>${PORTFOLIO.name}</h2>
              <h3>${PORTFOLIO.role}</h3>
              <p>${PORTFOLIO.bio}</p>
              <p style="margin-top:10px;color:#666;font-style:italic;">
                Double-click any desktop icon to explore more. Don't forget to try the Start menu!
              </p>
            </div>
          </div>`;
      },
    },
    projects: {
      title: 'My Projects',
      icon: '📁',
      width: 540,
      height: 400,
      content: function () {
        const cards = PORTFOLIO.projects.map(p => `
          <div class="project-card" onclick="window.open('https://github.com/', '_blank')">
            <div class="project-thumb">${p.icon}</div>
            <div class="project-title">${p.title}</div>
            <div class="project-desc">${p.desc}</div>
          </div>`).join('');
        return `<div class="projects-list">${cards}</div>`;
      },
    },
    skills: {
      title: 'Skills',
      icon: '🚀',
      width: 460,
      height: 420,
      content: function () {
        const rows = PORTFOLIO.skills.map(s => `
          <div class="skill-row">
            <div class="skill-name">${s.name}</div>
            <div class="skill-bar"><div class="skill-fill" style="width:${s.percent}%"></div></div>
            <div class="skill-percent">${s.percent}%</div>
          </div>`).join('');
        return `
          <div class="skills-content">
            <div class="skills-section">
              <h3>Technical Skills</h3>
              ${rows}
            </div>
          </div>`;
      },
    },
    resume: {
      title: 'Resume.txt - Notepad',
      icon: '📝',
      width: 480,
      height: 480,
      content: function () {
        return `<div class="resume-content"><pre>${PORTFOLIO.resumeText}</pre></div>`;
      },
      menubar: true,
    },
    contact: {
      title: 'Contact Me',
      icon: '✉️',
      width: 440,
      height: 340,
      content: function () {
        const rows = PORTFOLIO.contact.map(c => `
          <div class="contact-row">
            <div class="contact-icon">${c.icon}</div>
            <div class="contact-label">${c.label}:</div>
            <div class="contact-value" onclick="window.open('${c.href}', '_blank')">${c.value}</div>
          </div>`).join('');
        return `<div class="contact-content"><h2>Get In Touch</h2>${rows}</div>`;
      },
    },
    internet: {
      title: 'Internet Explorer',
      icon: '🌐',
      width: 560,
      height: 420,
      content: function () {
        return `
          <div class="ie-content">
            <div class="ie-toolbar">
              <button>◀ Back</button>
              <button>Forward ▶</button>
              <button>⨂ Stop</button>
              <button>⟳ Refresh</button>
              <button>🏠 Home</button>
              <div class="ie-address">
                <span>Address</span>
                <input value="http://www.yourname.dev/" />
                <button>Go</button>
              </div>
            </div>
            <div class="ie-page">
              <h1>🌐 Welcome to My Website</h1>
              <p>You are visiting: <b>http://www.yourname.dev/</b></p>
              <p>This is a simulated Internet Explorer window.</p>
              <p>Feel free to explore the rest of my portfolio by clicking the desktop icons!</p>
              <div style="margin-top:20px;font-size:48px;">🪟</div>
              <p style="margin-top:20px;color:#888;font-size:11px;">
                &copy; ${new Date().getFullYear()} ${PORTFOLIO.name}. All rights reserved.
              </p>
            </div>
          </div>`;
      },
    },
    minesweeper: {
      title: 'Minesweeper',
      icon: '💣',
      width: 240,
      height: 320,
      content: function () {
        return `
          <div class="mine-content">
            <div class="mine-header">
              <div class="mine-counter" id="mine-count">010</div>
              <div class="mine-smiley" id="mine-smiley">🙂</div>
              <div class="mine-counter" id="mine-time">000</div>
            </div>
            <div class="mine-grid" id="mine-grid"></div>
          </div>`;
      },
      onOpen: initMinesweeper,
    },
    recycle: {
      title: 'Recycle Bin',
      icon: '🗑️',
      width: 380,
      height: 260,
      content: function () {
        return `
          <div class="recycle-content">
            <div class="big-icon">🗑️</div>
            <h2>The Recycle Bin is empty</h2>
            <p style="color:#666;margin-top:8px;">
              Just like my list of unfinished side projects... mostly.
            </p>
          </div>`;
      },
    },
  };

  // ====================================================
  // BOOT SEQUENCE
  // ====================================================
  function showBoot() {
    setTimeout(function () {
      document.getElementById('boot-screen').classList.add('hidden');
      document.getElementById('login-screen').classList.remove('hidden');
    }, 3500);
  }

  // ====================================================
  // LOGIN
  // ====================================================
  function setupLogin() {
    const loginUser = document.getElementById('login-user');
    loginUser.addEventListener('click', function () {
      loginUser.classList.add('selected');
      setTimeout(function () {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('desktop').classList.remove('hidden');
        // Auto-open About window after login
        setTimeout(() => openWindow('about'), 500);
      }, 700);
    });
  }

  // ====================================================
  // WINDOW MANAGEMENT
  // ====================================================
  let zCounter = 100;
  const openWindows = new Map();
  let windowIdCounter = 0;

  function openWindow(type) {
    const def = WINDOW_DEFS[type];
    if (!def) return;

    // If already open, just focus it (or unminimize)
    for (const [id, w] of openWindows.entries()) {
      if (w.type === type) {
        w.el.classList.remove('minimized');
        focusWindow(id);
        updateTaskbar();
        return;
      }
    }

    const id = 'win-' + (++windowIdCounter);
    const win = document.createElement('div');
    win.className = 'xp-window active';
    win.dataset.id = id;
    win.dataset.type = type;

    const w = def.width || 400;
    const h = def.height || 300;
    const offset = (openWindows.size % 6) * 24;
    const left = Math.max(20, 80 + offset);
    const top = Math.max(20, 40 + offset);

    win.style.width = w + 'px';
    win.style.height = h + 'px';
    win.style.left = left + 'px';
    win.style.top = top + 'px';
    win.style.zIndex = ++zCounter;

    const menubar = def.menubar ? `
      <div class="window-menubar">
        <span><u>F</u>ile</span>
        <span><u>E</u>dit</span>
        <span><u>F</u>ormat</span>
        <span><u>V</u>iew</span>
        <span><u>H</u>elp</span>
      </div>` : '';

    win.innerHTML = `
      <div class="window-titlebar">
        <div class="window-title-icon">${def.icon}</div>
        <div class="window-title">${def.title}</div>
        <div class="window-controls">
          <button class="win-btn minimize" title="Minimize">_</button>
          <button class="win-btn maximize" title="Maximize">▢</button>
          <button class="win-btn close" title="Close">✕</button>
        </div>
      </div>
      ${menubar}
      <div class="window-content">${def.content()}</div>
      <div class="resize-handle e"></div>
      <div class="resize-handle s"></div>
      <div class="resize-handle se"></div>
    `;

    document.getElementById('windows-container').appendChild(win);

    openWindows.set(id, { type, el: win, title: def.title, icon: def.icon, minimized: false, maximized: false, prevRect: null });

    // Window controls
    win.querySelector('.close').addEventListener('click', () => closeWindow(id));
    win.querySelector('.minimize').addEventListener('click', () => minimizeWindow(id));
    win.querySelector('.maximize').addEventListener('click', () => toggleMaximize(id));

    // Focus on click
    win.addEventListener('mousedown', () => focusWindow(id));

    // Dragging
    makeDraggable(win, win.querySelector('.window-titlebar'));

    // Resizing
    makeResizable(win);

    updateTaskbar();

    // Run onOpen callback (e.g. minesweeper init)
    if (def.onOpen) {
      setTimeout(() => def.onOpen(win), 50);
    }
  }

  function closeWindow(id) {
    const w = openWindows.get(id);
    if (!w) return;
    w.el.remove();
    openWindows.delete(id);
    updateTaskbar();
  }

  function minimizeWindow(id) {
    const w = openWindows.get(id);
    if (!w) return;
    w.minimized = true;
    w.el.classList.add('minimized');
    updateTaskbar();
  }

  function toggleMaximize(id) {
    const w = openWindows.get(id);
    if (!w) return;
    if (w.maximized) {
      const r = w.prevRect;
      w.el.style.left = r.left + 'px';
      w.el.style.top = r.top + 'px';
      w.el.style.width = r.width + 'px';
      w.el.style.height = r.height + 'px';
      w.maximized = false;
    } else {
      w.prevRect = {
        left: parseInt(w.el.style.left),
        top: parseInt(w.el.style.top),
        width: parseInt(w.el.style.width),
        height: parseInt(w.el.style.height),
      };
      w.el.style.left = '0px';
      w.el.style.top = '0px';
      w.el.style.width = '100%';
      w.el.style.height = (window.innerHeight - 30) + 'px';
      w.maximized = true;
    }
  }

  function focusWindow(id) {
    const w = openWindows.get(id);
    if (!w) return;
    w.el.style.zIndex = ++zCounter;
    document.querySelectorAll('.xp-window').forEach(el => {
      el.classList.remove('active');
      el.querySelector('.window-titlebar').classList.add('inactive');
    });
    w.el.classList.add('active');
    w.el.querySelector('.window-titlebar').classList.remove('inactive');
    updateTaskbar();
  }

  function makeDraggable(win, handle) {
    let isDown = false, startX, startY, startLeft, startTop;
    handle.addEventListener('mousedown', (e) => {
      if (e.target.classList.contains('win-btn')) return;
      isDown = true;
      startX = e.clientX;
      startY = e.clientY;
      startLeft = parseInt(win.style.left);
      startTop = parseInt(win.style.top);
      e.preventDefault();
    });
    document.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      let newLeft = startLeft + (e.clientX - startX);
      let newTop = startTop + (e.clientY - startY);
      newTop = Math.max(0, Math.min(newTop, window.innerHeight - 60));
      newLeft = Math.max(-parseInt(win.style.width) + 80, Math.min(newLeft, window.innerWidth - 80));
      win.style.left = newLeft + 'px';
      win.style.top = newTop + 'px';
    });
    document.addEventListener('mouseup', () => { isDown = false; });
  }

  function makeResizable(win) {
    const handles = win.querySelectorAll('.resize-handle');
    handles.forEach(h => {
      h.addEventListener('mousedown', (e) => {
        if (h.classList.contains('se') === false && !h.classList.contains('e') && !h.classList.contains('s')) return;
        e.preventDefault();
        e.stopPropagation();
        const startX = e.clientX;
        const startY = e.clientY;
        const startW = parseInt(win.style.width);
        const startH = parseInt(win.style.height);
        const onMove = (ev) => {
          if (h.classList.contains('e') || h.classList.contains('se')) {
            win.style.width = Math.max(240, startW + (ev.clientX - startX)) + 'px';
          }
          if (h.classList.contains('s') || h.classList.contains('se')) {
            win.style.height = Math.max(160, startH + (ev.clientY - startY)) + 'px';
          }
        };
        const onUp = () => {
          document.removeEventListener('mousemove', onMove);
          document.removeEventListener('mouseup', onUp);
        };
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
      });
    });
  }

  // ====================================================
  // TASKBAR
  // ====================================================
  function updateTaskbar() {
    const container = document.getElementById('taskbar-items');
    container.innerHTML = '';
    openWindows.forEach((w, id) => {
      const item = document.createElement('div');
      item.className = 'taskbar-item' + (w.el.classList.contains('active') && !w.minimized ? ' active' : '');
      item.innerHTML = `<span class="taskbar-item-icon">${w.icon}</span><span>${w.title}</span>`;
      item.addEventListener('click', () => {
        if (w.minimized) {
          w.minimized = false;
          w.el.classList.remove('minimized');
          focusWindow(id);
        } else if (w.el.classList.contains('active')) {
          minimizeWindow(id);
        } else {
          focusWindow(id);
        }
      });
      container.appendChild(item);
    });
  }

  // ====================================================
  // CLOCK
  // ====================================================
  function startClock() {
    const clock = document.getElementById('clock');
    function update() {
      const now = new Date();
      const h = now.getHours();
      const m = now.getMinutes();
      const ampm = h >= 12 ? 'PM' : 'AM';
      const hh = h % 12 || 12;
      const mm = m.toString().padStart(2, '0');
      clock.textContent = `${hh}:${mm} ${ampm}`;
    }
    update();
    setInterval(update, 1000);
  }

  // ====================================================
  // START MENU
  // ====================================================
  function setupStartMenu() {
    const startBtn = document.getElementById('start-button');
    const startMenu = document.getElementById('start-menu');

    startBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = startMenu.classList.contains('hidden');
      if (isHidden) {
        startMenu.classList.remove('hidden');
        startBtn.classList.add('active');
      } else {
        startMenu.classList.add('hidden');
        startBtn.classList.remove('active');
      }
    });

    document.addEventListener('click', (e) => {
      if (!startMenu.contains(e.target) && e.target !== startBtn) {
        startMenu.classList.add('hidden');
        startBtn.classList.remove('active');
      }
    });

    // Start menu items that open windows
    startMenu.querySelectorAll('[data-window]').forEach(item => {
      item.addEventListener('click', () => {
        openWindow(item.dataset.window);
        startMenu.classList.add('hidden');
        startBtn.classList.remove('active');
      });
    });

    // External links
    startMenu.querySelectorAll('[data-href]').forEach(item => {
      item.addEventListener('click', () => {
        window.open(item.dataset.href, '_blank');
      });
    });

    // Log off / shutdown
    document.getElementById('shutdown-btn').addEventListener('click', showBSOD);
    document.querySelector('.start-footer-right').addEventListener('click', showBSOD);
    document.querySelector('.start-footer-left').addEventListener('click', showBSOD);
  }

  function showBSOD() {
    document.getElementById('start-menu').classList.add('hidden');
    document.getElementById('bsod').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('bsod').addEventListener('click', () => {
        location.reload();
      });
    }, 100);
  }

  // ====================================================
  // DESKTOP ICONS
  // ====================================================
  function setupDesktopIcons() {
    const icons = document.querySelectorAll('.desktop-icon');
    icons.forEach(icon => {
      let clickCount = 0;
      icon.addEventListener('click', (e) => {
        e.stopPropagation();
        icons.forEach(i => i.classList.remove('selected'));
        icon.classList.add('selected');
      });
      icon.addEventListener('dblclick', () => {
        const win = icon.dataset.window;
        if (win) openWindow(win);
      });
    });

    document.getElementById('desktop').addEventListener('click', (e) => {
      if (e.target.closest('.desktop-icon') || e.target.closest('.xp-window') || e.target.closest('#taskbar') || e.target.closest('#start-menu')) return;
      icons.forEach(i => i.classList.remove('selected'));
    });
  }

  // ====================================================
  // MINESWEEPER MINI-GAME
  // ====================================================
  function initMinesweeper(win) {
    const ROWS = 9;
    const COLS = 9;
    const MINES = 10;
    let grid = [];
    let revealed = [];
    let flagged = [];
    let gameOver = false;
    let won = false;
    let firstClick = true;
    let timer = 0;
    let timerInterval = null;

    const grid_el = win.querySelector('#mine-grid');
    const smiley = win.querySelector('#mine-smiley');
    const counter = win.querySelector('#mine-count');
    const time_el = win.querySelector('#mine-time');

    grid_el.style.gridTemplateColumns = `repeat(${COLS}, 18px)`;

    function newGame() {
      grid = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
      revealed = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
      flagged = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
      gameOver = false;
      won = false;
      firstClick = true;
      timer = 0;
      clearInterval(timerInterval);
      time_el.textContent = '000';
      counter.textContent = MINES.toString().padStart(3, '0');
      smiley.textContent = '🙂';
      renderGrid();
    }

    function placeMines(safeRow, safeCol) {
      let placed = 0;
      while (placed < MINES) {
        const r = Math.floor(Math.random() * ROWS);
        const c = Math.floor(Math.random() * COLS);
        if (grid[r][c] === -1) continue;
        if (Math.abs(r - safeRow) <= 1 && Math.abs(c - safeCol) <= 1) continue;
        grid[r][c] = -1;
        placed++;
      }
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          if (grid[r][c] === -1) continue;
          let count = 0;
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              const nr = r + dr, nc = c + dc;
              if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && grid[nr][nc] === -1) count++;
            }
          }
          grid[r][c] = count;
        }
      }
    }

    function renderGrid() {
      grid_el.innerHTML = '';
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const cell = document.createElement('div');
          cell.className = 'mine-cell';
          cell.dataset.r = r;
          cell.dataset.c = c;
          if (revealed[r][c]) {
            cell.classList.add('revealed');
            if (grid[r][c] === -1) {
              cell.classList.add('mine');
              cell.textContent = '💣';
            } else if (grid[r][c] > 0) {
              cell.textContent = grid[r][c];
              cell.dataset.num = grid[r][c];
            }
          } else if (flagged[r][c]) {
            cell.textContent = '🚩';
          }
          cell.addEventListener('click', () => handleClick(r, c));
          cell.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            handleRightClick(r, c);
          });
          grid_el.appendChild(cell);
        }
      }
    }

    function handleClick(r, c) {
      if (gameOver || revealed[r][c] || flagged[r][c]) return;
      if (firstClick) {
        firstClick = false;
        placeMines(r, c);
        timerInterval = setInterval(() => {
          timer++;
          time_el.textContent = Math.min(timer, 999).toString().padStart(3, '0');
        }, 1000);
      }
      reveal(r, c);
      checkWin();
      renderGrid();
    }

    function handleRightClick(r, c) {
      if (gameOver || revealed[r][c]) return;
      flagged[r][c] = !flagged[r][c];
      const flagCount = flagged.flat().filter(Boolean).length;
      counter.textContent = (MINES - flagCount).toString().padStart(3, '0');
      renderGrid();
    }

    function reveal(r, c) {
      if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return;
      if (revealed[r][c] || flagged[r][c]) return;
      revealed[r][c] = true;
      if (grid[r][c] === -1) {
        gameOver = true;
        smiley.textContent = '😵';
        clearInterval(timerInterval);
        for (let i = 0; i < ROWS; i++) {
          for (let j = 0; j < COLS; j++) {
            if (grid[i][j] === -1) revealed[i][j] = true;
          }
        }
        return;
      }
      if (grid[r][c] === 0) {
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue;
            reveal(r + dr, c + dc);
          }
        }
      }
    }

    function checkWin() {
      let hidden = 0;
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          if (!revealed[r][c]) hidden++;
        }
      }
      if (hidden === MINES) {
        won = true;
        gameOver = true;
        smiley.textContent = '😎';
        clearInterval(timerInterval);
      }
    }

    smiley.addEventListener('click', newGame);
    newGame();
  }

  // ====================================================
  // INIT
  // ====================================================
  function init() {
    showBoot();
    setupLogin();
    setupStartMenu();
    setupDesktopIcons();
    startClock();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
