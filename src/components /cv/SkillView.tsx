import { IconStarsFilled } from '@tabler/icons-react';
import { Badge, Group, Progress, Stack, Text, Title } from '@mantine/core';
import { cvData } from '@/config';
import { PersonalCard } from '../ui/PersonalCard';

export function SkillView() {
  return (
    <PersonalCard>
      <Stack gap="lg">
        <Group gap={8} mb="xs">
          <IconStarsFilled size={28} color="teal" style={{ marginBottom: 0 }} />
          <Title fz="h2" mb={0}>
            Skills
          </Title>
        </Group>

        {cvData.skillCategories.map((category) => (
          <Stack gap="xs" key={category.label}>
            <Text size="md">{category.label}</Text>
            <Group gap={7}>
              {category.skills.map((skill) => (
                <Badge key={skill} variant="light" color="teal" size="md" radius="sm">
                  {skill}
                </Badge>
              ))}
            </Group>
          </Stack>
        ))}

        <Stack gap="md">
          <Text size="md">Languages</Text>
          {cvData.languageSkills.map((lang) => (
            <div key={lang.name}>
              <Group justify="space-between" mb={4}>
                <Text size="sm">{lang.name}</Text>
                <Text size="sm" c="dimmed">
                  {lang.level}
                </Text>
              </Group>
              <Progress value={lang.value} color="teal" />
            </div>
          ))}
        </Stack>
      </Stack>
    </PersonalCard>
  );
}
