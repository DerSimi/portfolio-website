import { Badge, Flex, Stack, Text, Title } from '@mantine/core';
import { PersonalCard } from '../PersonalCard';

type CvEntryProps = {
  primary: string;
  secondary: string;
  date: string;
  description: string;
  current?: boolean;
};

export function CvEntry({ primary, secondary, date, description, current }: CvEntryProps) {
  return (
    <PersonalCard>
      <Flex
        justify="space-between"
        align="flex-start"
        gap="md"
      >
        <Stack gap={0}>
          <Title size="lg">{primary}</Title>
          <Text c="dimmed">{secondary}</Text>
        </Stack>

        <Stack gap={4} align="flex-end" style={{ flexShrink: 0 }}>
          <Text size="sm" c="dimmed">
            {date}
          </Text>
        </Stack>
      </Flex>

      <Text size="md" mt="md">{description}</Text>
    </PersonalCard>
  );
}