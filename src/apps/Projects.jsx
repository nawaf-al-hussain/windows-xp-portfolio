import { ExternalLink, Github } from 'lucide-react';
import { PROFILE } from '../data/profile';

export default function Projects() {
  const projects = PROFILE.projects;

  return (
    <div className="flex flex-col gap-4 text-gray-800 h-full p-4">
      <h2 className="text-xl font-bold border-b border-gray-300 pb-2 flex items-center justify-between">
        Projects Portfolio
        <span className="text-xs font-normal bg-blue-100 text-blue-800 px-2 py-1 rounded">
          {projects.length} Items Found
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto pb-6 pr-1">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="border border-gray-300 rounded overflow-hidden shadow-sm hover:shadow transition-all bg-white flex flex-col"
          >
            <div className="w-full h-32 bg-gray-200 border-b border-gray-300 overflow-hidden">
              <img
                src={proj.image}
                alt={proj.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            <div className="p-3 flex flex-col flex-1">
              <h3 className="font-bold text-md text-blue-800">{proj.name}</h3>
              <p className="text-xs text-gray-600 mt-1 mb-2 leading-tight flex-1">{proj.desc}</p>

              <div className="flex flex-wrap gap-1 mb-3">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] bg-gray-100 border border-gray-200 px-1.5 py-0.5 text-gray-600 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 text-xs font-medium border-t border-gray-100 pt-2 mt-auto">
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 bg-blue-50 text-blue-700 py-1 rounded hover:bg-blue-100 transition"
                  >
                    <ExternalLink className="w-3 h-3" /> Live Demo
                  </a>
                )}
                {proj.source && (
                  <a
                    href={proj.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 bg-gray-50 text-gray-700 py-1 rounded hover:bg-gray-100 transition border border-gray-200"
                  >
                    <Github className="w-3 h-3" /> Source
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
