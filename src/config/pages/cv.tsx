//CV config
export const cv = {
  topDescription: '',
  education: [
    {
      primary: 'Machine Learning M. Sc.',
      secondary: 'University of Tübingen',
      date: 'Oct. 2025 - Present',
      // For line breaks, feel free to use \n here!
      description: `The program combines the mathematical foundations of machine learning with practical applications, providing in-depth expertise in deep learning, computer vision, probabilistic and statistical machine learning.`,
    },
    {
      primary: 'Computer Science B. Sc.',
      secondary: 'University of Tübingen',
      date: 'Oct. 2022 - Sept. 2025',
      description: `Graduated with a Bachelor of Science in Computer Science (overall grade: 1.1, “very good”), covering a wide range of topics in general computer science, with a specialization in artificial intelligence and machine learning.
                  \n Thesis: Parameter Estimation with Neural Network Surrogate Gradients
                  \n > Developed a neural network to learn the dynamics of a physics system.
                  \n > Leveraged the trained model as a differentiable surrogate to estimate physical parameters.
                  \n > Tech Stack: JAX, Equinox, Optax, NumPy, MuJoCo
                  \n During my time as an undergraduate, I received three scholarships (Deutschlandstipendium).
                  `
    },
  ],
  //Experience
  experience: [
    {
      primary: 'Research Assistant',
      secondary: 'University of Tübingen',
      date: 'Aug. 2025 - Mar. 2026',
      current: true,
      description: `Contributing to research at the Autonomous Learning Group (Chair of Prof. Martius) by developing a Sim2Real transfer framework for the Unitree Go2 robot to enable seamless policy transfer from simulation to real hardware.`,
    },
  ],
  //Language skills
  languagesTitle: 'Languages',
  languageSkills: [
    { name: 'German', level: 'Native', value: 100 },
    { name: 'English', level: 'Advanced', value: 75 },
  ],
  //Skills
  skillCategories: [
    // You can create as many categories as wanted
    {
      label: 'Programming',
      skills: ['Python', 'C++', 'Java', 'JavaScript'],
    },
    {
      label: 'Technologies',
      skills: ['React', 'Git', 'Docker', 'CUDA', 'Linux'],
    },
    {
      label: 'Machine Learning',
      skills: ['JAX', 'Optax', 'equinox'],
    },
    {
      label: 'Simulation and Robotics',
      skills: ['ROS2', 'MuJoCo', 'Brax'],
    },
  ],
};
