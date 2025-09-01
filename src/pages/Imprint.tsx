import { Box, Stack, Title } from '@mantine/core';
import { ContactView } from '@/components /imprint/ContactView';
import { InformationView } from '@/components /imprint/InformationView';
import { PersonalCard } from '@/components /PersonalCard';
import { imprint as imprintTranslation } from '@/config/translation';

export function Imprint() {
  return (
    <Box>
      <Title order={2} fz="h1" mb="xl">
        {imprintTranslation.longTitle}
      </Title>
      <PersonalCard>
        <Stack gap="xl">
          <InformationView />
          <ContactView />
        </Stack>
      </PersonalCard>
    </Box>
  );
}
