// Central place to edit your portfolio content.
// Update the values below and the whole site will reflect the changes.

export const PROFILE = {
  name: 'Nawaf Al Hussain',
  title: 'Passionate Coder & CS Student',
  role: 'Passionate Coder & CS Student at UIU',
  location: 'Dhaka, Bangladesh',
  avatar: '/avatar.svg',
  email: 'nkhondokar2420136@bscse.uiu.ac.bd',
  bio: 'Hi! I\'m Nawaf, a passionate coder currently studying Computer Science & Engineering at United International University (UIU) in Dhaka, Bangladesh. I love building delightful, useful, and beautiful software — from clean web apps to experimental retro UIs (clearly!). When I\'m not coding, I\'m exploring new tech, contributing to projects, and learning everything I can about software engineering.',
  accounts: [
    { id: 'github', label: 'GitHub', value: 'github.com/nawaf-al-hussain', href: 'https://github.com/nawaf-al-hussain', icon: 'github' },
    { id: 'website', label: 'Website', value: 'nawaf-al-hussain.vercel.app', href: 'https://nawaf-al-hussain.vercel.app/', icon: 'globe' },
    { id: 'email', label: 'Email', value: 'nkhondokar2420136@bscse.uiu.ac.bd', href: 'mailto:nkhondokar2420136@bscse.uiu.ac.bd', icon: 'mail' },
    { id: 'location', label: 'Location', value: 'Dhaka, Bangladesh', href: null, icon: 'map' },
    { id: 'university', label: 'University', value: 'United International University', href: null, icon: 'edu' },
  ],
  skills: [
    { name: 'C / C++', percent: 88 },
    { name: 'JavaScript / TypeScript', percent: 82 },
    { name: 'Python', percent: 85 },
    { name: 'Java', percent: 75 },
    { name: 'HTML / CSS', percent: 90 },
    { name: 'SQL / Databases', percent: 78 },
    { name: 'React / Next.js', percent: 80 },
    { name: 'Git & DevOps', percent: 72 },
  ],
  projects: [
    {
      id: 1,
      name: 'Windows XP Portfolio',
      desc: 'A browser-based Windows XP simulation built with React, Vite, Tailwind, and Framer Motion — the very site you\'re looking at. Features draggable/resizable windows, a working start menu, taskbar, and playable Minesweeper.',
      tech: ['React', 'Vite', 'TailwindCSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&h=400&fit=crop',
      live: 'https://nawaf-al-hussain.github.io/windows-xp-portfolio/',
      source: 'https://github.com/nawaf-al-hussain/windows-xp-portfolio',
    },
    {
      id: 2,
      name: 'Personal Website',
      desc: 'My main portfolio website hosted on Vercel — built with modern web technologies, showcasing my projects, skills, and contact info in a clean, responsive design.',
      tech: ['Next.js', 'TypeScript', 'Vercel'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      live: 'https://nawaf-al-hussain.vercel.app/',
      source: 'https://github.com/nawaf-al-hussain',
    },
    {
      id: 3,
      name: 'Algorithm Visualizer',
      desc: 'Interactive tool that visualizes classic sorting and pathfinding algorithms (bubble, merge, quick, A*, Dijkstra) step by step. Built to help students understand how algorithms actually work.',
      tech: ['React', 'JavaScript', 'Canvas'],
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop',
      live: null,
      source: 'https://github.com/nawaf-al-hussain',
    },
    {
      id: 4,
      name: 'University Projects',
      desc: 'Collection of coursework projects from UIU — covering data structures, OOP, databases, operating systems, and software engineering. Each project has docs, tests, and clean code.',
      tech: ['C++', 'Java', 'Python', 'SQL'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
      live: null,
      source: 'https://github.com/nawaf-al-hussain',
    },
  ],
  resume: {
    summary: 'Passionate coder studying Computer Science & Engineering at United International University (UIU). I love building software that is both useful and delightful, and I\'m always eager to learn new technologies and tackle challenging problems.',
    experience: [
      {
        role: 'Freelance Web Developer',
        org: 'Self-employed',
        period: '2024 — Present',
        points: [
          'Built and deployed modern responsive websites for local clients using React and Next.js.',
          'Integrated payment systems, CMS, and analytics dashboards.',
          'Maintained long-term client relationships through reliable delivery.',
        ],
      },
      {
        role: 'Open Source Contributor',
        org: 'GitHub',
        period: '2023 — Present',
        points: [
          'Contributed fixes and features to several open source projects.',
          'Published personal projects that have been starred and forked.',
          'Reviewed pull requests and helped maintainers triage issues.',
        ],
      },
    ],
    education: [
      {
        degree: 'B.Sc. in Computer Science & Engineering',
        school: 'United International University (UIU)',
        period: 'Ongoing',
        location: 'Dhaka, Bangladesh',
      },
    ],
    skillsList: [
      'Languages: C, C++, Python, JavaScript, Java',
      'Frontend: HTML, CSS, JavaScript, React, Next.js',
      'Backend: Node.js, Express',
      'Databases: SQL, MongoDB',
      'Tools: Git, GitHub, VS Code, Linux, Vite',
    ],
    interests: 'Retro computing, open source, system programming, UI/UX design, competitive programming.',
  },
};
