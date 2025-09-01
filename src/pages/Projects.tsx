import { Flex, Text, Title } from '@mantine/core';
import { projects } from '@/config';
import { ProjectCard } from '@/components /projects/ProjectCard';

export function Projects() {
  return (
    <>
      <Title fz="h1" mb="xl">
        {projects.pageTitle}
      </Title>
      <Text fz="md" ta="left" mb="lg">
        {projects.longTitle}
      </Text>
      <Flex gap="xl" wrap="wrap" align={'flex-start'}>
        {projects.projects.map((project, idx) => (
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