import { IconBrandGithubFilled } from '@tabler/icons-react';
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Card,
  Group,
  Image,
  Stack,
  Text,
  Title,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { PersonalCard } from '../PersonalCard';

export function ProjectCard({
  imageUrl,
  imageAlt,
  title,
  description,
  githubUrl,
  links,
  techStack,
}: {
  imageUrl?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  githubUrl?: string;
  links?: { href: string; label: string }[];
  techStack?: string[];
}) {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const dimmedColor = colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6];
  const headerBorder = colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3];

  const IMAGE_HEIGHT = 200;

  return (
    <PersonalCard style={{ width: 320, height: 500 }}>
      <Card.Section style={{ borderBottom: `1px solid ${headerBorder}` }}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt}
            fit="cover"
            style={{ width: '100%', height: IMAGE_HEIGHT, objectFit: 'cover' }}
          />
        ) : (
          <Box
            style={{
              height: IMAGE_HEIGHT,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Title fz="h1" c="teal">
              {imageAlt}
            </Title>
          </Box>
        )}
      </Card.Section>

      <Stack gap="sm" style={{ flex: 1, minHeight: 0 }} mt="md">
        <Title fz="h2" style={{ wordBreak: 'break-word' }}>
          {title}
        </Title>
        {!!techStack?.length && (
          <Group gap="xs" wrap="wrap" style={{ overflow: 'hidden' }}>
            {techStack.map((tech) => (
              <Badge key={tech} color="teal" variant="light">
                {tech}
              </Badge>
            ))}
          </Group>
        )}

        <Text size="h3" style={{ wordBreak: 'break-word' }}>
          {description}
        </Text>
        <Box style={{ flex: 1 }} />
      </Stack>

      <Group mt="md">
        {githubUrl && (
          <Tooltip label="View on GitHub" position="top" withArrow>
            <ActionIcon component="a" href={githubUrl} size="lg" variant="transparent">
              <IconBrandGithubFilled size={30} color={dimmedColor} />
            </ActionIcon>
          </Tooltip>
        )}
        {links?.map((link) => (
          <Button
            key={`${link.href}-${link.label}`}
            component="a"
            href={link.href}
            color="teal"
            radius="md"
          >
            {link.label}
          </Button>
        ))}
      </Group>
    </PersonalCard>
  );
}
