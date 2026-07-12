import { useState, useEffect, useCallback, useRef } from 'react';

const ROWS = 9;
const COLS = 9;
const MINES = 10;

function makeEmpty() {
  return Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => ({
      isMine: false,
      revealed: false,
      flagged: false,
      count: 0,
    }))
  );
}

function placeMines(grid, safeR, safeC) {
  let placed = 0;
  while (placed < MINES) {
    const r = Math.floor(Math.random() * ROWS);
    const c = Math.floor(Math.random() * COLS);
    if (grid[r][c].isMine) continue;
    if (Math.abs(r - safeR) <= 1 && Math.abs(c - safeC) <= 1) continue;
    grid[r][c].isMine = true;
    placed++;
  }
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c].isMine) continue;
      let n = 0;
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr, nc = c + dc;
          if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && grid[nr][nc].isMine) n++;
        }
      }
      grid[r][c].count = n;
    }
  }
}

export default function Minesweeper() {
  const [grid, setGrid] = useState(makeEmpty);
  const [gameState, setGameState] = useState('ready'); // 'ready' | 'playing' | 'won' | 'lost'
  const [time, setTime] = useState(0);
  const [flags, setFlags] = useState(0);
  const timerRef = useRef(null);

  const reset = useCallback(() => {
    setGrid(makeEmpty());
    setGameState('ready');
    setTime(0);
    setFlags(0);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const reveal = (r, c, g) => {
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return;
    const cell = g[r][c];
    if (cell.revealed || cell.flagged) return;
    cell.revealed = true;
    if (cell.count === 0 && !cell.isMine) {
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          reveal(r + dr, c + dc, g);
        }
      }
    }
  };

  const handleClick = (r, c) => {
    if (gameState === 'won' || gameState === 'lost') return;
    const g = grid.map((row) => row.map((cell) => ({ ...cell })));
    if (g[r][c].flagged || g[r][c].revealed) return;

    if (gameState === 'ready') {
      placeMines(g, r, c);
      setGameState('playing');
      timerRef.current = setInterval(() => setTime((t) => Math.min(t + 1, 999)), 1000);
    }

    if (g[r][c].isMine) {
      // Reveal all mines
      g.forEach((row) => row.forEach((cell) => { if (cell.isMine) cell.revealed = true; }));
      setGrid(g);
      setGameState('lost');
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    reveal(r, c, g);

    // Check win
    let hidden = 0;
    g.forEach((row) => row.forEach((cell) => { if (!cell.revealed) hidden++; }));
    if (hidden === MINES) {
      setGameState('won');
      if (timerRef.current) clearInterval(timerRef.current);
    }

    setGrid(g);
  };

  const handleRightClick = (e, r, c) => {
    e.preventDefault();
    if (gameState === 'won' || gameState === 'lost') return;
    const g = grid.map((row) => row.map((cell) => ({ ...cell })));
    if (g[r][c].revealed) return;
    g[r][c].flagged = !g[r][c].flagged;
    setGrid(g);
    setFlags(g.flat().filter((c) => c.flagged).length);
  };

  const minesLeft = Math.max(0, MINES - flags);
  const smiley = gameState === 'won' ? '😎' : gameState === 'lost' ? '😵' : '🙂';

  return (
    <div className="flex flex-col items-center bg-[#c0c0c0] p-2 h-full">
      <div
        className="bg-[#c0c0c0] p-2 flex justify-between items-center w-full"
        style={{
          border: '3px solid',
          borderColor: '#ffffff #808080 #808080 #ffffff',
        }}
      >
        <div
          className="bg-black text-red-500 font-mono text-xl px-1.5 py-0.5 font-bold"
          style={{ letterSpacing: '1px', fontFamily: 'Consolas, monospace' }}
        >
          {String(minesLeft).padStart(3, '0')}
        </div>
        <button
          onClick={reset}
          className="text-2xl w-9 h-9 flex items-center justify-center bg-[#c0c0c0] hover:bg-[#d0d0d0] active:bg-[#a0a0a0]"
          style={{
            border: '3px solid',
            borderColor: '#ffffff #808080 #808080 #ffffff',
            fontFamily: 'Arial, sans-serif',
          }}
          title="New game"
        >
          {smiley}
        </button>
        <div
          className="bg-black text-red-500 font-mono text-xl px-1.5 py-0.5 font-bold"
          style={{ letterSpacing: '1px', fontFamily: 'Consolas, monospace' }}
        >
          {String(time).padStart(3, '0')}
        </div>
      </div>

      <div
        className="mt-2 inline-grid"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 22px)`,
          gap: 0,
          border: '3px solid',
          borderColor: '#808080 #ffffff #ffffff #808080',
        }}
      >
        {grid.map((row, r) =>
          row.map((cell, c) => (
            <button
              key={`${r}-${c}`}
              onClick={() => handleClick(r, c)}
              onContextMenu={(e) => handleRightClick(e, r, c)}
              className={`w-[22px] h-[22px] flex items-center justify-center text-sm font-bold ${
                cell.revealed
                  ? cell.isMine
                    ? 'bg-red-500'
                    : 'bg-[#c0c0c0]'
                  : 'bg-[#c0c0c0] hover:bg-[#d0d0d0]'
              }`}
              style={
                cell.revealed
                  ? { border: '1px solid #808080' }
                  : {
                      border: '2px solid',
                      borderColor: '#ffffff #808080 #808080 #ffffff',
                    }
              }
            >
              {cell.revealed ? (
                cell.isMine ? (
                  '💣'
                ) : cell.count > 0 ? (
                  <span style={{ color: NUMBER_COLORS[cell.count] }}>{cell.count}</span>
                ) : (
                  ''
                )
              ) : cell.flagged ? (
                '🚩'
              ) : (
                ''
              )}
            </button>
          ))
        )}
      </div>

      <div className="mt-3 text-xs text-gray-700 text-center">
        {gameState === 'won' && <p className="font-bold text-green-700">🎉 You won in {time}s!</p>}
        {gameState === 'lost' && <p className="font-bold text-red-700">💥 Boom! Click 😊 to try again.</p>}
        {gameState !== 'won' && gameState !== 'lost' && (
          <p>Left-click to reveal · Right-click to flag</p>
        )}
      </div>
    </div>
  );
}

const NUMBER_COLORS = {
  1: '#1976d2',
  2: '#388e3c',
  3: '#d32f2f',
  4: '#7b1fa2',
  5: '#b71c1c',
  6: '#0097a7',
  7: '#000',
  8: '#666',
};
