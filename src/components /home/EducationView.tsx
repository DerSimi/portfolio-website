import { IconSchool } from '@tabler/icons-react';
import { Group, Stack, Text, Title } from '@mantine/core';
import { cvData } from '@/config';

export function EducationView() {
  return (
    <div>
      <Title fz="h3" mb="md">
        Education
      </Title>
      <Stack gap="lg">
        {cvData.education.map((edu) => (
          <Group align="flex-start" gap="md" wrap="nowrap" key={edu.primary}>
            <IconSchool size={24} style={{ marginTop: '4px' }} />
            <div>
              <Text size="lg">
                {edu.primary}
              </Text>
              <Text size="sm" c="dimmed">
                {edu.secondary}, {edu.date}
              </Text>
            </div>
          </Group>
        ))}
      </Stack>
    </div>
  );
}
