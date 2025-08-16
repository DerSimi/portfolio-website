import { useState, ReactElement } from "react";
import { Box, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { NavBar } from "@/components /NavBar/NavBar";
import { Home } from "@/pages/Home";
import { CV } from "./pages/CV";
import { PublicationData, Publications } from "./pages/Publications";

const dummyPublications: PublicationData[] = [
  {
    imageUrl: "",
    imageAlt: "EXAM",
    date: "2023-01-01",
    citation:
      "Doe, J. (2023). Example Publication Title. *Journal of Examples*.",
    links: [
      { href: "https://example.com/pdf1", label: "PDF" },
      { href: "https://example.com/code1", label: "Code" },
    ],
  },
  {
    imageUrl: "",
    imageAlt: "EXAM",
    date: "2023-01-01",
    citation:
      "Smith, A., & Lee, B. (2022). Another Study on Examples. *International Example Review*.",
    links: [
      { href: "https://example.com/pdf2", label: "PDF" },
      { href: "https://example.com/supp2", label: "Supplement" },
    ],
  },
  {
    imageUrl: "",
    imageAlt: "EXAM",
    date: "2021-01-01",
    citation:
      "Garcia, M. (2021). Examples in Practice: A Survey. *Proceedings of ExampleConf*.",
    links: [
      { href: "https://example.com/pdf3", label: "PDF" },
      { href: "https://example.com/code3", label: "Code" },
    ],
  },
  {
    imageUrl: "",
    imageAlt: "EXAM",
    date: "2020-01-01",
    citation:
      "Khan, R., & O'Neil, P. (2020). Case Studies of Examples. *Example Studies Quarterly*.",
    links: [
      { href: "https://example.com/pdf4", label: "PDF" },
      { href: "https://example.com/data4", label: "Data" },
    ],
  },
  {
    imageUrl: "",
    imageAlt: "EXAM",
    date: "2021-01-01",
    citation:
      "Zhang, Y. (2019). Example Algorithms and Applications. *Journal of Applied Examples*.",
    links: [
      { href: "https://example.com/pdf5", label: "PDF" },
      { href: "https://example.com/code5", label: "Code" },
    ],
  },
  {
    imageUrl: "",
    imageAlt: "EXAM",
    date: "2018-01-01",
    citation:
      "Williams, L., & Patel, S. (2018). Experimental Results on Examples. *Example Letters*.",
    links: [
      { href: "https://example.com/pdf6", label: "PDF" },
      { href: "https://example.com/doi6", label: "DOI" },
    ],
  },
  {
    imageUrl: "",
    imageAlt: "EXAM",
    date: "2017-01-01",
    citation:
      "Nakamura, H. (2017). Theoretical Foundations of Examples. *Theoretical Example Journal*.",
    links: [
      { href: "https://example.com/pdf7", label: "PDF" },
      { href: "https://example.com/code7", label: "Code" },
    ],
  },
  {
    imageUrl: "",
    imageAlt: "EXAM",
    date: "2016-01-01",
    citation:
      "Müller, F., & Rossi, G. (2016). Examples in Machine Learning. *ML Example Review*.",
    links: [
      { href: "https://example.com/pdf8", label: "PDF" },
      { href: "https://example.com/supp8", label: "Supplement" },
    ],
  },
  {
    imageUrl: "",
    imageAlt: "EXAM",
    date: "2015-01-01",
    citation:
      "Brown, T. (2015). A Comprehensive Guide to Examples. *Examples Monthly*.",
    links: [
      { href: "https://example.com/pdf9", label: "PDF" },
      { href: "https://example.com/code9", label: "Code" },
    ],
  },
  {
    imageUrl: "",
    imageAlt: "EXAM",
    date: "2014-01-01",
    citation:
      "Singh, V., & Kim, J. (2014). Practical Example Methodologies. *Applied Examples*.",
    links: [
      { href: "https://example.com/pdf10", label: "PDF" },
      { href: "https://example.com/data10", label: "Data" },
    ],
  },
  {
    imageUrl: "",
    imageAlt: "EXAM",
    date: "2013-01-01",
    citation:
      "Lopez, R. (2013). Historical Perspectives on Examples. *Example History Review*.",
    links: [
      { href: "https://example.com/pdf11", label: "PDF" },
      { href: "https://example.com/code11", label: "Code" },
    ],
  },
];

// You can move these into their own files in a 'views' or 'sections' folder later
const HomeContent = () => <Home />;
const ProjectsContent = () => <div>Projects Page Content</div>;
const PublicationsContent = () => <Publications publications={dummyPublications} />;
const CVContent = () => <CV />;

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

export function RootPage() {
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
          minHeight: "100vh",
          paddingTop: "60px", // Abstand für die fixe Navbar
          paddingLeft: "calc(5vw + var(--mantine-spacing-md))",
        }}
      >
        {/* Optional: Innenabstand für Content */}
        <div style={{ paddingTop: "8vh" }}>
          {contentMap[activeLink]}
        </div>
      </Box>
    </>
  );
}
