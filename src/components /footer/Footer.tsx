import { useState } from 'react';
import { IconBrandGithubFilled } from '@tabler/icons-react';
import { Text, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { imprint as imprintConfig } from '@/config/pages/imprint';
import { imprint as imprintTranslation } from '@/config/translation';
import classes from './Footer.module.css';

interface FooterProps {
  isImprint: boolean;
  setImprint: (value: boolean) => void;
}

export function Footer({ isImprint, setImprint }: FooterProps) {
  const [restoreHash, setHash] = useState('');

  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const defaultTextColor = colorScheme === 'dark' ? theme.colors.dark[0] : theme.black;
  const dimmedColor = colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6];

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <a
          href="https://github.com/DerSimi/portfolio-website"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            color: dimmedColor,
            textDecoration: 'none',
            cursor: 'pointer',
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = defaultTextColor)}
          onMouseOut={(e) => (e.currentTarget.style.color = dimmedColor)}
          aria-label="GitHub Repository"
        >
          <IconBrandGithubFilled style={{ verticalAlign: 'middle' }} />
        </a>

        {imprintConfig.enableImprint ? (
          <Text
            size="md"
            style={{
              marginLeft: 'auto',
              color: dimmedColor,
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = defaultTextColor)}
            onMouseOut={(e) => (e.currentTarget.style.color = dimmedColor)}
            onClick={(e) => {
              e.preventDefault();

              if (!isImprint) {
                setHash(window.location.hash);
                window.location.hash = 'imprint';
              } else window.location.hash = restoreHash;

              setImprint(!isImprint);
            }}
          >
            {imprintTranslation.longTitle}
          </Text>
        ) : null}
      </div>
    </div>
  );
}
