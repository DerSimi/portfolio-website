import {
  Anchor,
  Card,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';

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
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const bg =
    colorScheme === 'dark' ? theme.other.colors.dark.navBg : theme.other.colors.light.navBg;

  return (
    <Card shadow="sm" padding="xl" radius="lg" bg={bg}>
      <Group align="flex-start" gap="xl" wrap="nowrap">
        {imageUrl ? (
          <Image src={imageUrl} alt={imageAlt} w={96} h={96} radius="md" />
        ) : (
          <Paper
            w={96}
            h={96}
            radius="md"
            shadow="false"
            bg={theme.other.colors.accent}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <Text fz={30} fw="bolder" ta="center" c="white">
              {imageAlt}
            </Text>
          </Paper>
        )}

        <Stack gap="xs" style={{ flex: 1 }}>
          <Text component="p" lh="1.625" fw={600}>
            {citation}
          </Text>

          {links.length > 0 && (
            <Group gap="md">
              {links.map((link) => (
                <Anchor
                  href={link.href}
                  style={{ color: theme.other.colors.accent }}
                  key={link.label}
                  size="sm"
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
    </Card>
  );
}
