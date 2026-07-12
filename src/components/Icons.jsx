// Hand-drawn Windows XP-style SVG icons.
// Adapted from https://github.com/Jones-6199/Windows-xp-portfolio (MIT)
// with additions for Skills, Minesweeper, Internet Explorer, Recycle Bin, etc.

export const AboutIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.5))">
      <circle cx="24" cy="24" r="22" fill="#fff" stroke="#555" strokeWidth="1"/>
      <path d="M24 2 A22 22 0 0 1 46 24 L24 24 Z" fill="#66A5ED" />
      <path d="M46 24 A22 22 0 0 1 24 46 L24 24 Z" fill="#9CD155" />
      <path d="M24 46 A22 22 0 0 1 2 24 L24 24 Z" fill="#D29948" />
      <path d="M2 24 A22 22 0 0 1 24 2 L24 24 Z" fill="#D35F4D" />
      <circle cx="24" cy="24" r="22" fill="none" stroke="#fff" strokeWidth="2" strokeOpacity="0.4" />
      <circle cx="24" cy="24" r="22" stroke="#555" strokeWidth="1" />
      <path d="M24 8 L24 38 M18 14 L24 8 L30 14 M18 32 L24 38 L30 32" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M24 9 L24 37 L30 31 M24 37 L18 31 M24 9 L18 15 M24 9 L30 15" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeOpacity="0.5"/>
    </g>
  </svg>
);

export const PdfIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.5))">
      <path d="M10 6 L28 6 L38 16 L38 42 L10 42 Z" fill="#fff" stroke="#999" strokeWidth="1" />
      <path d="M28 6 L28 16 L38 16" fill="#f0f0f0" stroke="#999" strokeWidth="1" />
      <rect x="6" y="10" width="22" height="10" fill="#E23028" rx="2" />
      <text x="8" y="18" fill="#fff" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold">PDF</text>
      <path d="M20 26 C16 26 15 32 18 34 C21 36 21 28 24 25 C26 23 30 23 31 25 C33 28 32 36 28 36" stroke="#E23028" strokeWidth="1.5" fill="none" />
      <circle cx="18" cy="34" r="2" stroke="#E23028" strokeWidth="1" fill="none" />
      <circle cx="28" cy="36" r="2" stroke="#E23028" strokeWidth="1" fill="none" />
    </g>
  </svg>
);

export const IeIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.5))">
      <text x="24" y="38" fill="#13A0E9" fontFamily="Arial, sans-serif" fontSize="42" fontWeight="bold" fontStyle="italic" textAnchor="middle">e</text>
      <path d="M8 28 C 10 16, 26 12, 42 20 O 38 18, 20 28 Z" fill="#FAD144" />
      <path d="M12 26 C 24 20, 36 24, 40 30 C 26 26, 12 30, 8 36 Z" fill="#FAD144" />
    </g>
  </svg>
);

export const MailIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.5))">
      <rect x="6" y="14" width="36" height="24" fill="#fff" stroke="#90CAF9" strokeWidth="2" />
      <path d="M6 14 L24 26 L42 14" stroke="#90CAF9" strokeWidth="2" fill="none" />
      <path d="M6 38 L16 26 M42 38 L32 26" stroke="#90CAF9" strokeWidth="2" fill="none" />
      <path d="M6 24 L2 20 M6 32 L2 36 M42 24 L46 20 M42 32 L46 36" stroke="#42A5F5" strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="14" r="4" fill="#42A5F5" />
      <path d="M21 16 L24 22 L27 16 Z" fill="#42A5F5" />
    </g>
  </svg>
);

export const FolderUpIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 10 L16 10 L20 16 L44 16 L44 38 L4 38 Z" fill="#FAD144" stroke="#D1A721" strokeWidth="2"/>
    <path d="M4 18 L44 18 L40 40 L8 40 Z" fill="#FCE182" stroke="#D1A721" strokeWidth="1"/>
    <path d="M24 24 L24 34 M20 28 L24 24 L28 28" stroke="#333" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const BackIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" fill="#9CD155" stroke="#719A3E" strokeWidth="1" />
    <path d="M14 8 L10 12 L14 16" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 8 L10 12 L14 16" stroke="#555" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" transform="translate(0, 1)" />
  </svg>
);

export const ForwardIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" fill="#e0e0e0" stroke="#bbb" strokeWidth="1" />
    <path d="M10 8 L14 12 L10 16" stroke="#aaa" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const StartIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} className={props.className} style={{...props.style, overflow: 'visible'}}>
    <g filter="drop-shadow(1px 1px 1px rgba(0,0,0,0.5))" transform="rotate(-15 12 12)">
      <path d="M4 12 C4 8 8 6 11 6 L11 11 L4 12 Z" fill="#E23028" stroke="#fff" strokeWidth="0.5" />
      <path d="M11 6 C13 6 14 7 14 9 L11 11 Z" fill="#F0A128" stroke="#fff" strokeWidth="0.5" />
      <path d="M14 9 C18 11 20 13 20 15 L11 11 Z" fill="#7EB600" stroke="#fff" strokeWidth="0.5" />
      <path d="M20 15 C20 18 16 22 13 22 L11 11 Z" fill="#3F8CF3" stroke="#fff" strokeWidth="0.5" />
    </g>
  </svg>
);

