import { Card, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import type { CardProps } from '@mantine/core'; // Importiere CardProps für Typsicherheit
import type { PropsWithChildren } from 'react';

type PersonalCardProps = PropsWithChildren<CardProps>;

export function PersonalCard({ children, style, ...rest }: PersonalCardProps) {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const bg =
    colorScheme === 'dark'
      ? theme.other.colors.dark.navBg
      : theme.other.colors.light.navBg;

  return (
    <Card
      shadow="sm"
      padding="xl"
      radius="md"
      style={{
        background: bg,
        transition: 'box-shadow 0.2s',
        ...(style ?? {}),
      }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.18)')}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = '')}
      {...rest}
    >
      {children}
    </Card>
  );
}