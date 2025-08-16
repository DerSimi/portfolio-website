import {
  Box,
  Burger,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './NavBar.module.css';

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Home
            </a>
            <a href="#" className={classes.link}>
              Projects
            </a>
            <a href="#" className={classes.link}>
              Publications
            </a>
            <a href="#" className={classes.link}>
              CV
            </a>
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

          <a href="#" className={classes.link}>
            Home
          </a>
          <a href="#" className={classes.link}>
            Projects
          </a>
          <a href="#" className={classes.link}>
            Publications
          </a>
          <a href="#" className={classes.link}>
            CV
          </a>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}