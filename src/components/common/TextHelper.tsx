import { IconChevronRight } from '@tabler/icons-react';
import { List, Text, useMantineTheme } from '@mantine/core';

// Helper function to render a bullet point list
function RenderList(listItems: string[], key: string | number) {
  const theme = useMantineTheme();

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

// Helper function to render text, supporting linebreaks and bullet points.
// \n This is a new line
// \n > Bullet point 1
// \n > Bullet point 2
// \n Normal text continues
export function RenderDescription(
  description: string,
  textProps?: React.ComponentProps<typeof Text>
) {
  const lines = description.split('\n');
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];

  lines.forEach((rawLine, idx) => {
    const line = rawLine.trim();
    if (line.startsWith('>')) {
      listItems.push(line.slice(1).trim());
    } else {
      if (listItems.length) {
        elements.push(RenderList(listItems, `list-${idx}`));
        listItems = [];
      }
      if (line) {
        elements.push(
          <Text key={`text-${idx}`} {...textProps}>
            {line}
          </Text>
        );
      }
    }
  });

  if (listItems.length) {
    elements.push(RenderList(listItems, 'list-last'));
  }

  return elements;
}
