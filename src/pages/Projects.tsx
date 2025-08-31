import { Box, Grid, Text, Title } from '@mantine/core';
import { projects } from '@/config';
import { ProjectCard } from '@/components /projects/ProjectCard';

export function Projects() {
  return (
    <>
      <Title order={2} fz="h1" mb="xl">
        {projects.pageTitle}
      </Title>

      <Box style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Text fz="md" ta="left" mb="lg">
          {projects.longTitle}
        </Text>

  <Grid gutter="xl" align="stretch" justify="flex-start">
          {projects.projects.map((project, idx) => (
            <Grid.Col
              key={`project-${idx}`}
              span={{ base: 12, sm: 6, lg: 4 }}
              style={{ display: 'flex'}}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                imageAlt={project.imageAlt}
                githubUrl={project.githubUrl}
                links={project.links}
                techStack={project.techStack}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </>
  );
}