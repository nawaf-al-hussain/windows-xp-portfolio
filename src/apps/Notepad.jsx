import { useState } from 'react';
import { PROFILE } from '../data/profile';

export default function Notepad() {
  const initialText = `Welcome to Notepad — ${PROFILE.name}'s scratchpad.

Things I'm working on:
  - Ship the Windows XP portfolio (you're looking at it)
  - Get better at TypeScript
  - Contribute to one open-source project per month
  - Finish this semester's projects on time

Keyboard shortcuts:
  Ctrl+A   Select all
  Ctrl+C   Copy
  Ctrl+V   Paste
  Ctrl+S   Save (downloads as .txt)

Try editing this text. Press Ctrl+S to save your notes.`;

  const [text, setText] = useState(initialText);

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'notes.txt';
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex items-center gap-1 px-2 py-1 bg-[#ece9d8] border-b border-[#aca899] text-xs">
        <span className="hover:bg-[#316ac5] hover:text-white px-2 py-0.5 rounded cursor-default">
          <u>F</u>ile
        </span>
        <span className="hover:bg-[#316ac5] hover:text-white px-2 py-0.5 rounded cursor-default">
          <u>E</u>dit
        </span>
        <span className="hover:bg-[#316ac5] hover:text-white px-2 py-0.5 rounded cursor-default">
          <u>F</u>ormat
        </span>
        <span className="hover:bg-[#316ac5] hover:text-white px-2 py-0.5 rounded cursor-default">
          <u>H</u>elp
        </span>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 w-full p-3 text-sm font-mono resize-none outline-none border-0"
        style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
        spellCheck="false"
      />
      <div className="flex justify-between items-center px-3 py-1 bg-[#ece9d8] border-t border-[#aca899] text-[10px] text-gray-700">
        <span>Ln 1, Col 1</span>
        <span>{text.length} chars · UTF-8 · Press Ctrl+S to save</span>
      </div>
    </div>
  );
}
