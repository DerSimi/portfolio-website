import { Anchor, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import classes from './Footer.module.css';

export function Footer() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const defaultTextColor = colorScheme === 'dark' ? theme.colors.dark[0] : theme.black;
  const dimmedColor = colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6];

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Anchor
          href="/imprint"
          size="md"
          style={{ marginLeft: 'auto', color: dimmedColor, textDecoration: 'none' }}
          onMouseOver={(e) => (e.currentTarget.style.color = defaultTextColor)}
          onMouseOut={(e) => (e.currentTarget.style.color = dimmedColor)}
        >
          Imprint
        </Anchor>
      </div>
    </div>
  );
}
