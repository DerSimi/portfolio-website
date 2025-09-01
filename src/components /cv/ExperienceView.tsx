import { IconBriefcase2Filled } from '@tabler/icons-react';
import { Group, Timeline, Title, useMantineTheme } from '@mantine/core';
import { CvEntry } from '@/components /cv/CvHelper';
import { cv as cvConfig } from '@/config/pages/cv';
import { cv as cvTranslation } from '@/config/translation';

export function ExperienceView() {
  const theme = useMantineTheme();
  // Hardcoded teal for the timeline. Can not use the css keyword teal within
  // the timeline because mantine will use a different color.
  const teal = '#008080';

  return (
    <>
      <Group gap={8} mb="md">
        <IconBriefcase2Filled size={28} color={theme.other.colors.accentColor} style={{ marginBottom: 0 }} />
        <Title fz="h2" mb={0}>
          {cvTranslation.experience}
        </Title>
      </Group>

      <Timeline active={cvConfig.experience.length} color={theme.other.colors.accentColor} lineWidth={2}>
        {cvConfig.experience.map((entry, index) => (
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
