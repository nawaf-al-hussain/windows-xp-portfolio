import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AboutIcon, PdfIcon, IeIcon, MailIcon, SkillsIcon, MinesweeperIcon, RecycleBinIcon,
} from './Icons';
import Taskbar from './Taskbar';
import Window from './Window';
import StartMenu from './StartMenu';
import DesktopIcon from './DesktopIcon';

import AboutMe from '../apps/AboutMe';
import Projects from '../apps/Projects';
import Resume from '../apps/Resume';
import ContactMe from '../apps/ContactMe';
import Skills from '../apps/Skills';
import Minesweeper from '../apps/Minesweeper';
import Paint from '../apps/Paint';
import Notepad from '../apps/Notepad';
import RecycleBin from '../apps/RecycleBin';

const APPS = [
  { id: 'about', title: 'About Me', icon: AboutIcon, Component: AboutMe, defaultRect: { x: 100, y: 40, w: 720, h: 480 } },
  { id: 'projects', title: 'My Projects', icon: IeIcon, Component: Projects, defaultRect: { x: 140, y: 70, w: 760, h: 520 } },
  { id: 'skills', title: 'Skills', icon: SkillsIcon, Component: Skills, defaultRect: { x: 180, y: 100, w: 620, h: 520 } },
  { id: 'resume', title: 'My Resume', icon: PdfIcon, Component: Resume, defaultRect: { x: 220, y: 50, w: 680, h: 600 } },
  { id: 'contact', title: 'Contact Me', icon: MailIcon, Component: ContactMe, defaultRect: { x: 200, y: 80, w: 700, h: 520 } },
  { id: 'minesweeper', title: 'Minesweeper', icon: MinesweeperIcon, Component: Minesweeper, defaultRect: { x: 280, y: 100, w: 320, h: 380 }, showChrome: false },
  { id: 'paint', title: 'Paint', icon: null, Component: Paint, defaultRect: { x: 120, y: 60, w: 680, h: 520 } },
  { id: 'notepad', title: 'Notepad', icon: null, Component: Notepad, defaultRect: { x: 160, y: 80, w: 560, h: 440 }, showChrome: false },
  { id: 'recycle', title: 'Recycle Bin', icon: RecycleBinIcon, Component: RecycleBin, defaultRect: { x: 200, y: 100, w: 480, h: 360 } },
];

const DESKTOP_ICONS = [
  { id: 'about', title: 'About Me', icon: AboutIcon },
  { id: 'projects', title: 'My Projects', icon: IeIcon },
  { id: 'skills', title: 'Skills', icon: SkillsIcon },
  { id: 'resume', title: 'My Resume', icon: PdfIcon },
  { id: 'contact', title: 'Contact Me', icon: MailIcon },
  { id: 'minesweeper', title: 'Minesweeper', icon: MinesweeperIcon },
  { id: 'paint', title: 'Paint', icon: null, fallbackIcon: '🎨' },
  { id: 'notepad', title: 'Notepad', icon: null, fallbackIcon: '📝' },
  { id: 'recycle', title: 'Recycle Bin', icon: RecycleBinIcon },
];

