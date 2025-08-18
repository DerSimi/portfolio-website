import { PublicationData } from './pages/Publications';

// Home config
export const homeData = {
  name: 'Simon Rappenecker',
  imageLink: 'https://avatars.githubusercontent.com/u/16435889?v=4',
  avatarInitials: '',
  title: 'Machine Learning M. Sc.',
  affiliations: [
    { affiliation: 'University of Tübingen', link: 'https://uni-tuebingen.de/en/' },
    // { affiliation: 'Tübingen AI Center', link: 'https://www.tuebingen.ai/' },
  ],
  socialLinks: {
    email: 'mailto:simon@rappenecker.me',
    x: '',
    linkedin: 'https://www.linkedin.com/in/simon-rappenecker/',
    github: 'https://github.com/DerSimi',
    google: '',
  },
  aboutme: `My name is Simon and I am currently pursuing my M. Sc. in Machine Learning at the University of Tübingen, with an interest in Software Engineering, particularly emphasizing hardware-level programming. My fascination extends to the realm of Machine Learning as well. Feel free to check out my GitHub Profile or contact me via email.`,
  interests: ['Machine Learning', 'Robotics', 'Computer Vision', 'Mathematics'],
};

//CV config
export const cvData = {
  education: [
    {
      primary: 'Machine Learning M. Sc.',
      secondary: 'University of Tübingen',
      date: 'Oct. 2025 - Present',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis libero velit, non auctor mi porttitor et. Donec non arcu imperdiet, iaculis leo vitae, pellentesque metus. Nullam mollis turpis id dui maximus, vitae venenatis risus euismod. Proin pellentesque aliquam lacinia. Proin fringilla lectus non pretium ultrices. Phasellus varius mollis orci sed gravida. Suspendisse potenti. Proin dictum vitae augue id faucibus. Maecenas placerat, enim eget lobortis feugiat, orci ante dictum orci, eget placerat nisl risus ac urna. Morbi quis malesuada felis.',
    },
    {
      primary: 'B.Sc. Computer Science',
      secondary: 'University of Tübingen',
      date: 'Oct. 2022 - Sept. 2025',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis libero velit, non auctor mi porttitor et. Donec non arcu imperdiet, iaculis leo vitae, pellentesque metus. Nullam mollis turpis id dui maximus, vitae venenatis risus euismod. Proin pellentesque aliquam lacinia. Proin fringilla lectus non pretium ultrices. Phasellus varius mollis orci sed gravida. Suspendisse potenti. Proin dictum vitae augue id faucibus. Maecenas placerat, enim eget lobortis feugiat, orci ante dictum orci, eget placerat nisl risus ac urna. Morbi quis malesuada felis.',
    },
  ],
  experience: [
    {
      primary: 'Research Assistant',
      secondary: 'Max Planck Institute for Intelligent Systems',
      date: 'Oct 2023 - Present',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis libero velit, non auctor mi porttitor et. Donec non arcu imperdiet, iaculis leo vitae, pellentesque metus. Nullam mollis turpis id dui maximus, vitae venenatis risus euismod. Proin pellentesque aliquam lacinia. Proin fringilla lectus non pretium ultrices. Phasellus varius mollis orci sed gravida. Suspendisse potenti. Proin dictum vitae augue id faucibus. Maecenas placerat, enim eget lobortis feugiat, orci ante dictum orci, eget placerat nisl risus ac urna. Morbi quis malesuada felis.',
    },
    {
      primary: 'Software Engineer Intern',
      secondary: 'Robotics Startup XYZ',
      date: 'Jun 2022 - Aug 2022',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis libero velit, non auctor mi porttitor et. Donec non arcu imperdiet, iaculis leo vitae, pellentesque metus. Nullam mollis turpis id dui maximus, vitae venenatis risus euismod. Proin pellentesque aliquam lacinia. Proin fringilla lectus non pretium ultrices. Phasellus varius mollis orci sed gravida. Suspendisse potenti. Proin dictum vitae augue id faucibus. Maecenas placerat, enim eget lobortis feugiat, orci ante dictum orci, eget placerat nisl risus ac urna. Morbi quis malesuada felis.',
    },
  ],
  languageSkills: [
    { name: 'English', level: 'Fluent', value: 95 },
    { name: 'German', level: 'Professional', value: 80 },
  ],
  skillCategories: [
    {
      label: 'Programming',
      skills: ['Python', 'C++', 'MATLAB'],
    },
    {
      label: 'Frameworks',
      skills: ['PyTorch', 'TensorFlow', 'ROS', 'OpenCV'],
    },
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
];
