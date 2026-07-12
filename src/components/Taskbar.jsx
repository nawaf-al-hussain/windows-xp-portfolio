import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { ChevronRight, Volume2, Wifi } from 'lucide-react';
import { StartIcon } from './Icons';

export default function Taskbar({
  openWindows,
  activeWindow,
  appsConfig,
  toggleWindow,
  isStartMenuOpen,
  toggleStartMenu,
}) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="h-[40px] w-full flex items-center justify-between z-50 text-white font-sans text-sm select-none"
      style={{
        background: 'linear-gradient(to bottom, #245edb 0%, #3f8cf3 9%, #245edb 18%, #245edb 92%, #1941a5 100%)',
      }}
    >
      {/* Start Button */}
      <div className="flex h-full">
        <button
          onClick={(e) => { e.stopPropagation(); toggleStartMenu(); }}
          className={`h-full flex items-center gap-1 px-2 italic font-bold text-xl text-white hover:brightness-110 active:brightness-90 transition-all rounded-r-2xl border-r border-[#1941a5] ${isStartMenuOpen ? 'shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5)] brightness-90' : 'shadow-[inset_-2px_0_5px_rgba(0,0,0,0.3),inset_1px_1px_2px_rgba(255,255,255,0.4)]'}`}
          style={{
            background: 'linear-gradient(to bottom, #3f8845 0%, #46a64f 15%, #38883e 85%, #2a582c 100%)',
            textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
          }}
        >
          <StartIcon className="w-8 h-8" />
          <span className="mt-0.5 mr-3" style={{ fontFamily: 'Georgia, serif' }}>start</span>
        </button>

        <div className="w-[10px] h-full opacity-30 mx-1"></div>
      </div>

      {/* Taskbar Apps */}
      <div className="flex-1 px-2 flex items-center gap-1 h-full overflow-hidden">
        {openWindows.map((win) => {
          const app = appsConfig.find((a) => a.id === win.id);
          if (!app) return null;
          const isActive = activeWindow === win.id && !win.minimized;
          return (
            <button
              key={win.id}
              onClick={() => toggleWindow(win.id)}
              className={`h-[30px] px-3 flex items-center gap-2 rounded-sm max-w-[150px] w-full text-left truncate transition-all ${
                isActive
                  ? 'bg-[#1c449c] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-white'
                  : 'bg-[#3b7bed] hover:bg-[#4b8df9] shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)] border border-[#1941a5]'
              }`}
            >
              {app.icon && <app.icon className="w-4 h-4 flex-shrink-0" />}
              <span className="truncate text-xs font-semibold">{app.title}</span>
            </button>
          );
        })}
      </div>

      {/* Tray Area */}
      <div
        className="h-full flex items-center px-4 pl-6 border-l border-[#1941a5] shadow-[inset_1px_0_0_rgba(255,255,255,0.2)] gap-2"
        style={{ background: 'linear-gradient(to bottom, #0f8de9 0%, #1599f6 10%, #0672ce 100%)' }}
      >
        <ChevronRight className="w-4 h-4 text-white opacity-80" />
        <Volume2 className="w-4 h-4 text-white opacity-90" />
        <Wifi className="w-4 h-4 text-white opacity-90" />
        <span className="text-xs font-normal ml-1" style={{ textShadow: '0 0 2px rgba(0,0,0,1)' }}>
          {format(time, 'h:mm a')}
        </span>
      </div>
    </div>
  );
}
