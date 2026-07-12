import { PROFILE } from '../data/profile';
const avatarUrl = `${import.meta.env.BASE_URL}${PROFILE.avatar.replace(/^\//, '')}`;

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-6 text-gray-800 p-4">
      <div className="flex gap-4 items-center mb-2">
        <div className="w-24 h-24 rounded shadow-md overflow-hidden border-2 border-gray-300 flex-shrink-0 bg-gradient-to-br from-orange-200 to-orange-400">
          <img src={avatarUrl} alt={PROFILE.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-bold font-serif mb-1">{PROFILE.name}</h1>
          <p className="text-xl text-gray-600 font-medium">{PROFILE.title}</p>
        </div>
      </div>

      <div className="p-4 rounded-sm text-sm leading-relaxed text-black font-serif bg-white/60">
        <p>{PROFILE.bio}</p>
      </div>

      <div>
        <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-4 flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-blue-100 text-blue-700 text-xs font-mono font-bold">&lt;/&gt;</span>
          Technologies &amp; Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-medium">
          {PROFILE.skills.map((skill) => (
            <div key={skill.name} className="bg-blue-50 border border-blue-200 rounded p-2 flex items-center gap-2">
              <span className="text-blue-700">{skill.name}</span>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-20 h-2 bg-gray-200 rounded overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-green-500"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
                <span className="text-xs text-gray-600 tabular-nums">{skill.percent}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
