import { Dispatch, SetStateAction, useState } from 'react';
import {
  ActionIcon,
  Box,
  Burger,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSunFilled, IconMoonFilled } from '@tabler/icons-react';
import classes from './NavBar.module.css';

interface NavBarProps {
  links: { label: string; href: string }[];
  activeLink: string;
  setActiveLink: Dispatch<SetStateAction<string>>;
}

export function NavBar({ links, activeLink, setActiveLink }: NavBarProps) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const items = links.map((link) => {
    const isActive = activeLink === link.label;
    const isHovered = hoveredLink === link.label;
    let color;

    if (isActive) {
      color = theme.other.colors.accent;
    } else if (isHovered) {
      color =
        colorScheme === 'dark'
          ? theme.other.colors.dark.hoverText
          : theme.other.colors.light.hoverText;
    } else {
      color =
        colorScheme === 'dark'
          ? theme.other.colors.dark.inactiveText
          : theme.other.colors.light.inactiveText;
    }

    return (
      <a
        key={link.label}
        href={link.href}
        className={classes.link}
        style={{ color }}
        onClick={(event) => {
          event.preventDefault();
          setActiveLink(link.label);
          closeDrawer();
        }}
        onMouseEnter={() => setHoveredLink(link.label)}
        onMouseLeave={() => setHoveredLink(null)}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group h="100%" gap={0} visibleFrom="sm" style={{ marginLeft: '8vw' }}>
            {items}
          </Group>

          <Group visibleFrom="sm" style={{ marginRight: '8vw' }}>
            <ActionIcon
              onClick={() => toggleColorScheme()}
              variant="transparent"
              size="lg"
              aria-label="Toggle color scheme"
              className={classes.themeToggle}
            >
              {colorScheme === 'dark' ? <IconSunFilled /> : <IconMoonFilled size={18} />}
            </ActionIcon>
          </Group>

          {/* Drawer on small screens */}
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            style={{ marginRight: '8vw' }}
            color={
              colorScheme === 'dark'
                ? theme.other.colors.dark.inactiveText
                : theme.other.colors.light.drawerText
            }
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
        styles={{
          content: {
            backgroundColor:
              colorScheme === 'dark' ? theme.other.colors.dark.navBg : undefined,
          },
          header: {
            backgroundColor:
              colorScheme === 'dark' ? theme.other.colors.dark.navBg : undefined,
          },
          title: {
            color:
              colorScheme === 'dark'
                ? theme.other.colors.dark.inactiveText
                : theme.other.colors.light.drawerText,
          },
          close: {
            color:
              colorScheme === 'dark'
                ? theme.other.colors.dark.inactiveText
                : theme.other.colors.light.drawerText,
          },
        }}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          {items}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}