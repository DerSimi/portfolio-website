import React from 'react';
// Imports have been updated to use a CDN to resolve dependencies.
import { Avatar, Text, Group, ActionIcon, Container, useMantineTheme, useMantineColorScheme, Tooltip } from '@mantine/core';
import { IconMailFilled, IconBrandTwitterFilled, IconBrandGithubFilled, IconBrandGoogleFilled } from '@tabler/icons-react';

// This is the main component for the user info card.
// It's designed to be configurable through props.
export function Profile({
    avatarInitials = 'WD',
    name = 'John Doe',
    title = 'MSc Student',
    affiliations = [
        { affiliation: 'University of Tübingen', link: 'https://uni-tuebingen.de/en/' },
        { affiliation: 'Tübingen AI Center', link: 'https://www.tuebingen.ai/' }
    ],
    socialLinks = {
        email: 'mailto:example@example.com',
        twitter: 'https://twitter.com/mantinedev',
        github: 'https://scholar.google.com/',
        google: 'https://google.com/',
    },
}) {
    const theme = useMantineTheme();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const icon_color = colorScheme === 'dark' ? theme.other.colors.dark.normalText : theme.other.colors.light.normalText;

    const accentColor = theme.other.colors.accent

    console.log(accentColor);

    return (
        <Container
            p="lg"
            w={300}
            style={{ margin: 'auto', textAlign: 'center' }}
        >
            {/* Avatar section */}
            <Avatar
                src={null} // Set to null to show initials
                alt="User avatar"
                color="teal"
                size={160}
                radius={10}
                mx="auto"
                style={{ borderRadius: '50%', boxShadow: '0 17px 30px rgba(0, 0, 0, 0.1)' }}
            >
                {avatarInitials}
            </Avatar>

            {/* Name and Title section */}
            <Text ta="center" fz={30} fw="bolder" mt="md">
                {name}
            </Text>
            <Text ta="center" c="dimmed" fz={16} fw="bold">
                {title}
            </Text>

            {/* Affiliations section */}
            <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                {affiliations.map(({ affiliation, link }, index) => (
                    <Text key={index} ta="center" fz="sm" fw='bolder'>
                        <a href={link} style={{ color: 'teal', textDecoration: 'none' }}>
                            {affiliation}
                        </a>
                    </Text>
                ))}
            </div>

            {/* Social Links section */}
            <Group gap="md" justify="center">
                {socialLinks.email && (
                    <Tooltip label="Email me" position="top" withArrow>
                        <ActionIcon component="a" href={socialLinks.email} size="lg" variant="transparent">
                            <IconMailFilled size={30} color={icon_color} />
                        </ActionIcon>
                    </Tooltip>
                )}
                {socialLinks.twitter && (
                    <Tooltip label="Follow me on Twitter" position="top" withArrow>
                        <ActionIcon component="a" href={socialLinks.twitter} size="lg" variant="transparent">
                            <IconBrandTwitterFilled size={30} color={icon_color} />
                        </ActionIcon>
                    </Tooltip>
                )}
                {socialLinks.github && (
                    <Tooltip label="View my GitHub" position="top" withArrow>
                        <ActionIcon component="a" href={socialLinks.github} size="lg" variant="transparent">
                            <IconBrandGithubFilled size={30} color={icon_color} />
                        </ActionIcon>
                    </Tooltip>
                )}
                {socialLinks.google && (
                    <Tooltip label="View my Google Scholar" position="top" withArrow>
                        <ActionIcon component="a" href={socialLinks.google} size="lg" variant="transparent">
                            <IconBrandGoogleFilled size={30} color={icon_color} />
                        </ActionIcon>
                    </Tooltip>
                )}
            </Group>
        </Container>
    );
};
