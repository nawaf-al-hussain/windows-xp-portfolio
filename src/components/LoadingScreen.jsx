import { motion } from 'framer-motion';
import { PROFILE } from '../data/profile';

export default function LoadingScreen() {
  return (
    <motion.div
      className="w-full h-full bg-black flex flex-col justify-center items-center text-white relative font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-16 mt-[-10vh] md:mt-0">
        {/* XP Logo (4-quadrant flag) */}
        <div className="w-20 h-20 md:w-24 md:h-24 flex flex-wrap gap-1 perspective-1000 transform -rotate-12 italic">
          <div className="w-[45%] h-[45%] bg-[#ff5a36] rounded-tl-lg shadow-[inset_0_0_10px_rgba(255,255,255,0.5)]"></div>
          <div className="w-[45%] h-[45%] bg-[#7eb600] rounded-tr-lg shadow-[inset_0_0_10px_rgba(255,255,255,0.5)] mt-1"></div>
          <div className="w-[45%] h-[45%] bg-[#00a3f4] rounded-bl-lg shadow-[inset_0_0_10px_rgba(255,255,255,0.5)] -mt-1"></div>
          <div className="w-[45%] h-[45%] bg-[#ffb700] rounded-br-lg shadow-[inset_0_0_10px_rgba(255,255,255,0.5)]"></div>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-italic font-bold tracking-tight pb-1">
            {PROFILE.name} <span className="text-[#f16323] ml-1">XP</span>
          </h1>
          <h2 className="text-lg md:text-xl text-gray-400 font-medium">{PROFILE.title}</h2>
        </div>
      </div>

      {/* Loading bar */}
      <div className="w-64 h-6 border-2 border-gray-600 rounded pt-1 pb-1 px-1 flex bg-[#0c0c0c] mb-16 relative overflow-hidden">
        <motion.div
          className="h-full flex gap-1 absolute"
          initial={{ left: '-50%' }}
          animate={{ left: '100%' }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }}
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-6 h-full bg-gradient-to-b from-[#2562cb] via-[#003399] to-[#2562cb] rounded-sm"></div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-0 w-full flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-10 gap-4 md:gap-0">
        <div className="text-gray-500 flex flex-col md:flex-row items-center gap-1 md:gap-2 text-center md:text-left">
          <span className="text-sm md:text-base font-bold text-gray-400 md:text-gray-500">Microsoft</span>
          <span className="text-[10px] md:text-xs">Copyright © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</span>
        </div>
        <div className="text-gray-400 text-[10px] md:text-sm text-center md:absolute md:left-1/2 md:-translate-x-1/2">
          For the best experience, press F11 for Full Screen
        </div>
      </div>
    </motion.div>
  );
}
