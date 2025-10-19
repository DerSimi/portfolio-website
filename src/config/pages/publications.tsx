import { PublicationData } from '@/pages/Publications';

// Publications config
//Note: If you don't have any publications, the tab is disabled
export const publications: {
  topDescription: string;
  publications: PublicationData[];
} = {
  topDescription:
    'Here you can find a selection of my publications, including papers, articles, and other academic works.',
  publications: [
    // {
    //   imageUrl: '',
    //   imageAlt: 'EXAM', // will be overriden if an image url is present
    //   date: '2023-01-01',
    //   citation: 'Doe, J. (2023). Example Publication Title. *Journal of Examples*.',
    //   links: [
    //     { href: 'https://example.com/pdf1', label: 'PDF' },
    //     { href: 'https://example.com/code1', label: 'Code' },
    //   ],
    // },
  ],
};
