import { IconAt, IconPhone } from '@tabler/icons-react';
import { Group, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { imprint } from '@/config';

export function ContactView() {
  return (
    <Stack gap="md">
      <Title fz="h2">{imprint.contactTitle}</Title>
      
      <Stack gap="xs">
        <Group gap="xs">
          <ThemeIcon variant="light" size="sm" color="teal">
            <IconAt style={{ width: '70%', height: '70%' }} />
          </ThemeIcon>
          <Text
            component="a"
            href={`mailto:${imprint.email}`}
            style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}
          >
            {imprint.email}
          </Text>
        </Group>
        <Group gap="xs">
          <ThemeIcon variant="light" size="sm" color="teal">
            <IconPhone style={{ width: '70%', height: '70%' }} />
          </ThemeIcon>
          <Text>{imprint.phone}</Text>
        </Group>
      </Stack>
    </Stack>
  );
}
