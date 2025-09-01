import SchoolIcon from '@mui/icons-material/School';
import { Group, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { home as homeConfig } from '@/config/pages/home';
import { home as homeTranslation } from '@/config/translation';

export function EducationView() {
  const theme = useMantineTheme();
  
  return (
    <div>
      <Title fz="h3" mb="md">
        {homeTranslation.education}
      </Title>
      <Stack gap="lg">
        {homeConfig.education.map((edu) => (
          <Group align="flex-start" gap="md" wrap="nowrap" key={edu.primary}>
            <SchoolIcon sx={{ fontSize: 24 }} style={{ color: theme.other.colors.accentColor, marginTop: '4px' }} />
            <div>
              <Text size="lg">{edu.primary}</Text>
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
