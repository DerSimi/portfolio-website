import { homeData } from '@/config';
import { List, Title, useMantineColorScheme, useMantineTheme } from '@mantine/core';

export function Interests() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const titleColor =
    colorScheme === 'dark' ? theme.other.colors.dark.hoverText : theme.other.colors.light.hoverText;

  const textColor =
    colorScheme === 'dark'
      ? theme.other.colors.dark.normalText
      : theme.other.colors.light.normalText;

  return (
    <div>
      <Title fz="h3" mb="md" c={titleColor}>
        Interests
      </Title>
      <List
        spacing="xs"
        size="sm"
        center
        fz="h5"
        styles={{
          item: { color: textColor },
        }}
      >
        {homeData.interests.map((interest) => (
          <List.Item key={interest}>{interest}</List.Item>
        ))}
      </List>
    </div>
  );
}
