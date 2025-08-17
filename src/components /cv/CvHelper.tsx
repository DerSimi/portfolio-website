import { Group, Text } from '@mantine/core';

export function CvEntry({
  primary,
  secondary,
  date,
  textColor,
}: {
  primary: string;
  secondary: string;
  date: string;
  textColor: string;
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Text c={textColor}>
        <Text component="span" fz="h5" mb="md" fw={700} c={textColor}>
          {primary}
        </Text>
        {secondary && (
          <Text component="span" fz="h5" mb="md"c={textColor}>
            , {secondary}
          </Text>
        )}
      </Text>
      <Text size="sm" c={textColor}>
        {date}
      </Text>
    </div>
  );
}

export function SkillEntry({
  category,
  skills,
  textColor,
}: {
  category: string;
  skills: string;
  textColor: string;
}) {
  return (
    <Group gap="xs">
      <Text fz="h5" fw={700} c={textColor}>
        {category}:
      </Text>
      <Text fz="h5" c={textColor}>{skills}</Text>
    </Group>
  );
}
