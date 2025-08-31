import { IconBriefcase2Filled } from '@tabler/icons-react';
import { Group, Timeline, Title } from '@mantine/core';
import { CvEntry } from '@/components /cv/CvHelper';
import { cv } from '@/config';

export function ExperienceView() {
  // Hardcoded teal for the timeline. Can not use the css keyword teal within
  // the timeline because mantine will use a different color.
  const teal = '#008080';

  return (
    <>
      <Group gap={8} mb="md">
        <IconBriefcase2Filled size={28} color={teal} style={{ marginBottom: 0 }} />
        <Title fz="h2" mb={0}>
          {cv.experienceTitle}
        </Title>
      </Group>

  <Timeline active={cv.experience.length} color={teal} lineWidth={2}>
        {cv.experience.map((entry, index) => (
          <Timeline.Item
            key={index}
            lineVariant={entry.current ? 'dashed' : 'solid'}
            bullet={
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: teal,
                  border: `5px solid ${teal}`,
                }}
              />
            }
          >
            <CvEntry {...entry} />
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  );
}
