import SchoolIcon from '@mui/icons-material/School';
import { Group, Stack, Title } from '@mantine/core';
import { CvEntry } from '@/components /cv/CvHelper';
import { cvData } from '@/config';

export function EducationView() {
  return (
    <>
      <Group gap={8} mb="xl">
        <SchoolIcon style={{ fontSize: 28, color: 'teal', marginBottom: 0 }} />
        <Title fz="h2" mb={0}>
          Education
        </Title>
      </Group>

      <Stack gap="lg">
        {cvData.education.map((entry) => (
          <CvEntry key={entry.primary} {...entry} />
        ))}
      </Stack>
    </>
  );
}
