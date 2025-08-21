import { Text, Title } from '@mantine/core';
import { home } from '@/config';

export function AboutMeView() {
  return (
    <>
      <Title fz="h1" mb="md">
        {home.aboutMeTitle}
      </Title>
      <Text fz="md" mb="md" style={{ maxWidth: '64rem', width: '100%' }}>
        {home.aboutme}
      </Text>
    </>
  );
}
