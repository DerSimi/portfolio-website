import {
  Anchor,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
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
  const theme = useMantineTheme();

  return (
    <PersonalCard>
      <Group align="flex-start" gap="xl" wrap="nowrap">
        {imageUrl ? (
          <Image src={imageUrl} alt={imageAlt} w={96} h={96} radius="md" />
        ) : (
          <Paper
            w={96}
            h={96}
            radius="md"
            shadow="false"
            bg="teal"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <Text fz={30} fw="bolder" ta="center" c="white">
              {imageAlt}
            </Text>
          </Paper>
        )}

        <Stack gap="xs" style={{ flex: 1 }}>
          <Text component="p" size="lg">
            {citation}
          </Text>

          {links.length > 0 && (
            <Group gap="md">
              {links.map((link) => (
                <Anchor
                  href={link.href}
                  style={{ color: 'teal' }}
                  key={link.label}
                  size="md"
                  fw={500}
                  lh="1.625"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`[${link.label}]`}
                </Anchor>
              ))}
            </Group>
          )}
        </Stack>
      </Group>
    </PersonalCard>
  );
}