export default function Desktop({ onShutdown }) {
  const [openWindows, setOpenWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const [maxZIndex, setMaxZIndex] = useState(10);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const blissImg = `${import.meta.env.BASE_URL}bliss.svg`;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const openWindow = (id) => {
    const existing = openWindows.find((w) => w.id === id);
    if (existing) {
      setOpenWindows((ws) =>
        ws.map((w) => (w.id === id ? { ...w, minimized: false, zIndex: maxZIndex + 1 } : w))
      );
      setActiveWindow(id);
      setMaxZIndex((z) => z + 1);
      return;
    }
    setOpenWindows((ws) => [
      ...ws,
      { id, zIndex: maxZIndex + 1, minimized: false, maximized: false },
    ]);
    setActiveWindow(id);
    setMaxZIndex((z) => z + 1);
  };

  const closeWindow = (id) => {
    setOpenWindows((ws) => ws.filter((w) => w.id !== id));
    if (activeWindow === id) setActiveWindow(null);
  };

  const toggleMinimize = (id) => {
    const win = openWindows.find((w) => w.id === id);
    if (!win) return;
    if (win.minimized) {
      setOpenWindows((ws) =>
        ws.map((w) => (w.id === id ? { ...w, minimized: false, zIndex: maxZIndex + 1 } : w))
      );
      setActiveWindow(id);
      setMaxZIndex((z) => z + 1);
    } else {
      setOpenWindows((ws) => ws.map((w) => (w.id === id ? { ...w, minimized: true } : w)));
      if (activeWindow === id) setActiveWindow(null);
    }
  };

  const toggleMaximize = (id) => {
    setOpenWindows((ws) =>
      ws.map((w) => (w.id === id ? { ...w, maximized: !w.maximized } : w))
    );
  };

  const focusWindow = (id) => {
    if (activeWindow === id) return;
    setActiveWindow(id);
    setOpenWindows((ws) =>
      ws.map((w) => (w.id === id ? { ...w, zIndex: maxZIndex + 1 } : w))
    );
    setMaxZIndex((z) => z + 1);
  };

  const toggleWindowFromTaskbar = (id) => {
    const win = openWindows.find((w) => w.id === id);
    if (!win) return;
    if (win.minimized) {
      toggleMinimize(id);
    } else if (activeWindow === id) {
      toggleMinimize(id);
    } else {
      focusWindow(id);
    }
  };

  // Auto-open About Me on first load (desktop only)
  useEffect(() => {
    if (!isMobile) {
      const t = setTimeout(() => openWindow('about'), 400);
      return () => clearTimeout(t);
    }
  }, [isMobile]);

  const handleLogOff = () => {
    // Just reload to login screen
    window.location.reload();
  };

  return (
    <motion.div
      className="w-full h-full relative overflow-hidden flex flex-col font-sans select-none"
      style={{
        backgroundImage: `url(${blissImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      onClick={() => {
        if (isStartMenuOpen) setIsStartMenuOpen(false);
        setSelectedIcon(null);
      }}
    >
      {/* Desktop icons */}
      <div className={isMobile ? 'desktop-icons-grid' : 'absolute top-0 left-0 right-0 bottom-10 p-2 pt-6 grid grid-cols-1 grid-rows-[repeat(auto-fill,minmax(80px,80px))] gap-2 justify-items-start place-content-start w-fit z-10'}>
        {DESKTOP_ICONS.map((app) => {
          const Icon = app.icon;
          return (
            <DesktopIcon
              key={app.id}
              title={app.title}
              Icon={Icon ? Icon : FallbackIcon(app.fallbackIcon)}
              onDoubleClick={() => openWindow(app.id)}
              onClick={() => setSelectedIcon(app.id)}
              selected={selectedIcon === app.id}
              isMobile={isMobile}
            />
          );
        })}
      </div>

      {/* Windows */}
      <AnimatePresence>
        {openWindows.map((win) => {
          const app = APPS.find((a) => a.id === win.id);
          if (!app) return null;
          const { Component } = app;
          if (win.minimized) return null;
          const initialRect = isMobile
            ? { x: 10, y: 10, w: window.innerWidth - 20, h: window.innerHeight - 80 }
            : app.defaultRect;
          return (
            <Window
              key={win.id}
              id={win.id}
              title={app.title}
              Icon={app.icon}
              zIndex={win.zIndex}
              isActive={activeWindow === win.id}
              isMaximized={win.maximized || isMobile}
              initialRect={initialRect}
              onClose={() => closeWindow(win.id)}
              onMinimize={() => toggleMinimize(win.id)}
              onMaximize={() => toggleMaximize(win.id)}
              onFocus={() => focusWindow(win.id)}
              showChrome={app.showChrome !== false}
              statusText={app.title}
            >
              <Component />
            </Window>
          );
        })}
      </AnimatePresence>

      {/* Start Menu */}
      <AnimatePresence>
        <StartMenu
          isOpen={isStartMenuOpen}
          toggleStartMenu={() => setIsStartMenuOpen((v) => !v)}
          openWindow={openWindow}
          onShutdown={onShutdown}
          onLogOff={handleLogOff}
        />
      </AnimatePresence>

      {/* Taskbar */}
      <div className="absolute bottom-0 w-full z-50">
        <Taskbar
          openWindows={openWindows}
          activeWindow={activeWindow}
          appsConfig={APPS}
          toggleWindow={toggleWindowFromTaskbar}
          isStartMenuOpen={isStartMenuOpen}
          toggleStartMenu={() => setIsStartMenuOpen((v) => !v)}
        />
      </div>
    </motion.div>
  );
}

function FallbackIcon(emoji) {
  return function FallbackIconImpl(props) {
    return (
      <svg viewBox="0 0 48 48" fill="none" {...props}>
        <g filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.5))">
          <text x="24" y="34" fontSize="28" textAnchor="middle">{emoji}</text>
        </g>
      </svg>
    );
  };
}
