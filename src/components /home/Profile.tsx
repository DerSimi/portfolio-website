import {
  IconBrandGithubFilled,
  IconBrandGoogleFilled,
  IconBrandXFilled,
  IconBrandLinkedinFilled,
  IconMailFilled,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Avatar,
  Container,
  Group,
  Text,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { homeData } from '@/config';

export function Profile() {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isSmUp = useMediaQuery('(min-width: 48em)'); // Mantine sm = 48em = 768px

  const iconColor =
    colorScheme === 'dark'
      ? theme.other.colors.dark.normalText
      : theme.other.colors.light.normalText;

  return (
    <Container p={0} w={300} style={{ margin: isSmUp ? 'auto' : 0, textAlign: 'center' }}>
      {/* Avatar section */}
      <Avatar
        src={homeData.imageLink && homeData.imageLink !== '' ? homeData.imageLink : null}
        alt="User avatar"
        color="teal"
        size={160}
        radius={10}
        mx="auto"
        style={{ borderRadius: '50%', boxShadow: '0 17px 30px rgba(0, 0, 0, 0.1)' }}
      >
        {homeData.avatarInitials}
      </Avatar>

      {/* Name and Title section */}
      <Text ta="center" fz={30} fw="bolder" mt="md">
        {homeData.name}
      </Text>
      <Text ta="center" c="dimmed" fz={16} fw="bold">
        {homeData.title}
      </Text>

      {/* Affiliations section */}
      <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
        {homeData.affiliations.map(({ affiliation, link }, index) => (
          <Text key={index} ta="center" fz="sm" fw="bolder">
            <a href={link} style={{ color: 'teal', textDecoration: 'none' }}>
              {affiliation}
            </a>
          </Text>
        ))}
      </div>

      {/* Social Links section */}
      <Group gap="md" justify="center">
        {homeData.socialLinks.email && (
          <Tooltip label="Email me" position="top" withArrow>
            <ActionIcon component="a" href={homeData.socialLinks.email} size="lg" variant="transparent">
              <IconMailFilled size={30} color={iconColor} />
            </ActionIcon>
          </Tooltip>
        )}
        {homeData.socialLinks.x && (
          <Tooltip label="Follow me on X" position="top" withArrow>
            <ActionIcon component="a" href={homeData.socialLinks.x} size="lg" variant="transparent">
              <IconBrandXFilled size={30} color={iconColor} />
            </ActionIcon>
          </Tooltip>
        )}
        {homeData.socialLinks.github && (
          <Tooltip label="View my GitHub" position="top" withArrow>
            <ActionIcon component="a" href={homeData.socialLinks.github} size="lg" variant="transparent">
              <IconBrandGithubFilled size={30} color={iconColor} />
            </ActionIcon>
          </Tooltip>
        )}
        {homeData.socialLinks.linkedin && (
          <Tooltip label="View my LinkedIn" position="top" withArrow>
            <ActionIcon component="a" href={homeData.socialLinks.linkedin} size="lg" variant="transparent">
              <IconBrandLinkedinFilled size={30} color={iconColor} />
            </ActionIcon>
          </Tooltip>
        )}
        {homeData.socialLinks.google && (
          <Tooltip label="View my Google Scholar" position="top" withArrow>
            <ActionIcon component="a" href={homeData.socialLinks.google} size="lg" variant="transparent">
              <IconBrandGoogleFilled size={30} color={iconColor} />
            </ActionIcon>
          </Tooltip>
        )}
      </Group>
    </Container>
  );
}
