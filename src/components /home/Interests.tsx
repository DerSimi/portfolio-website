import { IconChevronRight } from '@tabler/icons-react';
import { List, Title } from '@mantine/core';
import { home as homeConfig } from '@/config/pages/home';
import { home as homeTranslation } from '@/config/translation';

export function Interests() {
  return (
    <div>
      <Title fz="h3" mb="md">
        {homeTranslation.interests}
      </Title>
      <List spacing="xs" size="md" center icon={<IconChevronRight size={18} color="teal" />}>
        {homeConfig.interests.map((interest) => (
          <List.Item key={interest}>{interest}</List.Item>
        ))}
      </List>
    </div>
  );
}
