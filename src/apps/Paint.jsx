import { useRef, useState, useEffect } from 'react';

const COLORS = ['#000000', '#7f7f7f', '#880015', '#ed1c24', '#ff7f27', '#fff200', '#22b14c', '#00a2e8', '#3f48cc', '#a349a4', '#ffffff', '#c3c3c3', '#b97a57', '#ffaec9', '#ffc90e', '#efe4b0', '#b5e61d', '#99d9ea', '#7092be', '#c8bfe7'];

export default function Paint() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [color, setColor] = useState('#000000');
  const [size, setSize] = useState(3);
  const [tool, setTool] = useState('brush');
  const drawing = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Set canvas internal size based on its display size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctxRef.current = ctx;
  }, []);

  const getPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const point = e.touches ? e.touches[0] : e;
    return { x: point.clientX - rect.left, y: point.clientY - rect.top };
  };

  const startDraw = (e) => {
    e.preventDefault();
    drawing.current = true;
    last.current = getPos(e);
  };

  const draw = (e) => {
    if (!drawing.current) return;
    e.preventDefault();
    const pos = getPos(e);
    const ctx = ctxRef.current;
    ctx.strokeStyle = tool === 'eraser' ? '#ffffff' : color;
    ctx.lineWidth = tool === 'eraser' ? size * 4 : size;
    ctx.beginPath();
    ctx.moveTo(last.current.x, last.current.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    last.current = pos;
  };

  const endDraw = () => {
    drawing.current = false;
  };

  const clearCanvas = () => {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const saveImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'paint-masterpiece.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="flex flex-col h-full bg-[#ece9d8]">
      {/* Toolbar */}
      <div className="flex items-center gap-2 p-2 border-b border-[#aca899] flex-wrap">
        <div className="flex gap-1">
          <button
            onClick={() => setTool('brush')}
            className={`px-2 py-1 text-xs rounded border ${tool === 'brush' ? 'bg-blue-500 text-white border-blue-700' : 'bg-[#f5f4ea] border-[#aca899]'}`}
          >
            🖌 Brush
          </button>
          <button
            onClick={() => setTool('eraser')}
            className={`px-2 py-1 text-xs rounded border ${tool === 'eraser' ? 'bg-blue-500 text-white border-blue-700' : 'bg-[#f5f4ea] border-[#aca899]'}`}
          >
            🧽 Eraser
          </button>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xs">Size:</span>
          <input
            type="range"
            min="1"
            max="20"
            value={size}
            onChange={(e) => setSize(parseInt(e.target.value))}
            className="w-20"
          />
          <span className="text-xs w-6 tabular-nums">{size}px</span>
        </div>
        <button
          onClick={clearCanvas}
          className="px-2 py-1 text-xs rounded border bg-[#f5f4ea] border-[#aca899] hover:bg-white"
        >
          🗑 Clear
        </button>
        <button
          onClick={saveImage}
          className="px-2 py-1 text-xs rounded border bg-[#f5f4ea] border-[#aca899] hover:bg-white"
        >
          💾 Save
        </button>
      </div>

      {/* Color palette */}
      <div className="flex items-center gap-1 p-2 border-b border-[#aca899] flex-wrap">
        <div
          className="w-8 h-8 border-2 border-black"
          style={{ backgroundColor: color }}
        />
        <div className="grid grid-cols-10 gap-0.5">
          {COLORS.map((c) => (
            <button
              key={c}
              onClick={() => { setColor(c); setTool('brush'); }}
              className="w-5 h-5 border border-gray-400"
              style={{ backgroundColor: c }}
              title={c}
            />
          ))}
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 p-2 overflow-hidden">
        <canvas
          ref={canvasRef}
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={endDraw}
          onMouseLeave={endDraw}
          onTouchStart={startDraw}
          onTouchMove={draw}
          onTouchEnd={endDraw}
          className="w-full h-full border border-gray-400 bg-white cursor-crosshair"
          style={{ touchAction: 'none' }}
        />
      </div>
    </div>
  );
}
