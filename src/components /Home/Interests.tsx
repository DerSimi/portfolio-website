import { List, Title, useMantineColorScheme, useMantineTheme } from '@mantine/core';

const interests = [
    "Reinforcement Learning",
    "Computer Vision for Robotics",
    "Sensor Fusion & Perception",
    "Autonomous Systems",
];

export function Interests() {
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
            <Title order={3} mb="md" c={titleColor}>Interests</Title>
            <List
                spacing="xs"
                size="sm"
                center
                styles={{
                    item: { color: textColor }
                }}
            >
                {interests.map((interest) => (
                    <List.Item key={interest}>{interest}</List.Item>
                ))}
            </List>
        </div>
    );
}