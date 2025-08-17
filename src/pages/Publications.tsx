import { PublicationCard } from '@/components /publications/PublicationCard';
import { publicationData } from '@/config';
import { Stack, Text } from '@mantine/core';

export type PublicationData = {
  imageUrl: string;
  imageAlt: string;
  citation: string;
  links: { href: string; label: string }[];
  date: string;
};

export function Publications() {
  // sort descending by date
  const sorted = publicationData
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // group by year (keys are strings like "2023")
  const byYear = sorted.reduce<Record<string, PublicationData[]>>((acc, pub) => {
    const year = new Date(pub.date).getFullYear().toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(pub);
    return acc;
  }, {});

  // years in descending order
  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

  return (
    <Stack gap="xl" justify="center" align="left" pb={100}>
      <Text fz="h1" fw="bolder" ta="left">
        Publications
      </Text>
      <Text fz="h3" ta="left">
        Here you can find a selection of my publications, including papers, articles, and other
        academic works.
      </Text>

      {years.map((year) => (
        <Stack key={year} gap="sm">
          <Text fz="h2" fw={700} ta="left">
            {year}
          </Text>

          <Stack gap="md">
            {byYear[year].map((pub, idx) => (
              <PublicationCard
                key={`${year}-${idx}`}
                imageUrl={pub.imageUrl}
                imageAlt={pub.imageAlt}
                citation={pub.citation}
                links={pub.links}
              />
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}
