import {
  IconBrandGithubFilled,
  IconBrandGoogleFilled,
  IconBrandLinkedinFilled,
  IconBrandXFilled,
  IconMailFilled,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Avatar,
  Box,
  Container,
  Group,
  Text,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { home } from '@/config/pages/home';

export function Profile() {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const iconColor = colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6];

  const isSmUp = useMediaQuery('(min-width: 48em)'); // Mantine sm = 48em = 768px

  return (
    <Container p={0} w={300} style={{ margin: isSmUp ? 'auto' : 0, textAlign: 'center' }}>
      {/* Avatar section */}
      <Avatar
        src={home.imageLink && home.imageLink !== '' ? home.imageLink : null}
        alt="User avatar"
        color={theme.other.colors.accentColor}
        size={160}
        radius={10}
        mx="auto"
        style={{ borderRadius: '50%', boxShadow: '0 17px 30px rgba(0, 0, 0, 0.1)' }}
      >
        {home.avatarInitials}
      </Avatar>

      {/* Name and Title section */}
      <Text ta="center" fz={30} fw="bolder" mt="md" lh={1.1}>
        {home.name}
      </Text>
      <Text ta="center" size="md" fw="bold" mt="lg" c="dimmed">
        {home.title}
      </Text>

      {/* Affiliations section */}
      <Box mt="xs" mb="xs">
        {home.affiliations.map(({ affiliation, link }, index) => (
          <Text key={index} ta="center" size="sm" fw="bolder">
            <a href={link} style={{ color: theme.other.colors.accentColor, textDecoration: 'none' }}>
              {affiliation}
            </a>
          </Text>
        ))}
      </Box>

      {/* Social Links section */}
      <Group gap="md" justify="center">
        {home.socialLinks.email && (
          <Tooltip label="Email me" position="top" withArrow>
            <ActionIcon component="a" href={home.socialLinks.email} size="lg" variant="transparent">
              <IconMailFilled size={30} color={iconColor} />
            </ActionIcon>
          </Tooltip>
        )}
        {home.socialLinks.x && (
          <Tooltip label="Follow me on X" position="top" withArrow>
            <ActionIcon component="a" href={home.socialLinks.x} size="lg" variant="transparent">
              <IconBrandXFilled size={30} color={iconColor} />
            </ActionIcon>
          </Tooltip>
        )}
        {home.socialLinks.github && (
          <Tooltip label="View my GitHub" position="top" withArrow>
            <ActionIcon
              component="a"
              href={home.socialLinks.github}
              size="lg"
              variant="transparent"
            >
              <IconBrandGithubFilled size={30} color={iconColor} />
            </ActionIcon>
          </Tooltip>
        )}
        {home.socialLinks.linkedin && (
          <Tooltip label="View my LinkedIn" position="top" withArrow>
            <ActionIcon
              component="a"
              href={home.socialLinks.linkedin}
              size="lg"
              variant="transparent"
            >
              <IconBrandLinkedinFilled size={30} color={iconColor} />
            </ActionIcon>
          </Tooltip>
        )}
        {home.socialLinks.google && (
          <Tooltip label="View my Google Scholar" position="top" withArrow>
            <ActionIcon
              component="a"
              href={home.socialLinks.google}
              size="lg"
              variant="transparent"
            >
              <IconBrandGoogleFilled size={30} color={iconColor} />
            </ActionIcon>
          </Tooltip>
        )}
      </Group>
    </Container>
  );
}
