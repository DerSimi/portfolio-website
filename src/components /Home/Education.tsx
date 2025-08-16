import { Group, Stack, Text, Title, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';

const educationData = [
    {
        degree: "MSc in Machine Learning",
        school: "University of Tübingen",
        duration: "Oct 2023 - Present",
    },
    {
        degree: "BSc in Computer Science",
        school: "Technical University of Munich",
        duration: "Oct 2019 - Sep 2023",
    },
];

export function Education() {
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
        <div>
            <Title order={3} mb="md" c={titleColor}>Education</Title>
            <Stack gap="lg">
                {educationData.map((edu) => (
                    <Group align="flex-start" gap="md" wrap="nowrap" key={edu.degree}>
                        <IconSchool size={24} color={textColor} style={{ marginTop: '4px' }} />
                        <div>
                            <Text fw={600} c={titleColor}>{edu.degree}</Text>
                            <Text size="sm" c={textColor}>
                                {edu.school}, {edu.duration}
                            </Text>
                        </div>
                    </Group>
                ))}
            </Stack>
        </div>
    );
}