export const home = {
  name: 'Your Name',
  avatarInitials: 'YN',
  // This will overwrite the avatarInitials if not empty
  imageLink: 'https://avatars.githubusercontent.com/u/16435889?v=4',
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
    openreview: '',
  },
  aboutme: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis libero velit, non auctor mi porttitor et. Donec non arcu imperdiet, iaculis leo vitae, pellentesque metus. Nullam mollis turpis id dui maximus, vitae venenatis risus euismod. Proin pellentesque aliquam lacinia. Proin fringilla lectus non pretium ultrices. Phasellus varius mollis orci sed gravida. Suspendisse potenti. Proin dictum vitae augue id faucibus. Maecenas placerat, enim eget lobortis feugiat, orci ante dictum orci, eget placerat nisl risus ac urna. Morbi quis malesuada felis.`,
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
