import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { BackIcon, ForwardIcon, FolderUpIcon, IeIcon, PdfIcon, GoIcon, FileIcon } from './Icons';

// Hardened Window component:
//  - real drag (mouse + touch)
//  - real resize from E, S, SE handles
//  - functional close / minimize / maximize
//  - optional menubar / toolbar / addressbar (controlled by props)
//  - double-click title bar to toggle maximize
export default function Window({
  id,
  title,
  Icon,
  isActive,
  isMaximized,
  zIndex,
  initialRect,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  children,
  showChrome = true, // menubar + toolbar + addressbar
  toolbarItems = [],
  statusText = '',
}) {
  const windowRef = useRef(null);
  const [rect, setRect] = useState(initialRect || { x: 80, y: 40, w: 640, h: 440 });
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState(null); // 'e' | 's' | 'se' | null
  const dragState = useRef(null);

  // Update rect when initialRect changes (new window)
  useEffect(() => {
    if (initialRect) setRect(initialRect);
  }, []); // eslint-disable-line

  const beginDrag = (e) => {
    if (isMaximized) return;
    onFocus();
    const point = getPoint(e);
    dragState.current = {
      mode: 'drag',
      startX: point.x,
      startY: point.y,
      origX: rect.x,
      origY: rect.y,
    };
    setDragging(true);
    e.preventDefault();
  };

  const beginResize = (mode) => (e) => {
    if (isMaximized) return;
    e.stopPropagation();
    e.preventDefault();
    onFocus();
    const point = getPoint(e);
    dragState.current = {
      mode,
      startX: point.x,
      startY: point.y,
      origW: rect.w,
      origH: rect.h,
    };
    setResizing(mode);
  };

  const handleMove = useCallback((e) => {
    if (!dragState.current) return;
    const point = getPoint(e);
    const ds = dragState.current;
    if (ds.mode === 'drag') {
      const dx = point.x - ds.startX;
      const dy = point.y - ds.startY;
      const maxX = window.innerWidth - 80;
      const maxY = window.innerHeight - 60;
      setRect((r) => ({
        ...r,
        x: Math.max(-r.w + 100, Math.min(ds.origX + dx, maxX)),
        y: Math.max(0, Math.min(ds.origY + dy, maxY)),
      }));
    } else {
      const dx = point.x - ds.startX;
      const dy = point.y - ds.startY;
      setRect((r) => ({
        ...r,
        w: ds.mode === 's' ? r.w : Math.max(320, ds.origW + dx),
        h: ds.mode === 'e' ? r.h : Math.max(200, ds.origH + dy),
      }));
    }
  }, []);

  const endDrag = useCallback(() => {
    dragState.current = null;
    setDragging(false);
    setResizing(null);
  }, []);

  useEffect(() => {
    if (!dragging && !resizing) return;
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', endDrag);
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', endDrag);
    document.body.classList.toggle('dragging', dragging);
    document.body.classList.toggle('resizing', resizing);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', endDrag);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', endDrag);
      document.body.classList.remove('dragging', 'resizing');
    };
  }, [dragging, resizing, handleMove, endDrag]);

  const style = isMaximized
    ? { left: 0, top: 0, width: '100%', height: 'calc(100% - 40px)', zIndex }
    : { left: rect.x, top: rect.y, width: rect.w, height: rect.h, zIndex };

  return (
    <motion.div
      ref={windowRef}
      className={`absolute flex flex-col font-sans select-none overflow-hidden rounded-md border-2 shadow-xp-lg ${isActive ? 'border-[#0055e5]' : 'border-[#4e82d8]'}`}
      style={{ ...style, backgroundColor: '#0055e5' }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.18 } }}
      exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.13 } }}
      onMouseDownCapture={onFocus}
    >
      {/* Title Bar */}
      <div
        className="title-bar h-8 px-2 flex items-center justify-between shadow-sm flex-shrink-0"
        style={{
          background: isActive
            ? 'linear-gradient(to right, #0058e6 0%, #3a93ff 5%, #288eff 10%, #127dff 50%, #036ffc 100%)'
            : 'linear-gradient(to bottom, #7697e7 0%, #7e9ea3 100%)',
          cursor: isMaximized ? 'default' : 'grab',
        }}
        onMouseDown={beginDrag}
        onTouchStart={beginDrag}
        onDoubleClick={(e) => { e.stopPropagation(); onMaximize(); }}
      >
        <div className="flex items-center gap-2 overflow-hidden w-[80%]">
          {Icon && <Icon className="w-4 h-4 flex-shrink-0 text-white" />}
          <span
            className={`font-semibold text-sm truncate drop-shadow-md ${isActive ? 'text-white' : 'text-gray-200'}`}
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
          >
            {title}
          </span>
        </div>

        <div className="flex gap-1 h-5 ml-1">
          <button
            className="w-6 h-full flex items-center justify-center bg-[#156ce4] hover:bg-[#348ae9] border border-white/40 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_-1px_-1px_2px_rgba(0,0,0,0.3)] rounded-sm group relative"
            onClick={(e) => { e.stopPropagation(); onMinimize(); }}
            title="Minimize"
          >
            <div className="w-2.5 h-[2px] bg-white relative top-1 rounded-sm shadow-sm" />
          </button>
          <button
            className="w-6 h-full flex items-center justify-center bg-[#156ce4] hover:bg-[#348ae9] border border-white/40 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_-1px_-1px_2px_rgba(0,0,0,0.3)] rounded-sm p-[3px]"
            onClick={(e) => { e.stopPropagation(); onMaximize(); }}
            title={isMaximized ? 'Restore' : 'Maximize'}
          >
            <div className="w-full h-full border-t-2 border-l border-r border-b border-white rounded-sm shadow-sm" />
          </button>
          <button
            className="w-6 h-full flex items-center justify-center bg-[#e84b2c] hover:bg-[#f96346] border border-white/40 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),inset_-1px_-1px_2px_rgba(0,0,0,0.3)] rounded-sm group"
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            title="Close"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>

      {showChrome && (
        <>
          {/* Menu Bar */}
          <div className="h-6 bg-[#ece9d8] flex items-center px-1 text-xs text-black/90 font-normal select-none relative z-10">
            <span className="hover:bg-[#316ac5] hover:text-white px-2 py-0.5 rounded-sm cursor-pointer">File</span>
            <span className="hover:bg-[#316ac5] hover:text-white px-2 py-0.5 rounded-sm cursor-pointer">Edit</span>
            <span className="hover:bg-[#316ac5] hover:text-white px-2 py-0.5 rounded-sm cursor-pointer">View</span>
            <span className="hover:bg-[#316ac5] hover:text-white px-2 py-0.5 rounded-sm cursor-pointer">Favorites</span>
            <span className="hover:bg-[#316ac5] hover:text-white px-2 py-0.5 rounded-sm cursor-pointer">Tools</span>
            <span className="hover:bg-[#316ac5] hover:text-white px-2 py-0.5 rounded-sm cursor-pointer">Help</span>
          </div>

          {/* Toolbar */}
          <div className="h-10 bg-[#ece9d8] border-t border-white shadow-[0_1px_0_#aca899] flex items-center px-1 text-xs font-normal select-none gap-1 overflow-x-auto no-scrollbar">
            <button className="flex items-center gap-1 hover:border-black border border-transparent hover:shadow-[1px_1px_0_#fff,inset_1px_1px_0_#fff] px-1 py-1 rounded-sm cursor-pointer disabled:opacity-50" disabled>
              <BackIcon className="w-6 h-6" />
              <span className="text-gray-500">Back</span>
            </button>
            <button className="flex items-center gap-1 hover:border-black border border-transparent hover:shadow-[1px_1px_0_#fff,inset_1px_1px_0_#fff] px-1 py-1 rounded-sm cursor-pointer disabled:opacity-50" disabled>
              <ForwardIcon className="w-6 h-6" />
              <span className="text-gray-500 text-xs">Forward</span>
            </button>
            <div className="w-[1px] h-6 bg-gray-400 mx-1 border-r border-white"></div>
            {toolbarItems.map((item) => (
              <button
                key={item.label}
                onClick={item.onClick}
                className="flex items-center gap-1 hover:border-black border border-transparent hover:shadow-[1px_1px_0_#fff,inset_1px_1px_0_#fff] px-2 py-1 rounded-sm cursor-pointer"
              >
                {item.icon && <item.icon className="w-5 h-5" />}
                <span className="text-black whitespace-nowrap">{item.label}</span>
              </button>
            ))}
            <div className="w-[1px] h-6 bg-gray-400 mx-1 border-r border-white"></div>
            <button className="flex items-center hover:border-black border border-transparent hover:shadow-[1px_1px_0_#fff,inset_1px_1px_0_#fff] px-1 py-1 rounded-sm cursor-pointer">
              <FolderUpIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Address Bar */}
          <div className="h-8 bg-[#ece9d8] border-t border-white border-b border-[#aca899] flex items-center px-2 text-xs font-normal select-none gap-2">
            <span className="text-gray-600">Address</span>
            <div className="flex-1 h-5 bg-white border border-[#7f9db9] flex items-center px-1 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)] overflow-hidden">
              {Icon && <Icon className="w-3.5 h-3.5 mr-1 flex-shrink-0" />}
              <span className="flex-1 block truncate">{title}</span>
            </div>
            <button className="flex items-center gap-1 text-black">
              <GoIcon className="w-5 h-5" />
              <span className="text-[10px] font-bold">Go</span>
            </button>
          </div>
        </>
      )}

      {/* Content Body */}
      <div
        className="flex-1 overflow-auto flex flex-col selectable"
        onMouseDownCapture={(e) => e.stopPropagation()}
      >
        <div
          className="flex-1 bg-white border-l border-[#aca899] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.1)] text-black font-sans"
          style={{
            backgroundImage: showChrome
              ? 'linear-gradient(#e5e5d0 1px, transparent 1px), linear-gradient(90deg, #e5e5d0 1px, transparent 1px)'
              : 'none',
            backgroundSize: showChrome ? '12px 12px' : 'auto',
          }}
        >
          {children}
        </div>
        {/* Status Bar */}
        {(statusText || showChrome) && (
          <div className="h-5 bg-[#ece9d8] border-t border-[#aca899] flex items-center px-2 text-[10px] text-black">
            {statusText || `${title} — ${PROFILE_NAME}`}
          </div>
        )}
      </div>

      {/* Resize handles — only when not maximized */}
      {!isMaximized && (
        <>
          <div
            className="absolute right-0 top-8 bottom-0 w-1.5 cursor-e-resize z-20"
            onMouseDown={beginResize('e')}
            onTouchStart={beginResize('e')}
          />
          <div
            className="absolute left-0 right-0 bottom-0 h-1.5 cursor-s-resize z-20"
            onMouseDown={beginResize('s')}
            onTouchStart={beginResize('s')}
          />
          <div
            className="absolute right-0 bottom-0 w-3 h-3 cursor-se-resize z-30"
            onMouseDown={beginResize('se')}
            onTouchStart={beginResize('se')}
          />
        </>
      )}
    </motion.div>
  );
}

// Helpers
function getPoint(e) {
  if (e.touches && e.touches[0]) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
  return { x: e.clientX, y: e.clientY };
}

const PROFILE_NAME = 'Nawaf Al Hussain';
