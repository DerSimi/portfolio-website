import { useState, ReactElement } from "react";
import { Box, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { NavBar } from "@/components /NavBar/NavBar";

// You can move these into their own files in a 'views' or 'sections' folder later
const HomeContent = () => <div>Home Page Content</div>;
const ProjectsContent = () => <div>Projects Page Content</div>;
const PublicationsContent = () => <div>Publications Page Content</div>;
const CVContent = () => <div>CV Page Content</div>;

const contentMap: Record<string, ReactElement> = {
  Home: <HomeContent />,
  Projects: <ProjectsContent />,
  Publications: <PublicationsContent />,
  CV: <CVContent />,
};

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Publications", href: "#" },
  { label: "CV", href: "#" },
];

export function HomePage() {
  const [activeLink, setActiveLink] = useState("Home");
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <>
      <NavBar
        links={navLinks}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <Box
        bg={
          colorScheme === "dark"
            ? theme.other.colors.dark.contentBg
            : theme.other.colors.light.contentBg
        }
        style={{
          minHeight: "calc(100vh - 60px)",
          paddingTop: "8vh",
          paddingLeft: "calc(12vw + var(--mantine-spacing-md))",
        }}
      >
        {contentMap[activeLink]}
      </Box>
    </>
  );
}
