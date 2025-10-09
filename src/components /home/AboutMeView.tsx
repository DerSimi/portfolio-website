import { Text, Title } from '@mantine/core';
import { home as homeConfig } from '@/config/pages/home';
import { home as homeTranslation } from '@/config/translation';
import { RenderDescription } from '../common/TextHelper';

export function AboutMeView() {
  return (
    <>
      <Title fz="h1" mb="md">
        {homeTranslation.about_me}
      </Title>
      {RenderDescription(homeConfig.aboutme, {
        fz: 'md',
        mb: 'md',
        style: { maxWidth: '64rem', width: '100%' },
      })}
    </>
  );
}
