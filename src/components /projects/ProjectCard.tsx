import { useState } from 'react';
import { IconBracketsAngle, IconEye } from '@tabler/icons-react';
import {
  Badge,
  Box,
  Button,
  Card,
  Group,
  Image,
  Stack,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { PersonalCard } from '../common/PersonalCard';
import { RenderDescription } from '../common/TextHelper';

export function ProjectCard({
  title,
  type,
  imageUrl,
  description,
  code,
  liveUrl,
  techStack,
  style,
}: {
  title: string;
  type?: string;
  imageUrl: string;
  description: string;
  code?: string;
  liveUrl?: string;
  techStack?: string[];
  style?: React.CSSProperties;
}) {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const [codeHovered, setCodeHovered] = useState(false);

  const imageHeight = 185;

  return (
    <PersonalCard style={{ height: 500, ...(style ?? {}) }}>
      <Card.Section>
        {/* Top badge naming project type */}
        {type && (
          <Badge
            color={theme.other.colors.accentColor}
            variant="filled"
            size="lg"
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1.25rem',
              zIndex: 1,
              textTransform: 'none',
            }}
          >
            {type ? type : ''}
          </Badge>
        )}
        {imageUrl ? (
          <Image
            src={imageUrl}
            fit="cover"
            style={{ width: '100%', height: imageHeight, objectFit: 'cover' }}
          />
        ) : (
          <Box
            style={{
              height: imageHeight,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          ></Box>
        )}
      </Card.Section>

      <Stack gap="sm" mt="md" style={{ height: '100%', justifyContent: 'space-between' }}>
        <Stack gap="sm">
          {/* Headline and Tech Stack */}
          <Stack gap={0}>
            <Text fw={700} size="xl" style={{ wordBreak: 'break-word', marginBottom: 2 }}>
              {title}
            </Text>
            {!!techStack?.length && (
              <Group gap="xs" wrap="wrap" style={{ overflow: 'hidden' }}>
                {techStack.map((tech) => (
                  <Badge key={tech} color={theme.other.colors.accentColor} variant="light">
                    {tech}
                  </Badge>
                ))}
              </Group>
            )}
          </Stack>

          {/* Description */}
          {RenderDescription(description, { size: "md", style: { wordBreak: 'break-word' } })}
        </Stack>

        {/* Buttons at the end */}
        <Group justify="space-between" style={{ width: '100%', marginTop: 'md' }}>
          {liveUrl ? (
            <Button
              leftSection={<IconEye size={18} stroke={2} />}
              radius="md"
              component="a"
              href={liveUrl}
              target="_blank"
              color={theme.other.colors.accentColor}
              rel="noopener noreferrer"
            >
              Live
            </Button>
          ) : (
            <span />
          )}

          {code ? (
            <Button
              leftSection={<IconBracketsAngle size={18} stroke={2} />}
              variant="default"
              radius="md"
              component="a"
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor:
                  colorScheme === 'dark'
                    ? codeHovered
                      ? '#4a5568'
                      : theme.other.colors.dark.boxBg
                    : codeHovered
                      ? '#f8f9fa'
                      : 'white',
                borderColor: colorScheme === 'dark' ? '#4a5568' : '#d1d5db',
              }}
              onMouseEnter={() => setCodeHovered(true)}
              onMouseLeave={() => setCodeHovered(false)}
            >
              Code
            </Button>
          ) : (
            <span />
          )}
        </Group>
      </Stack>
    </PersonalCard>
  );
}