export const ContactSyncIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.5))">
      <rect x="6" y="10" width="36" height="28" rx="2" fill="#fff" stroke="#888" strokeWidth="1"/>
      <rect x="6" y="10" width="36" height="6" fill="#2562cb"/>
      <circle cx="24" cy="26" r="6" fill="#FFD54F" stroke="#F57C00" strokeWidth="1"/>
      <path d="M18 36 Q 24 28 30 36 Z" fill="#1976D2"/>
      <path d="M6 16 L42 16" stroke="#fff" strokeWidth="1" strokeOpacity="0.5"/>
    </g>
  </svg>
);

export const MusicPlayerIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.5))">
      <circle cx="24" cy="24" r="20" fill="#E0E0E0" stroke="#888" strokeWidth="1"/>
      <circle cx="24" cy="24" r="14" fill="#fff" stroke="#888" strokeWidth="1"/>
      <circle cx="24" cy="24" r="3" fill="#333"/>
      <path d="M24 8 L24 24 L34 18" stroke="#333" strokeWidth="2" fill="none"/>
    </g>
  </svg>
);

export const MediaPlayerIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.5))">
      <rect x="6" y="10" width="36" height="28" rx="3" fill="#2196F3" stroke="#0D47A1" strokeWidth="1"/>
      <path d="M20 18 L20 30 L32 24 Z" fill="#fff"/>
    </g>
  </svg>
);

export const PaintIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.5))">
      <path d="M24 4 C 12 4, 4 12, 4 22 C 4 30, 10 34, 16 34 C 20 34, 20 38, 18 40 C 16 42, 20 44, 24 44 C 38 44, 44 34, 44 24 C 44 12, 36 4, 24 4 Z" fill="#fff" stroke="#888" strokeWidth="1"/>
      <circle cx="14" cy="20" r="3" fill="#E53935"/>
      <circle cx="22" cy="14" r="3" fill="#FBC02D"/>
      <circle cx="32" cy="16" r="3" fill="#43A047"/>
      <circle cx="36" cy="24" r="3" fill="#1E88E5"/>
      <circle cx="32" cy="32" r="3" fill="#8E24AA"/>
      <circle cx="20" cy="32" r="3" fill="#FB8C00"/>
    </g>
  </svg>
);

export const DoodleDevIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.5))">
      <rect x="6" y="10" width="36" height="28" rx="2" fill="#1a1a2e" stroke="#444" strokeWidth="1"/>
      <text x="24" y="30" fill="#00FF99" fontFamily="Consolas, monospace" fontSize="14" fontWeight="bold" textAnchor="middle">&lt;/&gt;</text>
    </g>
  </svg>
);

export const PlayArrowIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 5 L8 19 L18 12 Z" fill="currentColor"/>
  </svg>
);

export const LogOffIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M14 6 L20 12 L14 18 M4 12 L20 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="2" y="2" width="20" height="20" rx="3" stroke="#fff" strokeWidth="1" fill="none"/>
  </svg>
);

export const ShutDownIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2 L12 12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M5 6 C 2 9, 2 15, 5 18 C 8 21, 16 21, 19 18 C 22 15, 22 9, 19 6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
  </svg>
);

export const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
  </svg>
);

export const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2 C 6.5 2, 2 6.5, 2 12 C 2 16.4, 4.9 20.1, 8.9 21.4 C 9.4 21.5, 9.5 21.2, 9.5 21 L 9.5 19.5 C 6.7 20.1, 6.1 18.2, 6.1 18.2 C 5.7 17.1, 5.1 16.8, 5.1 16.8 C 4.2 16.2, 5.2 16.2, 5.2 16.2 C 6.2 16.3, 6.7 17.2, 6.7 17.2 C 7.6 18.7, 9.1 18.3, 9.7 18 C 9.8 17.3, 10.1 16.8, 10.4 16.6 C 8.2 16.3, 5.9 15.5, 5.9 11.5 C 5.9 10.4, 6.3 9.5, 6.9 8.8 C 6.8 8.6, 6.5 7.6, 7 6.3 C 7 6.3, 7.8 6, 9.6 7.3 C 10.4 7.1, 11.2 7, 12 7 C 12.8 7, 13.6 7.1, 14.4 7.3 C 16.2 6, 17 6.3, 17 6.3 C 17.5 7.6, 17.2 8.6, 17.1 8.8 C 17.7 9.5, 18.1 10.4, 18.1 11.5 C 18.1 15.5, 15.8 16.3, 13.6 16.6 C 14 16.9, 14.3 17.6, 14.3 18.6 L 14.3 21 C 14.3 21.2, 14.5 21.5, 14.9 21.4 C 18.9 20.1, 21.8 16.4, 21.8 12 C 22 6.5, 17.5 2, 12 2 Z"/>
  </svg>
);

