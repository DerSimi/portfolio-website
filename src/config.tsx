import { PublicationData } from './pages/Publications';

// General configuration
export const config = {
  // Website title, static accross all pages
  title: 'Simon Rappenecker',
  // Website icon, static accross all pages, use alternatively a local file, e. g. src/myicon.svg
  icon: 'https://avatars.githubusercontent.com/u/16435889?v=4',
};

// Home config
export const home = {
  pageTitle: 'Home',
  aboutMeTitle: 'About me',
  interestsTitle: 'Interests',
  educationTitle: 'Education',
  name: 'Simon Rappenecker',
  avatarInitials: 'SR',
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
    linkedin: 'https://www.linkedin.com/in/simon-rappenecker/',
    github: 'https://github.com/DerSimi',
    google: '',
  },
  aboutme: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis libero velit, non auctor mi porttitor et. Donec non arcu imperdiet, iaculis leo vitae, pellentesque metus. Nullam mollis turpis id dui maximus, vitae venenatis risus euismod. Proin pellentesque aliquam lacinia. Proin fringilla lectus non pretium ultrices. Phasellus varius mollis orci sed gravida. Suspendisse potenti. Proin dictum vitae augue id faucibus. Maecenas placerat, enim eget lobortis feugiat, orci ante dictum orci, eget placerat nisl risus ac urna. Morbi quis malesuada felis.`,
  interests: ['Machine Learning', 'Robotics', 'Computer Vision', 'Mathematics'],
  education: [
    // This seems redundant but allows full flexibility what education to show
    {
      primary: 'Machine Learning M. Sc.',
      secondary: 'University of Tübingen',
      date: 'Oct. 2025 - Present',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis libero velit, non auctor mi porttitor et. Donec non arcu imperdiet, iaculis leo vitae, pellentesque metus. Nullam mollis turpis id dui maximus, vitae venenatis risus euismod. Proin pellentesque aliquam lacinia. Proin fringilla lectus non pretium ultrices. Phasellus varius mollis orci sed gravida. Suspendisse potenti. Proin dictum vitae augue id faucibus. Maecenas placerat, enim eget lobortis feugiat, orci ante dictum orci, eget placerat nisl risus ac urna. Morbi quis malesuada felis.',
    },
    {
      primary: 'Computer Science B. Sc.',
      secondary: 'University of Tübingen',
      date: 'Oct. 2022 - Sept. 2025',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis libero velit, non auctor mi porttitor et. Donec non arcu imperdiet, iaculis leo vitae, pellentesque metus. Nullam mollis turpis id dui maximus, vitae venenatis risus euismod. Proin pellentesque aliquam lacinia. Proin fringilla lectus non pretium ultrices. Phasellus varius mollis orci sed gravida. Suspendisse potenti. Proin dictum vitae augue id faucibus. Maecenas placerat, enim eget lobortis feugiat, orci ante dictum orci, eget placerat nisl risus ac urna. Morbi quis malesuada felis.',
    },
  ],
};

//CV config
export const cv = {
  pageTitle: 'CV',
  longTitle: 'Curriculum Vitae',
  //Education
  educationTitle: 'Education',
  education: [
    {
      primary: 'Machine Learning M. Sc.',
      secondary: 'University of Tübingen',
      date: 'Oct. 2025 - Present',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis libero velit, non auctor mi porttitor et. Donec non arcu imperdiet, iaculis leo vitae, pellentesque metus. Nullam mollis turpis id dui maximus, vitae venenatis risus euismod. Proin pellentesque aliquam lacinia. Proin fringilla lectus non pretium ultrices. Phasellus varius mollis orci sed gravida. Suspendisse potenti. Proin dictum vitae augue id faucibus. Maecenas placerat, enim eget lobortis feugiat, orci ante dictum orci, eget placerat nisl risus ac urna. Morbi quis malesuada felis.',
    },
    {
      primary: 'Computer Science B.Sc.',
      secondary: 'University of Tübingen',
      date: 'Oct. 2022 - Sept. 2025',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis libero velit, non auctor mi porttitor et. Donec non arcu imperdiet, iaculis leo vitae, pellentesque metus. Nullam mollis turpis id dui maximus, vitae venenatis risus euismod. Proin pellentesque aliquam lacinia. Proin fringilla lectus non pretium ultrices. Phasellus varius mollis orci sed gravida. Suspendisse potenti. Proin dictum vitae augue id faucibus. Maecenas placerat, enim eget lobortis feugiat, orci ante dictum orci, eget placerat nisl risus ac urna. Morbi quis malesuada felis.',
    },
  ],
  //Experience
  experienceTitle: 'Experience',
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
  //Language skills
  languagesTitle: 'Languages',
  languageSkills: [
    { name: 'English', level: 'Fluent', value: 95 },
    { name: 'German', level: 'Professional', value: 80 },
  ],
  //Skills
  skillsTitle: 'Skills',
  skillCategories: [
    // You can create as many categories as wanted
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
export const publications: {
  pageTitle: string;
  longTitle: string;
  topDescription: string;
  publications: PublicationData[];
} = {
  pageTitle: 'Publications',
  longTitle: 'Publications',
  topDescription:
    'Here you can find a selection of my publications, including papers, articles, and other academic works.',
  publications: [
    {
      imageUrl: '',
      imageAlt: 'EXAM', // will be overriden if an image url is present
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
  ],
};

// Projects config
export const projects = {
  pageTitle: 'Projects',
};

// Imprint config
export const imprint = {
  pageTitle: 'Imprint',
  // Not required in all countries.
  enableImprint: true,
  // Information part
  informationTitle: 'Information according to § 5 TMG',
  information: `Simon Rappenecker
  Musterstraße 123
  12345 Musterstadt
  Germany`,
  // Contact part
  // In Germany you need two ways of contact
  contactTitle: 'Contact',
  email: 'simon@rappenecker.me',
  phone: 'On request',
};
