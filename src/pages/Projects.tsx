import { Flex, Text, Title } from '@mantine/core';
import { ProjectCard } from '@/components /projects/ProjectCard';
import { projects as projectsConfig } from '@/config/pages/projects';
import { projects as projectsTranslation } from '@/config/translation';

export function Projects() {
  return (
    <>
      <Title order={2} fz="h1" mb="xl">
        {projectsTranslation.longTitle}
      </Title>

      <Text fz="md" ta="left" mb="lg">
        {projectsConfig.topDescription}
      </Text>

      <Flex gap="xl" wrap="wrap" align="flex-start" pt="md">
        {projectsConfig.projects.map((project, idx) => (
          <ProjectCard
            key={`project-${idx}`}
            title={project.title}
            type={project.type}
            imageUrl={project.imageUrl}
            description={project.description}
            code={project.code}
            liveUrl={project.liveUrl}
            techStack={project.techStack}
            style={{
              flex: '1 1 20rem',
              minWidth: '13.75rem',
              maxWidth: '26.25rem',
            }}
          />
        ))}
      </Flex>
    </>
  );
}
