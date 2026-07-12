import { motion } from 'framer-motion';
import {
  IeIcon, ContactSyncIcon, AboutIcon, MusicPlayerIcon, MediaPlayerIcon,
  PaintIcon, DoodleDevIcon, PlayArrowIcon, LogOffIcon, ShutDownIcon,
  InstagramIcon, GithubIcon, LinkedinIcon, RecentlyUsedIcon, CommandPromptIcon,
  ImageViewerIcon, PdfIcon, SkillsIcon, MinesweeperIcon, RecycleBinIcon,
} from './Icons';
import { PROFILE } from '../data/profile';
const avatarUrl = `${import.meta.env.BASE_URL}${PROFILE.avatar.replace(/^\//, '')}`;

export default function StartMenu({ isOpen, toggleStartMenu, openWindow, onShutdown, onLogOff }) {
  if (!isOpen) return null;

  const handle = (fn) => () => {
    fn();
    toggleStartMenu();
  };

  return (
    <motion.div
      className="absolute bottom-[40px] left-0 w-[420px] max-w-[95vw] bg-white rounded-tr-lg rounded-tl-[8px] flex flex-col font-sans select-none z-[60] border-2 border-[#135ce4] overflow-hidden shadow-xp-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.15 }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div
        className="h-16 flex items-center px-2 py-2 gap-3"
        style={{
          background: 'linear-gradient(to bottom, #1d62f0 0%, #1646a7 100%)',
          borderTop: '1px solid #73a9f9',
        }}
      >
        <div className="w-12 h-12 bg-[#e4a369] rounded shadow-[0_0_2px_rgba(0,0,0,0.5)] relative overflow-hidden flex items-center justify-center p-[2px]">
          <div className="w-full h-full border border-white rounded-sm overflow-hidden bg-white">
            <img src={avatarUrl} alt={PROFILE.name} className="w-full h-full object-cover" />
          </div>
        </div>
        <span
          className="text-white text-lg font-bold drop-shadow-md"
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}
        >
          {PROFILE.name}
        </span>
      </div>

      {/* Body */}
      <div className="flex bg-white flex-1 min-h-[380px]">
        {/* Left Column */}
        <div className="flex-1 flex flex-col py-2 px-1 border-r border-[#96b4db]">
          <div className="flex flex-col gap-0 pb-2 border-b border-gradient-to-r from-transparent via-[#d6e5f5] to-transparent">
            <StartMenuItem
              icon={<IeIcon className="w-8 h-8" />}
              title="My Projects"
              subtitle="View my work"
              onClick={handle(() => openWindow('projects'))}
            />
            <StartMenuItem
              icon={<ContactSyncIcon className="w-8 h-8" />}
              title="Contact Me"
              subtitle="Send me a message"
              onClick={handle(() => openWindow('contact'))}
            />
          </div>
          <div className="flex flex-col gap-1 py-1 flex-1 relative">
            <StartMenuItem icon={<AboutIcon className="w-6 h-6" />} title="About Me" onClick={handle(() => openWindow('about'))} small />
            <StartMenuItem icon={<SkillsIcon className="w-6 h-6" />} title="Skills" onClick={handle(() => openWindow('skills'))} small />
            <StartMenuItem icon={<PdfIcon className="w-6 h-6" />} title="My Resume" onClick={handle(() => openWindow('resume'))} small />
            <StartMenuItem icon={<MinesweeperIcon className="w-6 h-6" />} title="Minesweeper" onClick={handle(() => openWindow('minesweeper'))} small />
            <StartMenuItem icon={<PaintIcon className="w-6 h-6" />} title="Paint" onClick={handle(() => openWindow('paint'))} small />
            <StartMenuItem icon={<DoodleDevIcon className="w-6 h-6" />} title="Notepad" onClick={handle(() => openWindow('notepad'))} small />
          </div>

          <div
            className="mt-auto pl-4 pr-1 pt-2 border-t border-[#d3e5fa] flex items-center justify-between group cursor-pointer hover:bg-[#2f71cd] hover:text-white pb-1 rounded-sm"
            onClick={handle(() => openWindow('recycle'))}
          >
            <span className="font-bold text-[11px] group-hover:text-white text-gray-800">All Programs</span>
            <PlayArrowIcon className="w-6 h-6 text-green-600 group-hover:text-green-300" />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-[180px] bg-[#d3e5fa] border-l border-white flex flex-col pt-2 px-1">
          <StartMenuSmallItem
            icon={<GithubIcon className="w-5 h-5" />}
            title="GitHub"
            href={PROFILE.accounts.find((a) => a.id === 'github')?.href}
          />
          <StartMenuSmallItem
            icon={<LinkedinIcon className="w-5 h-5" />}
            title="LinkedIn"
            href="https://www.linkedin.com/"
          />
          <StartMenuSmallItem
            icon={<InstagramIcon className="w-5 h-5" />}
            title="Instagram"
            href="https://www.instagram.com/"
          />

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent my-2" />

          <StartMenuSmallItem
            icon={<RecentlyUsedIcon className="w-5 h-5" />}
            title="My Website"
            href={PROFILE.accounts.find((a) => a.id === 'website')?.href}
          />
          <StartMenuSmallItem
            icon={<ImageViewerIcon className="w-5 h-5" />}
            title="Image Viewer"
            onClick={handle(() => openWindow('recycle'))}
          />

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent my-2" />

          <StartMenuSmallItem
            icon={<CommandPromptIcon className="w-5 h-5" />}
            title="Command Prompt"
            onClick={handle(() => openWindow('notepad'))}
          />
          <StartMenuSmallItem
            icon={<PdfIcon className="w-5 h-5" />}
            title="My Resume"
            onClick={handle(() => openWindow('resume'))}
          />
          <StartMenuSmallItem
            icon={<RecycleBinIcon className="w-5 h-5" />}
            title="Recycle Bin"
            onClick={handle(() => openWindow('recycle'))}
          />
        </div>
      </div>

      {/* Footer */}
      <div
        className="h-10 flex items-center justify-end px-4 gap-4"
        style={{
          background: 'linear-gradient(to bottom, #1d62f0 0%, #1646a7 100%)',
          borderTop: '1px solid #73a9f9',
        }}
      >
        <button
          onClick={handle(onLogOff)}
          className="flex items-center gap-1 cursor-pointer group hover:brightness-110 px-2 py-1 rounded hover:bg-white/10 transition-colors bg-transparent border-0"
        >
          <LogOffIcon className="w-6 h-6 shadow-sm" />
          <span className="text-white text-xs font-semibold">Log Off</span>
        </button>
        <button
          onClick={handle(onShutdown)}
          className="flex items-center gap-1 cursor-pointer group hover:brightness-110 px-2 py-1 rounded hover:bg-white/10 transition-colors bg-transparent border-0"
        >
          <ShutDownIcon className="w-6 h-6 shadow-sm" />
          <span className="text-white text-xs font-semibold">Turn Off Computer</span>
        </button>
      </div>
    </motion.div>
  );
}

function StartMenuItem({ icon, title, subtitle, onClick, small }) {
  return (
    <div
      className={`flex items-center gap-2 p-1.5 hover:bg-[#2f71cd] hover:text-white text-gray-800 rounded group cursor-pointer ${small ? 'py-1' : 'py-2'}`}
      onClick={onClick}
    >
      <div className={`flex items-center justify-center flex-shrink-0 ${small ? 'w-6 h-6 ml-1' : 'w-8 h-8'}`}>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-[13px] group-hover:text-white leading-tight">{title}</span>
        {subtitle && <span className="text-[10px] text-gray-500 group-hover:text-gray-200 mt-0.5">{subtitle}</span>}
      </div>
    </div>
  );
}

function StartMenuSmallItem({ icon, title, isSelected, href, onClick }) {
  const handleClick = () => {
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (onClick) {
      onClick();
    }
  };
  return (
    <div
      className={`flex items-center gap-2 p-1.5 rounded group cursor-pointer ${isSelected ? 'bg-[#2f71cd] text-white font-bold' : 'hover:bg-[#2f71cd] hover:text-white text-[#1a3b6e] font-semibold'}`}
      onClick={handleClick}
    >
      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <span className="text-xs">{title}</span>
    </div>
  );
}
