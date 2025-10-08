//CV config
export const cv = {
  topDescription: 'Here is my CV, detailing my professional experience and education.',
  education: [
    {
      primary: 'Machine Learning M. Sc.',
      secondary: 'University of Tübingen',
      date: 'Oct. 2025 - Present',
      description: // For line breaks, feel free to use \n here! To start a bullet list use \n > Item 1 \n > Item 2, ...
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis libero velit, llus varius mollis orci sed gravida risus ac urna. Morbi quis malesuada felis.
        \n This is a new line.
        \n > This is a bullet point
        \n > This is another bullet point
        \n and here normal text continues.`,
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
  experience: [
    {
      primary: 'Research Assistant',
      secondary: 'Max Planck Institute for Intelligent Systems',
      date: 'Oct 2023 - Present',
      current: true,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis libero velit, non auctor mi porttitor et. Donec non arcu imperdiet, iaculis leo vitae, pellentesque metus. Nullam mollis turpis id dui maximus, vitae venenatis risus euismod. Proin pellentesque aliquam lacinia. Proin fringilla lectus non pretium ultrices. Phasellus varius mollis orci sed gravida. Suspendisse potenti. Proin dictum vitae augue id faucibus. Maecenas placerat, enim eget lobortis feugiat, orci ante dictum orci, eget placerat nisl risus ac urna. Morbi quis malesuada felis.',
    },
    {
      primary: 'Software Engineer Intern',
      secondary: 'Robotics Startup XYZ',
      date: 'Jun 2022 - Aug 2022',
      current: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis libero velit, non auctor mi porttitor et. Donec non arcu imperdiet, iaculis leo vitae, pellentesque metus. Nullam mollis turpis id dui maximus, vitae venenatis risus euismod. Proin pellentesque aliquam lacinia. Proin fringilla lectus non pretium ultrices. Phasellus varius mollis orci sed gravida. Suspendisse potenti. Proin dictum vitae augue id faucibus. Maecenas placerat, enim eget lobortis feugiat, orci ante dictum orci, eget placerat nisl risus ac urna. Morbi quis malesuada felis.',
    },
    {
      primary: 'Software Engineer Intern',
      secondary: 'Robotics Startup XYZ',
      date: 'Jun 2022 - Aug 2022',
      current: false,
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
