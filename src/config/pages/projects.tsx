// Projects config
//Note: If you don't have any projects, the tab is disabled
export const projects = {
  topDescription: 'Here are some of the projects I have worked on.', // Keep this empty to disable
  projects: [
    {
      title: 'Sim2Real Transfer',
      type: 'Robotics',
      imageUrl: '/assets/projects/sim2real.png',
      description: `Sim2Real pipeline to transfer policies to the Go2, allowing a seamless switch between simulation and the real world.`,
      code: 'https://github.com/DerSimi/unitree_go2_sim2real',
      liveUrl: '',
      techStack: ['ROS2', 'JAX', 'Brax', 'MuJoCo'],
    },
    {
      title: 'Robot Recording',
      type: 'Robotics',
      imageUrl: '/assets/projects/data_recording.png',
      description:
        'A tool for instantly visualizing Go2 data and exporting it to a Python-readable format.',
      code: 'https://github.com/DerSimi/unitree_go2_to_mujoco',
      liveUrl: '',
      techStack: ['ROS2', 'MuJoCo', 'C++'],
    },
    {
      title: 'Parameter Estimation',
      type: 'Research',
      imageUrl: '/assets/projects/parameter_estimation.png',
      description:
        'Core code from my bachelor thesis, demonstrating a method for system parameter estimation using neural network surrogate gradients.',
      code: 'https://github.com/DerSimi/parameter-estimation',
      liveUrl: '',
      techStack: ['JAX', 'MuJoCo', 'Python'],
    },
    {
      title: 'Portfolio Website',
      type: 'Web',
      imageUrl: '/assets/projects/portfolio.png',
      description:
        'A simple portfolio site showcasing projects, publications, CV, and contact information.',
      code: 'https://github.com/DerSimi/portfolio-website',
      liveUrl: 'https://rappenecker.me/demo/',
      techStack: ['React', 'TypeScript', 'CSS'],
    },
    {
      title: 'Mission Explorer',
      type: 'Web',
      imageUrl: '/assets/projects/mission_explorer.png',
      description:
        'A tool for visualizing robot missions. Created as part of an university project in cooperation with the Max Planck Institute for Intelligent Systems.',
      code: 'https://github.com/DerSimi/mission_db',
      liveUrl: '',
      techStack: ['React', 'Python', 'ROS2'],
    },
  ],
};
