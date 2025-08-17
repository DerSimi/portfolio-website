import { List, Title } from '@mantine/core';
import { homeData } from '@/config';

export function Interests() {
  return (
    <div>
      <Title fz="h3" mb="md">
        Interests
      </Title>
      <List spacing="xs" size="md" center>
        {homeData.interests.map((interest) => (
          <List.Item key={interest}>{interest}</List.Item>
        ))}
      </List>
    </div>
  );
}
