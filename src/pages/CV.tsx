import { Box, Grid, Text, Title } from '@mantine/core';
import { EducationView } from '@/components /cv/EducationView';
import { ExperienceView } from '@/components /cv/ExperienceView';
import { SkillView } from '@/components /cv/SkillView';
import { cv as cvTranslation } from '@/config/translation';
import {cv as cvConfig} from '@/config/pages/cv';

export function CV() {
  return (
    <Box>
      <Title order={2} fz="h1" mb="xl">
        {cvTranslation.longTitle}
      </Title>

      <Text fz="md" ta="left" mb="lg">
        {cvConfig.topDescription}
      </Text>

      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, md: 8 }} order={{ base: 1, md: 1 }}>
          <EducationView />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }} order={{ base: 2, md: 2 }}>
          <SkillView />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 8 }} order={{ base: 3, md: 3 }}>
          <ExperienceView />
        </Grid.Col>
      </Grid>
    </Box>
  );
}
