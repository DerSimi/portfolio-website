import { Text, Title } from '@mantine/core';
import { home as homeConfig } from '@/config/pages/home';
import { home as homeTranslation } from '@/config/translation';

export function AboutMeView() {
  return (
    <>
      <Title fz="h1" mb="md">
        {homeTranslation.about_me}
      </Title>
      <Text fz="md" mb="md" style={{ maxWidth: '64rem', width: '100%' }}>
        {homeConfig.aboutme}
      </Text>
    </>
  );
}
