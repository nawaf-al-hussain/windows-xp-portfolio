import { useEffect } from 'react';

export default function BSOD({ onRestart }) {
  useEffect(() => {
    const handler = (e) => {
      // Any key or click restarts
      e.preventDefault();
      onRestart();
    };
    window.addEventListener('keydown', handler);
    window.addEventListener('click', handler);
    return () => {
      window.removeEventListener('keydown', handler);
      window.removeEventListener('click', handler);
    };
  }, [onRestart]);

  return (
    <div
      className="w-full h-full bg-[#0000a8] text-white flex items-center justify-center p-6 md:p-12"
      style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
    >
      <div className="max-w-3xl w-full" style={{ fontSize: 'clamp(11px, 1.6vw, 15px)', lineHeight: 1.7 }}>
        <p className="bg-white text-[#0000a8] inline-block px-3 py-0 mb-4 font-bold">Windows</p>
        <p>A fatal exception has occurred at 0028:C0011E36 in VXD VMM(01) + 00010E36.</p>
        <p className="mt-3">The current application will be terminated.</p>
        <p className="mt-3">* Press any key to restart your tour of my portfolio.</p>
        <p className="mt-3">* Press CTRL+ALT+DEL to restart your computer. You will lose any unsaved information in all applications.</p>
        <p className="mt-6">Press any key to continue _</p>
      </div>
    </div>
  );
}
