import { homeData } from '@/config';
import { Text, Title, useMantineColorScheme, useMantineTheme } from '@mantine/core';

export function AboutMe() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const titleColor =
    colorScheme === 'dark' ? theme.other.colors.dark.hoverText : theme.other.colors.light.hoverText;

  const textColor =
    colorScheme === 'dark'
      ? theme.other.colors.dark.normalText
      : theme.other.colors.light.normalText;

  return (
    <>
      <Title fz="h1" mb="md" c={titleColor}>
        About me
      </Title>
      <Text fz="h5" mb="md" c={textColor} style={{ maxWidth: '64rem', width: '100%' }}>
        {homeData.aboutme}
      </Text>
    </>
  );
}
