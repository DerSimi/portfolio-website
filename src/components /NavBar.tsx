import { useState } from 'react';
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
import { IconSun, IconMoonFilled } from '@tabler/icons-react';
import classes from './NavBar.module.css';

export function NavBar({ links, activeLink, setActiveLink }) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.href}
      className={classes.link}
      style={{ color: activeLink === link.label ? '#39D7C9' : '#656168' }}
      onClick={(event) => {
        event.preventDefault();
        setActiveLink(link.label);
        closeDrawer();
      }}
    >
      {link.label}
    </a>
  ));

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
              {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoonFilled size={18} />}
            </ActionIcon>
          </Group>

          {/* Drawer on small screens */}
          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
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
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          {items}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}