// Projects config
//Note: If you don't have any projects, the tab is disabled
export const projects = {
  topDescription: 'Here are some of the projects I have worked on.', // Keep this empty to disable
  projects: [
    {
      title: 'Portfolio Site',
      type: 'Web',
      imageUrl: 'https://picsum.photos/id/29/400/',
      description:
        'A simple portfolio site showcasing projects, about and contact information. Built as a single-page app with responsive design.',
      code: 'https://github.com/example/portfolio-site',
      liveUrl: 'https://example.com/portfolio',
      techStack: ['React', 'TypeScript', 'CSS'],
    },
    {
      title: 'Task Manager App',
      type: 'Windows',
      imageUrl: 'https://picsum.photos/id/89/400/',
      description:
        'A todo/task manager with user authentication, real-time updates, and drag-and-drop task organization.',
      code: 'https://github.com/example/task-manager',
      liveUrl: '', // Empty to disable
      techStack: ['React', 'Redux', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Weather Dashboard',
      type: 'Stuff',
      imageUrl: 'https://picsum.photos/id/40/400/',
      description:
        'A dashboard displaying current weather and forecast data from a public API with charts and location search.',
      code: 'https://github.com/example/weather-dashboard',
      liveUrl: 'https://example.com/weather-dashboard',
      techStack: ['Vue', 'TypeScript', 'Chart.js', 'REST API'],
    },
  ],
};
