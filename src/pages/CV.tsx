import { Box, Divider, Stack, Title, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { CvEntry, SkillEntry } from '@/components /cv/CvHelper';
import { cvData } from '@/config';

export function CV() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const titleColor =
    colorScheme === 'dark' ? theme.other.colors.dark.hoverText : theme.other.colors.light.hoverText;

  const textColor =
    colorScheme === 'dark'
      ? theme.other.colors.dark.normalText
      : theme.other.colors.light.normalText;

  return (
    <Box>
      <Title order={2} fz="h1" mb="md" c={titleColor}>
        Curriculum Vitae
      </Title>

      <Stack gap={40}>
        {/* Education Section */}
        <Stack gap="sm">
          <Title fz="h3" mb="md" c={titleColor}>
            Education
          </Title>
          <Divider color={textColor} />
          <div style={{ color: textColor }}>
            {cvData.education.map((entry) => (
              <CvEntry key={entry.primary} {...entry} textColor={textColor} />
            ))}
          </div>
        </Stack>

        {/* Experience Section */}
        <Stack gap="sm">
          <Title fz="h3" mb="md" c={titleColor}>
            Experience
          </Title>
          <Divider color={textColor} />
          <div style={{ color: textColor }}>
            {cvData.experience.map((entry) => (
              <CvEntry key={entry.primary} {...entry} textColor={textColor} />
            ))}
          </div>
        </Stack>

        {/* Skills Section */}
        <Stack gap="xs">
          <Title fz="h3" mb="md" c={titleColor}>
            Skills
          </Title>
          <Divider color={textColor} />
          <div style={{ color: textColor }}>
            {cvData.skills.map((entry) => (
              <SkillEntry key={entry.category} {...entry} textColor={textColor} />
            ))}
          </div>
        </Stack>
      </Stack>
    </Box>
  );
}
