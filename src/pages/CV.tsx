import { Box, Divider, Grid, Group, Stack, Text, Title, useMantineColorScheme, useMantineTheme } from '@mantine/core';

// Die Daten-Arrays bleiben unverändert
const educationData = [
  {
    primary: "MSc in Machine Learning",
    secondary: "University of Tübingen",
    date: "Oct 2023 - Present",
  },
  {
    primary: "BSc in Computer Science",
    secondary: "Technical University of Munich",
    date: "Oct 2019 - Sep 2023",
  },
];

const experienceData = [
  {
    primary: "Research Assistant",
    secondary: "Max Planck Institute for Intelligent Systems",
    date: "Oct 2023 - Present",
  },
  {
    primary: "Software Engineer Intern",
    secondary: "Robotics Startup XYZ",
    date: "Jun 2022 - Aug 2022",
  },
];

const skillsData = [
  { category: "Programming", skills: "Python, C++, MATLAB" },
  { category: "Frameworks", skills: "PyTorch, TensorFlow, ROS, OpenCV" },
  { category: "Languages", skills: "English (Fluent), German (Professional)" },
];

// Die Helper-Komponenten bleiben unverändert
function SectionDivider({ color }: { color: string }) {
  return <Divider style={{ width: '90%' }} color={color} />;
}

function CvEntry({
  primary,
  secondary,
  date,
  textColor,
}: {
  primary: string;
  secondary: string;
  date: string;
  textColor: string;
}) {
  return (
    <Grid>
      <Grid.Col span="auto">
        <Text c={textColor}>
          <Text component="span" fw={700} c={textColor}>
            {primary}
          </Text>
          {secondary && (
            <Text component="span" c={textColor}>
              , {secondary}
            </Text>
          )}
        </Text>
      </Grid.Col>
      <Grid.Col span="content" style={{ marginRight: '9.5vw' }}>
        <Text size="sm" c={textColor}>
          {date}
        </Text>
      </Grid.Col>
    </Grid>
  );
}

function SkillEntry({ category, skills, textColor }: { category: string; skills: string; textColor: string }) {
  return (
    <Group gap="xs">
      <Text fw={700} c={textColor}>{category}:</Text>
      <Text c={textColor}>{skills}</Text>
    </Group>
  );
}


export function CV() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const titleColor =
    colorScheme === 'dark'
      ? theme.other.colors.dark.hoverText
      : theme.other.colors.light.hoverText;

  const textColor = colorScheme === 'dark'
    ? theme.other.colors.dark.normalText
    : theme.other.colors.light.normalText;

  return (
    <Box>
      {/* NEU: Schriftgröße und -stärke angepasst an text-3xl (30px) & font-bold */}
      <Title order={2} mb={40} c={titleColor} size="1.875rem" fw={700}>
        Curriculum Vitae
      </Title>

      <Stack gap={40}>
        {/* Education Section */}
        <Stack gap="sm">
          {/* NEU: Schriftgröße und -stärke angepasst an text-2xl (24px) & font-bold */}
          <Title order={4} c={titleColor} size="1.5rem" fw={700}>Education</Title>
          <SectionDivider color={textColor} />
          <div style={{ color: textColor }}>
            {educationData.map((entry) => (
              <CvEntry key={entry.primary} {...entry} textColor={textColor} />
            ))}
          </div>
        </Stack>

        {/* Experience Section */}
        <Stack gap="sm">
          {/* NEU: Schriftgröße und -stärke angepasst an text-2xl (24px) & font-bold */}
          <Title order={4} c={titleColor} size="1.5rem" fw={700}>Experience</Title>
          <SectionDivider color={textColor} />
          <div style={{ color: textColor }}>
            {experienceData.map((entry) => (
              <CvEntry key={entry.primary} {...entry} textColor={textColor} />
            ))}
          </div>
        </Stack>

        {/* Skills Section */}
        <Stack gap="xs">
           {/* NEU: Schriftgröße und -stärke angepasst an text-2xl (24px) & font-bold */}
          <Title order={4} c={titleColor} size="1.5rem" fw={700}>Skills</Title>
          <SectionDivider color={textColor} />
          <div style={{ color: textColor }}>
            {skillsData.map((entry) => (
              <SkillEntry key={entry.category} {...entry} textColor={textColor} />
            ))}
          </div>
        </Stack>
      </Stack>
    </Box>
  );
}