import { IconStarsFilled } from '@tabler/icons-react';
import { Badge, Group, Progress, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { cv as cvConfig } from '@/config/pages/cv';
import { cv as cvTranslation } from '@/config/translation';
import { PersonalCard } from '../PersonalCard';

export function SkillView() {
  const theme = useMantineTheme();
  return (
    <>
      <Group gap={8} mb="md">
        <IconStarsFilled size={28} color={theme.other.colors.accentColor} style={{ marginBottom: 0 }} />
        <Title fz="h2" mb={0}>
          {cvTranslation.skills}
        </Title>
      </Group>
      <PersonalCard>
        <Stack gap="lg">
          {cvConfig.skillCategories.map((category) => (
            <Stack gap="xs" key={category.label}>
              <Text size="md">{category.label}</Text>
              <Group gap={7}>
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="light" color={theme.other.colors.accentColor} size="md" radius="sm">
                    {skill}
                  </Badge>
                ))}
              </Group>
            </Stack>
          ))}

          <Stack gap="md">
            <Text size="md">{cvTranslation.languages}</Text>
            {cvConfig.languageSkills.map((lang) => (
              <div key={lang.name}>
                <Group justify="space-between" mb={4}>
                  <Text size="sm">{lang.name}</Text>
                  <Text size="sm" c="dimmed">
                    {lang.level}
                  </Text>
                </Group>
                <Progress value={lang.value} color={theme.other.colors.accentColor} />
              </div>
            ))}
          </Stack>
        </Stack>
      </PersonalCard>
    </>
  );
}
