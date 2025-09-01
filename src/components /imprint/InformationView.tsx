import { Stack, Text, Title } from '@mantine/core';
import { imprint } from '@/config/pages/imprint';

export function InformationView() {
  return (
    <Stack gap="md">
      <Title fz="h2">{imprint.informationTitle}</Title>

      <Text>
        {imprint.information.split('\n').map((line, idx, arr) => (
          <span key={idx}>
            {line}
            {idx < arr.length - 1 && <br />}
          </span>
        ))}
      </Text>
    </Stack>
  );
}
