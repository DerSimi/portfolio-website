import { ReactElement, useEffect, useState } from 'react';
import { Box, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { NavBar } from '@/components /navbar/NavBar';
import { Home } from '@/pages/Home';
import { Footer } from './components /footer/Footer';
import { websiteConfig } from './config';
import { CV } from './pages/CV';
import { Publications } from './pages/Publications';

const HomeContent = () => <Home />;
const ProjectsContent = () => <div>Projects Page Content</div>;
const PublicationsContent = () => <Publications />;
const CVContent = () => <CV />;

const contentMap: Record<string, ReactElement> = {
  Home: <HomeContent />,
  Projects: <ProjectsContent />,
  Publications: <PublicationsContent />,
  CV: <CVContent />,
};

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Projects', href: '#' },
  { label: 'Publications', href: '#' },
  { label: 'CV', href: '#' },
];

export function RootPage() {
  const [activeLink, setActiveLink] = useState('Home');
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  useEffect(() => {
    document.title = websiteConfig.title;

    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;

    if (!link) {
      link = document.createElement('link') as HTMLLinkElement;
      link.rel = 'icon';
      document.head.appendChild(link);
    }

    link.href = websiteConfig.icon;
  }, []);

  return (
    <>
      <NavBar links={navLinks} activeLink={activeLink} setActiveLink={setActiveLink} />
      <Box
        bg={
          colorScheme === 'dark'
            ? theme.other.colors.dark.contentBg
            : theme.other.colors.light.contentBg
        }
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '40px',
          paddingLeft: 'calc(8vw + var(--mantine-spacing-md))',
          paddingRight: 'calc(8vw + var(--mantine-spacing-md))',
        }}
      >
        {/* Optional: Innenabstand für Content */}
        <div style={{ flex: 1, paddingTop: '8vh' }}>{contentMap[activeLink]}</div>

        <Footer />
      </Box>
    </>
  );
}
