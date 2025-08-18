import { Dispatch, SetStateAction, useState } from 'react';
import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react';
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
  const [iconHovered, setIconHovered] = useState(false);

  const defaultTextColor = colorScheme === 'dark' ? theme.colors.dark[0] : theme.black;
  const dimmedColor = colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6];

  const items = links.map((link) => {
    const isActive = activeLink === link.label;
    const isHovered = hoveredLink === link.label;
    let color;

    if (isActive) {
      color = defaultTextColor;
    } else if (isHovered) {
      color = defaultTextColor;
    } else {
      color = dimmedColor;
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
      <header
        className={classes.header}
        style={{
          backgroundColor:
            colorScheme === 'dark' ? theme.other.colors.dark.boxBg : theme.other.colors.light.boxBg,
        }}
      >
        <Group justify="space-between" h="100%">
          <Group h="100%" gap={0} visibleFrom="sm" style={{ marginLeft: '8vw', paddingLeft: '0' }}>
            {items}
          </Group>

          <Group visibleFrom="sm" style={{ marginRight: '8vw' }}>
            <ActionIcon
              onClick={() => toggleColorScheme()}
              variant="transparent"
              size="auto"
              aria-label="Toggle color scheme"
              onMouseEnter={() => setIconHovered(true)}
              onMouseLeave={() => setIconHovered(false)}
            >
              {colorScheme === 'dark' ? (
                <IconSunFilled color={iconHovered ? defaultTextColor : dimmedColor} />
              ) : (
                <IconMoonFilled size={18} color={iconHovered ? defaultTextColor : dimmedColor} />
              )}
            </ActionIcon>
          </Group>

          {/* Drawer on small screens */}
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            style={{ marginRight: '8vw' }}
            color={dimmedColor}
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
              colorScheme === 'dark'
                ? theme.other.colors.dark.boxBg
                : theme.other.colors.light.boxBg,
          },
          header: {
            backgroundColor:
              colorScheme === 'dark'
                ? theme.other.colors.dark.boxBg
                : theme.other.colors.light.boxBg,
          },
          title: {
            color: dimmedColor,
          },
          close: {
            color: dimmedColor,
          },
        }}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <Box pl="md">{items}</Box>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
