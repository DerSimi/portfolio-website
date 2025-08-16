import { Dispatch, SetStateAction } from 'react';
import {
  ActionIcon,
  Box,
  Burger,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  useMantineColorScheme,
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

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.href}
      className={classes.link}
      style={{
        color:
          activeLink === link.label ? '#39D7C9' : colorScheme === 'dark' ? '#A0AEC0' : '#656168',
      }}
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
              {colorScheme === 'dark' ? <IconSunFilled  /> : <IconMoonFilled size={18} />}
            </ActionIcon>
          </Group>

          {/* Drawer on small screens */}
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            style={{ marginRight: '8vw' }}
            color={colorScheme === 'dark' ? '#A0AEC0' : '#6C686F'}
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
            backgroundColor: colorScheme === 'dark' ? '#2D3748' : undefined,
          },
          header: {
            backgroundColor: colorScheme === 'dark' ? '#2D3748' : undefined,
          },
          title: {
            color: colorScheme === 'dark' ? '#A0AEC0' : '#6C686F',
          },
          close: {
            color: colorScheme === 'dark' ? '#A0AEC0' : '#6C686F',
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