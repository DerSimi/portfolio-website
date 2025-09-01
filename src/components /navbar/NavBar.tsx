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
  isImprint: boolean;
  setImprint: (value: boolean) => void;
}

export function NavBar({ links, activeLink, setActiveLink, isImprint, setImprint }: NavBarProps) {
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

    if (isImprint) color = dimmedColor;

    return (
      <a
        key={link.label}
        href={link.href}
        className={classes.link}
        style={{ color }}
        onClick={(event) => {
          event.preventDefault();
          setActiveLink(link.label);
          setImprint(false);
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
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            // style={{ marginLeft: '8vw' }}
            color={dimmedColor}
          />

          <Group h="100%" gap={0} visibleFrom="sm" style={{ marginLeft: '8vw', paddingLeft: '0' }}>
            {items}
          </Group>

          {/* Dark mode icon for >=sm screens, with marginRight */}
          <Group visibleFrom="sm" style={{ marginRight: '8vw', marginLeft: 'auto' }}>
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
          {/* Dark mode icon for <sm screens, no marginRight */}
          <Group hiddenFrom="sm" style={{ marginLeft: 'auto' }}>
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
