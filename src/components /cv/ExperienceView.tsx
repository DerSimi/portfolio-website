import { IconBriefcase2Filled } from '@tabler/icons-react';
import { Timeline, useMantineTheme } from '@mantine/core';
import { CvEntry, IconedCvHeadline } from '@/components /cv/CvHelper';
import { cvData } from '@/config';

export function ExperienceView() {
  const theme = useMantineTheme();
  const colorAccent = theme.other.colors.accent;
  return (
    <>
      <IconedCvHeadline IconComponent={IconBriefcase2Filled} text="Experience" />

      <Timeline active={cvData.experience.length} lineWidth={2} color={colorAccent}>
        {cvData.experience.map((entry, index) => (
          <Timeline.Item
            key={index}
            bullet={
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: colorAccent,
                  border: '2px solid ' + colorAccent,
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
