import { motion } from 'framer-motion';

export default function DesktopIcon({ title, Icon, onDoubleClick, selected, onClick, isMobile }) {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick?.();
  };
  const handleDoubleClick = (e) => {
    e.stopPropagation();
    onDoubleClick?.();
  };

  // On mobile, single tap opens (double-tap is awkward on touch)
  const openHandler = isMobile ? handleClick : handleDoubleClick;

  return (
    <motion.div
      className={`flex flex-col items-center justify-center w-20 md:w-24 p-2 rounded cursor-pointer group ${selected ? 'bg-[#0055e5]/40 outline outline-1 outline-dotted outline-white/60' : ''}`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onTouchEnd={(e) => {
        if (isMobile) {
          e.preventDefault();
          openHandler(e);
        }
      }}
      whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
      style={{ WebkitUserSelect: 'none', userSelect: 'none' }}
    >
      <div className="w-12 h-12 flex items-center justify-center mb-1 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
        <Icon className="w-10 h-10 text-white drop-shadow-md" style={{ filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.5))' }} />
      </div>
      <span
        className={`text-white text-xs font-semibold text-center drop-shadow-md px-1 rounded truncate w-full ${selected ? 'bg-[#0055e5] dotted-outline' : ''}`}
        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
      >
        {title}
      </span>
    </motion.div>
  );
}
