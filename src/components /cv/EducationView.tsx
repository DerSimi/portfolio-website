import { IconSchool } from '@tabler/icons-react';
import { Stack } from '@mantine/core';
import { CvEntry, IconedCvHeadline } from '@/components /cv/CvHelper';
import { cvData } from '@/config';

export function EducationView() {
  return (
    <>
      <IconedCvHeadline IconComponent={IconSchool} text="Education" />

      <Stack gap="lg">
        {cvData.education.map((entry) => (
          <CvEntry key={entry.primary} {...entry} />
        ))}
      </Stack>
    </>
  );
}
