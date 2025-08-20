import { Stack, Text, Title } from '@mantine/core';
import { PublicationCard } from '@/components /publications/PublicationCard';
import { publications } from '@/config';

export type PublicationData = {
  imageUrl: string;
  imageAlt: string;
  citation: string;
  links: { href: string; label: string }[];
  date: string;
};

export function Publications() {
  // sort descending by date
  const sorted = publications
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
    <>
      <Title order={2} fz="h1" mb="xl">
        Publications
      </Title>

      <Text fz="h3" ta="left" mb="lg">
        Here you can find a selection of my publications, including papers, articles, and other
        academic works.
      </Text>

      {years.map((year) => (
        <Stack key={year} gap="md">
          <Text fz="h2" fw={700} ta="left">
            {year}
          </Text>

          <Stack gap="xl">
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
    </>
  );
}
