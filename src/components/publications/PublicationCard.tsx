import { Anchor, Box, Group, Image, Paper, Stack, Text, useMantineTheme } from '@mantine/core';
import { PersonalCard } from '../common/PersonalCard';

type PublicationLink = { href: string; label: string };

interface PublicationCardProps {
  imageUrl?: string;
  imageAlt?: string;
  citation?: string;
  links?: PublicationLink[];
}

export function PublicationCard({
  imageUrl,
  imageAlt,
  citation,
  links,
}: PublicationCardProps) {
  const theme = useMantineTheme();
  const linkItems = links ?? [];

  const renderImage = () =>
    imageUrl ? (
      <Image src={imageUrl} alt={imageAlt ?? ''} w={96} h={96} radius="md" style={{ flexShrink: 0 }} />
    ) : (
      <Paper
        w={96}
        h={96}
        radius="md"
        shadow="false"
        bg={theme.other.colors.accentColor}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}
      >
        <Text fz={30} fw="bolder" ta="center" c="white">
          {imageAlt ?? ''}
        </Text>
      </Paper>
    );

  const renderLinks = () =>
    linkItems.length > 0 && (
      <Group gap="md" wrap="wrap">
        {linkItems.map((link) => (
          <Anchor
            href={link.href}
            style={{ color: theme.other.colors.accentColor }}
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
