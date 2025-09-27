import { IconChevronRight } from '@tabler/icons-react';
import { Flex, List, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { PersonalCard } from '../PersonalCard';

// Helper function to render a list in cv entry
function RenderList(listItems: string[], theme: any, key: string | number) {
  return (
    <List
      spacing="xs"
      size="md"
      withPadding
      icon={
        <IconChevronRight
          size={18}
          color={theme.other.colors.accentColor}
          style={{
            verticalAlign: 'middle',
            display: 'inline-block',
            position: 'relative',
            top: '-0.1em',
          }}
        />
      }
      styles={{
        // align the icon to the top of the first line
        itemWrapper: {
          alignItems: 'flex-start',
        },
        item: {
          lineHeight: theme.lineHeights.md,
        },
      }}
      key={key}
    >
      {listItems.map((item, i) => (
        <List.Item key={i}>{item}</List.Item>
      ))}
    </List>
  );
}

type CvEntryProps = {
  primary: string;
  secondary: string;
  date: string;
  description: string;
};

export function CvEntry({ primary, secondary, date, description }: CvEntryProps) {
  const theme = useMantineTheme();

  return (
    <PersonalCard>
      <Flex justify="space-between" align="flex-start" gap="md">
        <Stack gap={0}>
          <Title size="lg">{primary}</Title>
          <Text c="dimmed">{secondary}</Text>
        </Stack>
        <Text size="sm" c="dimmed">
          {date}
        </Text>
      </Flex>

      {(() => {
        const lines = description.split('\n');
        const elements: React.ReactNode[] = [];
        let listItems: string[] = [];

        lines.forEach((rawLine, idx) => {
          const line = rawLine.trim();
          if (line.startsWith('>')) {
            listItems.push(line.slice(1).trim());
          } else {
            if (listItems.length) {
              elements.push(RenderList(listItems, theme, `list-${idx}`));
              listItems = [];
            }
            if (line) {
              elements.push(
                <Text size="md" mt="md" key={`text-${idx}`}>
                  {line}
                </Text>
              );
            }
          }
        });

        if (listItems.length) {
          elements.push(RenderList(listItems, theme, 'list-last'));
        }

        return elements;
      })()}
    </PersonalCard>
  );
}
