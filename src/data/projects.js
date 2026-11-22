export const projects = [
  {
    id: 'apply-log-plus',
    title: 'Apply Log+',
    description: 'A local-first job application tracker that keeps applications, notes, and stage history in your browser.',
    tech: ['React', 'TypeScript', 'IndexedDB', 'Vite'],
    highlights: [
      'Search and filter applications by stage',
      'JSON backup and restore, with CSV export for spreadsheets',
      'Offline reopening after the app has cached its files',
      'Optional encrypted snapshot transfer via GitHub Gist',
    ],
    link: 'https://github.com/t91a60/Apply-Log-plus',
  },
  {
    id: 'alkorater',
    title: 'AlkoRater',
    description: 'A Polish-language web app for tasting notes and ratings. No account or application backend.',
    tech: ['JavaScript', 'PWA', 'IndexedDB', 'CSS'],
    highlights: [
      'Searchable catalogue with personal ratings and notes',
      'Local storage and JSON backups',
      'Offline support after initial setup',
    ],
    link: 'https://github.com/t91a60/AlkoRater',
  },
  {
    id: 'fivem-plate-textures',
    title: 'FiveM Plate Textures',
    description: 'An experimental FiveM resource for replacing license plate backgrounds with local PNGs on isolated test servers.',
    tech: ['Lua', 'FiveM'],
    highlights: [
      'Changes the background artwork, not registration numbers',
      'Standalone, with optional ESX, qb-core, and ox_lib notifications',
      'Texture replacement is off by default',
    ],
    link: 'https://github.com/t91a60/fivem-plate-textures',
  },
  {
    id: 'upm-ultras',
    title: 'UPM Ultras',
    description: 'A responsive Polish-language website for a football supporters’ group, with news, a gallery, and information on joining.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vite', 'Tailwind CSS'],
    highlights: [
      'Static site with no application backend',
      'Responsive navigation and photo gallery',
      'Basic offline support through a service worker',
    ],
    link: 'https://github.com/t91a60/upm-ultras',
  },
]
