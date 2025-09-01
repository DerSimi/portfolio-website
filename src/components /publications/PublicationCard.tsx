import { Anchor, Box, Group, Image, Paper, Stack, Text } from '@mantine/core';
import { PersonalCard } from '../PersonalCard';

export function PublicationCard({
  imageUrl = '',
  imageAlt = 'ICML',
  citation = 'N. Sirmpilatze, et al. (2023). "A Novel Approach to Sensor Fusion for Robust Localization." *Journal of Field Robotics*',
  links = [
    { href: 'www.link.com', label: 'PDF' },
    { href: 'www.link.com', label: 'Code' },
  ],
}) {
  const renderImage = () =>
    imageUrl ? (
      <Image src={imageUrl} alt={imageAlt} w={96} h={96} radius="md" style={{ flexShrink: 0 }} />
    ) : (
      <Paper
        w={96}
        h={96}
        radius="md"
        shadow="false"
        bg="teal"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}
      >
        <Text fz={30} fw="bolder" ta="center" c="white">
          {imageAlt}
        </Text>
      </Paper>
    );

  const renderLinks = () =>
    links.length > 0 && (
      <Group gap="md" wrap="wrap">
        {links.map((link) => (
          <Anchor
            href={link.href}
            style={{ color: 'teal' }}
            key={link.label}
            size="md"
            fw={500}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`[${link.label}]`}
          </Anchor>
        ))}
      </Group>
    );

  return (
    <PersonalCard>
      {/* Desktop and tablets (>= sm): keep current layout */}
      <Box visibleFrom="sm">
        <Group align="flex-start" gap="xl" wrap="nowrap">
          {renderImage()}

          <Stack gap="xs" style={{ flex: 1 }}>
            <Text fz={'h4'} component="p" size="lg">
              {citation}
            </Text>

            {renderLinks()}
          </Stack>
        </Group>
      </Box>

      {/* Mobile (< sm): logo left, links right, citation below */}
      <Box hiddenFrom="sm">
        <Stack gap="xs">
          <Group align="center" gap="xl" wrap="nowrap">
            {renderImage()}
            {renderLinks()}
          </Group>

          <Text component="p" size="lg">
            {citation}
          </Text>
        </Stack>
      </Box>
    </PersonalCard>
  );
}
