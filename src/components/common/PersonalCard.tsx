import type { PropsWithChildren } from 'react';
import { Card, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import type { CardProps } from '@mantine/core';

type PersonalCardProps = PropsWithChildren<CardProps>;

export function PersonalCard({ children, style, ...rest }: PersonalCardProps) {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const bg =
    colorScheme === 'dark' ? theme.other.colors.dark.boxBg : theme.other.colors.light.boxBg;

  return (
    <Card
      shadow="sm"
      padding="xl"
      radius="lg"
      style={{
        background: bg,
        display: 'flex',
        flexDirection: 'column',
        transition: 'box-shadow 0.2s',
        ...(style ?? {}),
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow =
          colorScheme === 'dark'
            ? '0 0 16px rgba(255, 255, 255, 0.18)'
            : '0 0 16px rgba(0, 0, 0, 0.18)')
      }
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '')}
      {...rest}
    >
      {children}
    </Card>
  );
}
