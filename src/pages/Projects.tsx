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
        {projectsTranslation.topDescription}
      </Text>

      <Flex gap="xl" wrap="wrap" align="flex-start" pt="md">
        {projectsConfig.projects.map((project, idx) => (
          <ProjectCard
            key={`project-${idx}`}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            imageAlt={project.imageAlt}
            githubUrl={project.githubUrl}
            links={project.links}
            techStack={project.techStack}
          />
        ))}
      </Flex>
    </>
  );
}
