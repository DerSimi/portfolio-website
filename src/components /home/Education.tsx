import { IconSchool } from '@tabler/icons-react';
import { Group, Stack, Text, Title, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { cvData } from '@/config';

export function Education() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const titleColor =
    colorScheme === 'dark' ? theme.other.colors.dark.hoverText : theme.other.colors.light.hoverText;

  const textColor =
    colorScheme === 'dark'
      ? theme.other.colors.dark.normalText
      : theme.other.colors.light.normalText;

  return (
    <div>
      <Title fz="h3" mb="md" c={titleColor}>
        Education
      </Title>
      <Stack gap="lg">
        {cvData.education.map((edu) => (
          <Group align="flex-start" gap="md" wrap="nowrap" key={edu.primary}>
            <IconSchool size={24} color={textColor} style={{ marginTop: '4px' }} />
            <div>
              <Text fw={600} c={titleColor}>
                {edu.primary}
              </Text>
              <Text size="sm" c={textColor}>
                {edu.primary}, {edu.date}
              </Text>
            </div>
          </Group>
        ))}
      </Stack>
    </div>
  );
}
