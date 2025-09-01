// Projects config
//Note: If you don't have any projects, the tab is disabled
export const projects = {
  projects: [
    {
      title: 'Portfolio Site',
      description:
        'A simple portfolio site showcasing projects, about and contact information. Built as a single-page app with responsive design.',
      imageUrl: 'https://picsum.photos/id/29/400/',
      imageAlt: 'Portfolio site screenshot',
      githubUrl: 'https://github.com/example/portfolio-site',
      links: [
        { href: 'https://example.com/portfolio', label: 'Live' },
        { href: 'https://github.com/example/portfolio-site', label: 'Code' },
      ],
      techStack: ['React', 'TypeScript', 'CSS'],
    },
    {
      title: 'Task Manager App',
      description:
        'A todo/task manager with user authentication, real-time updates, and drag-and-drop task organization.',
      imageUrl: 'https://picsum.photos/id/89/400/',
      imageAlt: 'Task manager app screenshot',
      githubUrl: 'https://github.com/example/task-manager',
      links: [
        { href: 'https://example.com/task-manager', label: 'Live' },
        { href: 'https://github.com/example/task-manager', label: 'Code' },
      ],
      techStack: ['React', 'Redux', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Weather Dashboard',
      description:
        'A dashboard displaying current weather and forecast data from a public API with charts and location search.',
      imageUrl: 'https://picsum.photos/id/40/400/',
      imageAlt: 'Weather dashboard screenshot',
      githubUrl: 'https://github.com/example/weather-dashboard',
      links: [
        { href: 'https://example.com/weather-dashboard', label: 'Live' },
        { href: 'https://github.com/example/weather-dashboard', label: 'Code' },
      ],
      techStack: ['Vue', 'TypeScript', 'Chart.js', 'REST API'],
    },
  ],
};
