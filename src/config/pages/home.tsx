export const home = {
  name: 'Simon Rappenecker',
  avatarInitials: 'SR',
  // This will overwrite the avatarInitials if not empty
  imageLink: '/assets/me.png',
  title: 'Master Student',
  // Multiple affiliations possible
  affiliations: [
    { affiliation: 'University of Tübingen', link: 'https://uni-tuebingen.de/en/' },
    // { affiliation: 'Tübingen AI Center', link: 'https://www.tuebingen.ai/' },
  ],
  socialLinks: {
    email: 'mailto:simon@rappenecker.me',
    x: '', // No text means disabled
    github: 'https://github.com/DerSimi',
    linkedin: 'https://www.linkedin.com/in/simon-rappenecker/',
    google: '',
    openreview: 'https://openreview.net/profile?id=%7ESimon_Rappenecker1'
  },
  aboutme: `
  Hi 👋, I'm a Swabian machine learning student in the beautiful city of Tübingen, right in the heart of Baden-Württemberg, Germany. While I've always had a broad interest in computer science, my passion is now clearly on machine learning. I'm especially fascinated by reinforcement learning and robotics, and I am currently working on these topics as a research assistant.
  \n If you want to know more about me, feel free to check out my projects or reach out via email!`,
  interests: ['Machine Learning', 'Robotics', 'Computer Vision', 'Mathematics'],
  education: [
    // This seems redundant but allows full flexibility what education to show
    {
      primary: 'Machine Learning M. Sc.',
      secondary: 'University of Tübingen',
      date: 'Oct. 2025 - Present'
    },
    {
      primary: 'Computer Science B. Sc.',
      secondary: 'University of Tübingen',
      date: 'Oct. 2022 - Sept. 2025'
    },
  ],
};
