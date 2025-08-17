import { PublicationData } from './pages/Publications';

// Home config
export const homeData = {
  name: 'John Doe',
  imageLink: 'https://avatars.githubusercontent.com/u/16435889?v=4',
  avatarInitials: 'WD',
  title: 'Machine Learning M.Sc.',
  affiliations: [
    { affiliation: 'University of Tübingen', link: 'https://uni-tuebingen.de/en/' },
    { affiliation: 'Tübingen AI Center', link: 'https://www.tuebingen.ai/' },
  ],
  socialLinks: {
    email: 'mailto:example@example.com',
    twitter: 'https://twitter.com/mantinedev',
    github: 'https://scholar.google.com/',
    google: 'https://google.com/',
  },
  aboutme: `My name is Who Dis and I am a Master's student at the University of Tübingen, specializing
        in Machine Learning and Robotics. My current research, in collaboration with the Max Planck
        Institute for Intelligent Systems, involves developing robust perception systems for
        autonomous agents. I am passionate about reinforcement learning for robot manipulation and
        applying computer vision to real-world problems. When I'm not training models, I enjoy
        building custom drones and exploring the latest in generative AI.`,
  interests: ['Machine Learning', 'Robotics', 'Computer Vision', 'Generative AI'],
};

//CV config
export const cvData = {
  education: [
    {
      primary: 'M.Sc. in Machine Learning',
      secondary: 'University of Tübingen',
      date: 'Oct 2023 - Present',
    },
    {
      primary: 'B.Sc. in Computer Science',
      secondary: 'Technical University of Munich',
      date: 'Oct 2019 - Sep 2023',
    },
  ],
  experience: [
    {
      primary: 'Research Assistant',
      secondary: 'Max Planck Institute for Intelligent Systems',
      date: 'Oct 2023 - Present',
    },
    {
      primary: 'Software Engineer Intern',
      secondary: 'Robotics Startup XYZ',
      date: 'Jun 2022 - Aug 2022',
    },
  ],
  skills: [
    { category: 'Programming', skills: 'Python, C++, MATLAB' },
    { category: 'Frameworks', skills: 'PyTorch, TensorFlow, ROS, OpenCV' },
    { category: 'Languages', skills: 'English (Fluent), German (Professional)' },
  ],
};

// Publications config
export const publicationData: PublicationData[] = [
  {
    imageUrl: '',
    imageAlt: 'EXAM',
    date: '2023-01-01',
    citation: 'Doe, J. (2023). Example Publication Title. *Journal of Examples*.',
    links: [
      { href: 'https://example.com/pdf1', label: 'PDF' },
      { href: 'https://example.com/code1', label: 'Code' },
    ],
  },
  {
    imageUrl: '',
    imageAlt: 'EXAM',
    date: '2023-01-01',
    citation:
      'Smith, A., & Lee, B. (2022). Another Study on Examples. *International Example Review*.',
    links: [
      { href: 'https://example.com/pdf2', label: 'PDF' },
      { href: 'https://example.com/supp2', label: 'Supplement' },
    ],
  },
  {
    imageUrl: '',
    imageAlt: 'EXAM',
    date: '2021-01-01',
    citation: 'Garcia, M. (2021). Examples in Practice: A Survey. *Proceedings of ExampleConf*.',
    links: [
      { href: 'https://example.com/pdf3', label: 'PDF' },
      { href: 'https://example.com/code3', label: 'Code' },
    ],
  },
  {
    imageUrl: '',
    imageAlt: 'EXAM',
    date: '2020-01-01',
    citation:
      "Khan, R., & O'Neil, P. (2020). Case Studies of Examples. *Example Studies Quarterly*.",
    links: [
      { href: 'https://example.com/pdf4', label: 'PDF' },
      { href: 'https://example.com/data4', label: 'Data' },
    ],
  },
  {
    imageUrl: '',
    imageAlt: 'EXAM',
    date: '2021-01-01',
    citation:
      'Zhang, Y. (2019). Example Algorithms and Applications. *Journal of Applied Examples*.',
    links: [
      { href: 'https://example.com/pdf5', label: 'PDF' },
      { href: 'https://example.com/code5', label: 'Code' },
    ],
  },
  {
    imageUrl: '',
    imageAlt: 'EXAM',
    date: '2018-01-01',
    citation:
      'Williams, L., & Patel, S. (2018). Experimental Results on Examples. *Example Letters*.',
    links: [
      { href: 'https://example.com/pdf6', label: 'PDF' },
      { href: 'https://example.com/doi6', label: 'DOI' },
    ],
  },
  {
    imageUrl: '',
    imageAlt: 'EXAM',
    date: '2017-01-01',
    citation:
      'Nakamura, H. (2017). Theoretical Foundations of Examples. *Theoretical Example Journal*.',
    links: [
      { href: 'https://example.com/pdf7', label: 'PDF' },
      { href: 'https://example.com/code7', label: 'Code' },
    ],
  },
  {
    imageUrl: '',
    imageAlt: 'EXAM',
    date: '2016-01-01',
    citation: 'Müller, F., & Rossi, G. (2016). Examples in Machine Learning. *ML Example Review*.',
    links: [
      { href: 'https://example.com/pdf8', label: 'PDF' },
      { href: 'https://example.com/supp8', label: 'Supplement' },
    ],
  },
  {
    imageUrl: '',
    imageAlt: 'EXAM',
    date: '2015-01-01',
    citation: 'Brown, T. (2015). A Comprehensive Guide to Examples. *Examples Monthly*.',
    links: [
      { href: 'https://example.com/pdf9', label: 'PDF' },
      { href: 'https://example.com/code9', label: 'Code' },
    ],
  },
  {
    imageUrl: '',
    imageAlt: 'EXAM',
    date: '2014-01-01',
    citation: 'Singh, V., & Kim, J. (2014). Practical Example Methodologies. *Applied Examples*.',
    links: [
      { href: 'https://example.com/pdf10', label: 'PDF' },
      { href: 'https://example.com/data10', label: 'Data' },
    ],
  },
  {
    imageUrl: '',
    imageAlt: 'EXAM',
    date: '2013-01-01',
    citation: 'Lopez, R. (2013). Historical Perspectives on Examples. *Example History Review*.',
    links: [
      { href: 'https://example.com/pdf11', label: 'PDF' },
      { href: 'https://example.com/code11', label: 'Code' },
    ],
  },
];
