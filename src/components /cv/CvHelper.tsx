import { Flex, Stack, Text, Title } from '@mantine/core';
import { PersonalCard } from '../PersonalCard';

type CvEntryProps = {
  primary: string;
  secondary: string;
  date: string;
  description: string;
};

export function CvEntry({ primary, secondary, date, description }: CvEntryProps) {
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

        <Text size="sm" c="dimmed" style={{ flexShrink: 0 }}>
          {date}
        </Text>
      </Flex>

      <Text size="md" mt="md">{description}</Text>
    </PersonalCard>
  );
}