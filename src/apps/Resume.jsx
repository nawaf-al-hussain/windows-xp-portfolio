import { Download, FileText, Printer } from 'lucide-react';
import { PROFILE } from '../data/profile';

export default function Resume() {
  const { resume } = PROFILE;

  const handleDownload = () => {
    // Build a plain text resume and trigger download
    const lines = [
      PROFILE.name.toUpperCase(),
      `${PROFILE.role}`,
      `${PROFILE.location}`,
      '',
      'CONTACT',
      `  Email:     ${PROFILE.email}`,
      `  GitHub:    github.com/nawaf-al-hussain`,
      `  Website:   nawaf-al-hussain.vercel.app`,
      '',
      'SUMMARY',
      `  ${resume.summary}`,
      '',
      'EXPERIENCE',
      ...resume.experience.flatMap((e) => [
        `  ${e.role} — ${e.org} (${e.period})`,
        ...e.points.map((p) => `    - ${p}`),
        '',
      ]),
      'EDUCATION',
      ...resume.education.map((ed) => `  ${ed.degree} — ${ed.school} (${ed.period})`),
      '',
      'SKILLS',
      ...resume.skillsList.map((s) => `  ${s}`),
      '',
      'INTERESTS',
      `  ${resume.interests}`,
      '',
    ];
    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${PROFILE.name.replace(/\s+/g, '_')}_Resume.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => window.print();

  return (
    <div className="flex flex-col h-full bg-gray-100 font-serif">
      {/* Top action bar */}
      <div className="flex items-center gap-2 p-2 bg-[#ece9d8] border-b border-gray-300 shadow-sm text-xs font-sans">
        <button
          onClick={handleDownload}
          className="flex items-center gap-1 text-gray-800 hover:bg-white px-2 py-1 border border-transparent hover:border-blue-200 rounded"
        >
          <Download className="w-4 h-4 text-green-600" />
          <span>Download TXT</span>
        </button>
        <div className="w-[1px] h-4 bg-gray-300 mx-1"></div>
        <button
          onClick={handlePrint}
          className="flex items-center gap-1 text-gray-800 hover:bg-white px-2 py-1 border border-transparent hover:border-blue-200 rounded"
        >
          <Printer className="w-4 h-4 text-blue-600" />
          <span>Print</span>
        </button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto flex justify-center">
        <div className="bg-white w-full max-w-[600px] shadow-lg border border-gray-300 p-8 h-max">
          <header className="border-b-2 border-gray-800 pb-4 mb-4 text-center">
            <h1 className="text-3xl font-bold uppercase tracking-wider text-black">{PROFILE.name}</h1>
            <p className="text-sm text-gray-600 font-sans mt-1">
              {PROFILE.email} | {PROFILE.location} | github.com/nawaf-al-hussain
            </p>
          </header>

          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase text-gray-800 mb-2 border-b border-gray-200 pb-1 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Summary
            </h2>
            <p className="text-sm text-gray-700 font-sans leading-relaxed">{resume.summary}</p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase text-gray-800 mb-2 border-b border-gray-200 pb-1 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Experience
            </h2>
            {resume.experience.map((exp, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-black">{exp.role} — {exp.org}</h3>
                  <span className="text-sm text-gray-500 font-sans">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-700 font-sans space-y-1 ml-2">
                  {exp.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase text-gray-800 mb-2 border-b border-gray-200 pb-1">
              Education
            </h2>
            {resume.education.map((ed, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-black">{ed.degree}</h3>
                  <span className="text-sm text-gray-500 font-sans">{ed.period}</span>
                </div>
                <p className="text-sm text-gray-700 font-sans">{ed.school} — {ed.location}</p>
              </div>
            ))}
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase text-gray-800 mb-2 border-b border-gray-200 pb-1">
              Skills
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-700 font-sans space-y-1 ml-2">
              {resume.skillsList.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold uppercase text-gray-800 mb-2 border-b border-gray-200 pb-1">
              Interests
            </h2>
            <p className="text-sm text-gray-700 font-sans">{resume.interests}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
