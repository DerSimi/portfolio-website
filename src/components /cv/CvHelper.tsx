import React from 'react';
import { Flex, Group, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { PersonalCard } from '../ui/PersonalCard';

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
        align="flex-start" // Stellt sicher, dass mehrzeilige Titel gut aussehen
        gap="md" // Abstand, falls der Text umbricht
      >
        {/* Linker Teil: Titel und Untertitel */}
        <Stack gap={0}>
          <Title size="lg">{primary}</Title>
          <Text c="dimmed">{secondary}</Text>
        </Stack>

        {/* Rechter Teil: Datum */}
        <Text size="sm" c="dimmed" style={{ flexShrink: 0 }}>
          {date}
        </Text>
      </Flex>

      {/* Beschreibungstext */}
      <Text size="md" mt="md">{description}</Text>
    </PersonalCard>
  );
}

type IconedCvHeadlineProps = {
  IconComponent: React.ComponentType<{
    size: number;
    color: string;
    style: React.CSSProperties;
  }>;

  text: string;
};

export function IconedCvHeadline({ IconComponent, text }: IconedCvHeadlineProps) {
  const theme = useMantineTheme();
  const colorAccent = theme.other.colors.accent;

  return (
    <Group gap={8} mb="xs">
      <IconComponent size={28} color={colorAccent} style={{ marginBottom: 0 }} />
      <Title fz="h2" mb={0}>
        {text}
      </Title>
    </Group>
  );
}
