import { Anchor, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { imprint } from '@/config';
import classes from './Footer.module.css';

interface FooterProps {
  isImprint: boolean;
  setImprint: (value: boolean) => void;
}

export function Footer({ isImprint, setImprint }: FooterProps) {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const defaultTextColor = colorScheme === 'dark' ? theme.colors.dark[0] : theme.black;
  const dimmedColor = colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6];

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        {imprint.enableImprint ? (
          <Anchor
            href="/imprint"
            size="md"
            style={{ marginLeft: 'auto', color: dimmedColor, textDecoration: 'none' }}
            onMouseOver={(e) => (e.currentTarget.style.color = defaultTextColor)}
            onMouseOut={(e) => (e.currentTarget.style.color = dimmedColor)}
            onClick={(e) => {
              e.preventDefault();
              setImprint(!isImprint);
            }}
          >
            {imprint.pageTitle}
          </Anchor>
        ) : null}
      </div>
    </div>
  );
}
