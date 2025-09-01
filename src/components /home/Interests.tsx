import { IconChevronRight } from '@tabler/icons-react';
import { List, Title, useMantineTheme } from '@mantine/core';
import { home as homeConfig } from '@/config/pages/home';
import { home as homeTranslation } from '@/config/translation';

export function Interests() {
  const theme = useMantineTheme();

  return (
    <div>
      <Title fz="h3" mb="md">
        {homeTranslation.interests}
      </Title>
      <List
        spacing="xs"
        size="md"
        center
        icon={<IconChevronRight size={18} color={theme.other.colors.accentColor} />}
      >
        {homeConfig.interests.map((interest) => (
          <List.Item key={interest}>{interest}</List.Item>
        ))}
      </List>
    </div>
  );
}
