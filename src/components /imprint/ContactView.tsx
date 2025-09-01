import { IconAt, IconPhone } from '@tabler/icons-react';
import { Group, Stack, Text, ThemeIcon, Title, useMantineTheme } from '@mantine/core';
import { imprint as imprintConfig } from '@/config/pages/imprint';
import { imprint as imprintTranslation } from '@/config/translation';

export function ContactView() {
  const theme = useMantineTheme();

  return (
    <Stack gap="md">
      <Title fz="h2">{imprintTranslation.contact}</Title>

      <Stack gap="xs">
        <Group gap="xs">
          <ThemeIcon variant="light" size="sm" color={theme.other.colors.accentColor}>
            <IconAt style={{ width: '70%', height: '70%' }} />
          </ThemeIcon>
          <Text
            component="a"
            href={`mailto:${imprintConfig.email}`}
            style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}
          >
            {imprintConfig.email}
          </Text>
        </Group>
        <Group gap="xs">
          <ThemeIcon variant="light" size="sm" color={theme.other.colors.accentColor}>
            <IconPhone style={{ width: '70%', height: '70%' }} />
          </ThemeIcon>
          <Text>{imprintConfig.phone}</Text>
        </Group>
      </Stack>
    </Stack>
  );
}
