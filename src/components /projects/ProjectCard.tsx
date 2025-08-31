import { Button, Badge, Group, Image, Card, Text, Title, Tooltip, ActionIcon, Stack, Box, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import { PersonalCard } from '../PersonalCard';
import { IconBrandGithubFilled } from '@tabler/icons-react';

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

    const IMAGE_HEIGHT = 250;

    return (
        <PersonalCard style={{ display: 'flex', flexDirection: 'column', width: '100%', minWidth: 280, maxWidth: 480 }}>
            <Card.Section style={{ borderBottom: `1px solid ${headerBorder}` }}>
                {imageUrl ? (
                    <Image src={imageUrl} alt={imageAlt} height={IMAGE_HEIGHT} />
                ) : (
                    <Box style={{ height: IMAGE_HEIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                        <Title fz="h1" c="teal">
                            {imageAlt}
                        </Title>
                    </Box>
                )}
            </Card.Section>

            <Stack gap="sm" style={{ flex: 1, minHeight: 0 }} mt="md">
                <Title fz="h2">{title}</Title>
                {!!techStack?.length && (
                    <Group gap="xs" wrap="wrap">
                        {techStack.map((tech) => (
                            <Badge key={tech} color="teal" variant="light">
                                {tech}
                            </Badge>
                        ))}
                    </Group>
                )}

                <Text size="h3">
                    {description}
                </Text>
                <Box style={{ flex: 1 }} />
            </Stack>

            <Group mt="md">
                {
                    githubUrl && (
                        <Tooltip label="View on GitHub" position="top" withArrow>
                            <ActionIcon
                                component="a"
                                href={githubUrl}
                                size="lg"
                                variant="transparent"
                            >
                                <IconBrandGithubFilled size={30} color={dimmedColor} />
                            </ActionIcon>
                        </Tooltip>
                    )
                }
                {links?.map((link) => (
                    <Button
                        key={`${link.href}-${link.label}`}
                        component="a"
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
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