export const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4.98 3.5 C 4.98 4.88, 3.87 6, 2.5 6 C 1.12 6, 0 4.88, 0 3.5 C 0 2.12, 1.12 1, 2.5 1 C 3.87 1, 4.98 2.12, 4.98 3.5 Z M 0.5 8 L 4.5 8 L 4.5 24 L 0.5 24 Z M 8 8 L 12 8 L 12 10 L 12.1 10 C 12.9 8.5, 14.6 7, 17 7 C 21 7, 24 9.5, 24 14.5 L 24 24 L 20 24 L 20 15.5 C 20 13, 19 11.5, 16.8 11.5 C 15 11.5, 14 12.7, 13.5 14 C 13.3 14.5, 13.5 15, 13.5 15.5 L 13.5 24 L 8 24 Z"/>
  </svg>
);

export const RecentlyUsedIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 7 L12 12 L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const CommandPromptIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="2" y="3" width="20" height="18" rx="2" fill="#0c0c0c" stroke="#444" strokeWidth="1"/>
    <text x="12" y="17" fill="#fff" fontFamily="Consolas, monospace" fontSize="14" fontWeight="bold" textAnchor="middle">&gt;_</text>
  </svg>
);

export const ImageViewerIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.5))">
      <rect x="6" y="10" width="36" height="28" rx="2" fill="#fff" stroke="#888" strokeWidth="1"/>
      <circle cx="16" cy="20" r="3" fill="#FFC107"/>
      <path d="M6 38 L 18 26 L 26 34 L 34 22 L 42 32 L 42 38 Z" fill="#4CAF50"/>
    </g>
  </svg>
);

// === Additional icons for the apps I added ===

export const SkillsIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.5))">
      <path d="M24 2 L 28 14 L 40 14 L 30 22 L 34 34 L 24 26 L 14 34 L 18 22 L 8 14 L 20 14 Z" fill="#FFC107" stroke="#F57C00" strokeWidth="1" strokeLinejoin="round"/>
      <circle cx="24" cy="42" r="3" fill="#FFC107" stroke="#F57C00" strokeWidth="1"/>
    </g>
  </svg>
);

export const MinesweeperIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.5))">
      <circle cx="24" cy="26" r="14" fill="#222" stroke="#000" strokeWidth="1"/>
      <rect x="22" y="6" width="4" height="8" fill="#888"/>
      <circle cx="20" cy="22" r="3" fill="#fff" fillOpacity="0.6"/>
      <path d="M24 12 L 28 6 L 32 12 Z" fill="#E53935"/>
    </g>
  </svg>
);

export const RecycleBinIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.5))">
      <path d="M10 14 L 38 14 L 36 42 L 12 42 Z" fill="#9CB7E8" stroke="#1E4A8F" strokeWidth="1"/>
      <path d="M14 18 L 34 18" stroke="#1E4A8F" strokeWidth="1" strokeOpacity="0.4"/>
      <path d="M14 24 L 34 24" stroke="#1E4A8F" strokeWidth="1" strokeOpacity="0.4"/>
      <path d="M14 30 L 34 30" stroke="#1E4A8F" strokeWidth="1" strokeOpacity="0.4"/>
      <path d="M14 36 L 34 36" stroke="#1E4A8F" strokeWidth="1" strokeOpacity="0.4"/>
      <rect x="8" y="8" width="32" height="6" rx="1" fill="#5C8DD4" stroke="#1E4A8F" strokeWidth="1"/>
      <path d="M18 8 L 18 6 C 18 5, 19 4, 20 4 L 28 4 C 29 4, 30 5, 30 6 L 30 8" fill="none" stroke="#1E4A8F" strokeWidth="1"/>
      <g transform="translate(16, 22) scale(0.7)">
        <path d="M2 4 L 14 4 M 8 4 L 8 14 M 5 14 L 11 14" stroke="#1E7C3F" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M14 4 L 24 4 M 19 4 L 19 14 M 16 14 L 22 14" stroke="#1E7C3F" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </g>
    </g>
  </svg>
);

export const FolderIcon = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.5))">
      <path d="M4 10 L 16 10 L 20 16 L 44 16 L 44 38 L 4 38 Z" fill="#FAD144" stroke="#D1A721" strokeWidth="2"/>
      <path d="M4 18 L 44 18 L 40 40 L 8 40 Z" fill="#FCE182" stroke="#D1A721" strokeWidth="1"/>
    </g>
  </svg>
);

// Generic window-content icon (small file/folder for address bar)
export const FileIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 2 L 14 2 L 20 8 L 20 22 L 4 22 Z" fill="#fff" stroke="#888" strokeWidth="1"/>
    <path d="M14 2 L 14 8 L 20 8" fill="#f0f0f0" stroke="#888" strokeWidth="1"/>
  </svg>
);

// Refresh / Go arrow (green circle with arrow)
export const GoIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10" fill="#4CAF50" stroke="#2E7D32" strokeWidth="1"/>
    <path d="M5 12 L 19 12 M 14 7 L 19 12 L 14 17" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
