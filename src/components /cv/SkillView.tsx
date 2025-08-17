import { IconStarsFilled } from '@tabler/icons-react';
import { Badge, Group, Progress, Stack, Text } from '@mantine/core';
import { PersonalCard } from '../ui/PersonalCard';
import { IconedCvHeadline } from './CvHelper';

export function SkillView() {
  const programmingSkills = ['Python', 'C++', 'MATLAB'];
  const frameworkSkills = ['PyTorch', 'TensorFlow', 'ROS', 'OpenCV'];
  const languageSkills = [
    { name: 'English', level: 'Fluent', value: 95 },
    { name: 'German', level: 'Professional', value: 80 },
  ];

  return (
    <PersonalCard>
      <Stack gap="lg">
        <IconedCvHeadline IconComponent={IconStarsFilled} text="Skills" />
        
        <Stack gap="xs">
          <Text size="md">Programming</Text>
          <Group gap={7}>
            {programmingSkills.map((skill) => (
              <Badge key={skill} variant="light" color="teal" size="md" radius="sm">
                {skill}
              </Badge>
            ))}
          </Group>
        </Stack>

        <Stack gap="xs">
          <Text size="md">Frameworks</Text>
          <Group gap={7}>
            {frameworkSkills.map((skill) => (
              <Badge key={skill} variant="light" color="teal" size="md" radius="sm">
                {skill}
              </Badge>
            ))}
          </Group>
        </Stack>

        <Stack gap="md">
          <Text size="md">Languages</Text>
          {languageSkills.map((lang) => (
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
