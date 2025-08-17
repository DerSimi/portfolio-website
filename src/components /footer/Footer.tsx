import { Anchor, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import classes from './Footer.module.css';

export function Footer() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const textColor =
    colorScheme === 'dark'
      ? theme.other.colors.dark.normalText
      : theme.other.colors.light.normalText;
  const accentColor = theme.other.colors.accent;
  
  return (
    <div className={classes.footer}>      
      <div className={classes.inner}>
        <Anchor
          href="/imprint"
          fz="h5"
          style={{ marginLeft: 'auto', color: textColor }}
          onMouseOver={e => (e.currentTarget.style.color = accentColor)}
          onMouseOut={e => (e.currentTarget.style.color = textColor)}
        >
          Imprint
        </Anchor>
      </div>
    </div>
  );
}