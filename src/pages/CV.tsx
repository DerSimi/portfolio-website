import { Box, Grid, Stack, Title } from '@mantine/core';
import { EducationView } from '@/components /cv/EducationView';
import { ExperienceView } from '@/components /cv/ExperienceView';
import { SkillView } from '@/components /cv/SkillView';

export function CV() {
  return (
    <Box>
      <Title order={2} fz="h1" mb="xl">
        Curriculum Vitae
      </Title>

      {/* Grid-Container für das zweispaltige Layout */}
      <Grid>
        {/* === LINKE SPALTE === */}
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Stack gap={40}>
            <EducationView />
            <ExperienceView />
          </Stack>
        </Grid.Col>

        {/* === RECHTE SPALTE === */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <SkillView />
        </Grid.Col>
      </Grid>
    </Box>
  );
}
