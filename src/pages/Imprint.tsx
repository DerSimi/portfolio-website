import { Box, Stack, Title } from '@mantine/core';
import { ContactView } from '@/components /imprint/ContactView';
import { InformationView } from '@/components /imprint/InformationView';
import { PersonalCard } from '@/components /PersonalCard';
import { imprint } from '@/config';

export function Imprint() {
  return (
    <Box>
      <Title order={2} fz="h1" mb="xl">
        {imprint.pageTitle}
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
