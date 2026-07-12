import { PROFILE } from '../data/profile';

export default function Skills() {
  return (
    <div className="flex flex-col gap-4 text-gray-800 h-full p-4 overflow-y-auto">
      <h2 className="text-xl font-bold border-b border-gray-300 pb-2">Technical Skills</h2>

      <div className="flex flex-col gap-3">
        {PROFILE.skills.map((skill) => (
          <div key={skill.name} className="flex flex-col gap-1">
            <div className="flex justify-between items-baseline">
              <span className="text-sm font-bold text-gray-800">{skill.name}</span>
              <span className="text-xs text-gray-500 tabular-nums">{skill.percent}%</span>
            </div>
            <div className="w-full h-4 bg-gray-200 border border-gray-300 rounded overflow-hidden shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-green-600 transition-all"
                style={{ width: `${skill.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mt-4">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        <CategoryCard title="Languages" items={['C', 'C++', 'Python', 'JavaScript', 'Java']} color="blue" />
        <CategoryCard title="Frontend" items={['HTML', 'CSS', 'React', 'Next.js']} color="purple" />
        <CategoryCard title="Backend" items={['Node.js', 'Express']} color="green" />
        <CategoryCard title="Databases" items={['SQL', 'MongoDB']} color="orange" />
        <CategoryCard title="Tools" items={['Git', 'GitHub', 'VS Code', 'Linux', 'Vite']} color="pink" />
        <CategoryCard title="Currently Learning" items={['TypeScript', 'Docker', 'AWS']} color="cyan" />
      </div>
    </div>
  );
}

function CategoryCard({ title, items, color }) {
  const colorMap = {
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800',
    green: 'bg-green-50 border-green-200 text-green-800',
    orange: 'bg-orange-50 border-orange-200 text-orange-800',
    pink: 'bg-pink-50 border-pink-200 text-pink-800',
    cyan: 'bg-cyan-50 border-cyan-200 text-cyan-800',
  };
  return (
    <div className={`border rounded p-3 ${colorMap[color]}`}>
      <h3 className="font-bold mb-2 text-sm uppercase tracking-wide">{title}</h3>
      <div className="flex flex-wrap gap-1">
        {items.map((item) => (
          <span key={item} className="text-xs bg-white/70 px-2 py-0.5 rounded">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
