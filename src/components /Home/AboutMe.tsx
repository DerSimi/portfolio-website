import { Title, Text, useMantineTheme } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";

export function AboutMe() {
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
        <>
            <Title order={2} fz="1.875rem" fw={700} mb="md" c={titleColor}>
                About me
            </Title>
            <Text
                component="p"
                lh="1.625"
                c={textColor}
                style={{ maxWidth: "64rem", width: "100%" }}
            >
                My name is Who Dis and I am a Master's student at the University of Tübingen, specializing in Machine Learning and Robotics. My current research, in collaboration with the Max Planck Institute for Intelligent Systems, involves developing robust perception systems for autonomous agents. I am passionate about reinforcement learning for robot manipulation and applying computer vision to real-world problems. When I'm not training models, I enjoy building custom drones and exploring the latest in generative AI.
            </Text>
        </>
    );
}