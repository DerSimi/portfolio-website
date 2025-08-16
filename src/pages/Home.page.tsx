import { useState } from "react";
import { Box } from "@mantine/core";
import { NavBar } from "@/components /NavBar";

// You can move these into their own files in a 'views' or 'sections' folder later
const HomeContent = () => <div>Home Page Content</div>;
const ProjectsContent = () => <div>Projects Page Content</div>;
const PublicationsContent = () => <div>Publications Page Content</div>;
const CVContent = () => <div>CV Page Content</div>;

const contentMap = {
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

  return (
    <>
      <NavBar
        links={navLinks}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <Box bg="#F9FAFB" style={{ minHeight: "calc(100vh - 60px)" }}>
        {contentMap[activeLink]}
      </Box>
    </>
  );
}
