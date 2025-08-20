import { home } from '@/config';
import { Text, Title } from '@mantine/core';

export function AboutMeView() {
  return (
    <>
      <Title fz="h1" mb="md">
        About me
      </Title>
      <Text fz="md" mb="md" style={{ maxWidth: '64rem', width: '100%' }}>
        {home.aboutme}
      </Text>
    </>
  );
}
