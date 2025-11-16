import { ReactElement, useEffect, useState } from 'react';
import { Box, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { NavBar } from '@/components/navbar/NavBar';
import { Home } from '@/pages/Home';
import { Footer } from './components/footer/Footer';
import { config as htmlTitle } from './config/html_title';
import { projects as projectsConfig } from './config/pages/projects';
import { publications as publicationsConfig } from './config/pages/publications';
import { navbar } from './config/translation';
import { CV } from './pages/CV';
import { Imprint } from './pages/Imprint';
import { Projects } from './pages/Projects';
import { Publications } from './pages/Publications';

const HomeContent = () => <Home />;
const ProjectsContent = () => <Projects />;
const PublicationsContent = () => <Publications />;
const CVContent = () => <CV />;

const contentMap: Record<string, ReactElement> = {
  Home: <HomeContent />,
  Projects: <ProjectsContent />,
  Publications: <PublicationsContent />,
  CV: <CVContent />,
};

const hasPublications = (publicationsConfig.publications ?? []).length > 0;
const hasProjects = (projectsConfig.projects ?? []).length > 0;

const navLinks = [
  { label: navbar.home, href: '#' },
  ...(hasProjects ? [{ label: navbar.projects, href: '#' }] : []),
  ...(hasPublications ? [{ label: navbar.publications, href: '#' }] : []),
  { label: navbar.cv, href: '#' },
];

export function RootPage() {
  const [isImprint, setImprint] = useState(false);
  // Here we scan the hash for the right page string and insert it
  const [activeLink, setActiveLink] = useState(navbar.home);
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  useEffect(() => {
    document.title = htmlTitle.title;

    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;

    if (!link) {
      link = document.createElement('link') as HTMLLinkElement;
      link.rel = 'icon';
      document.head.appendChild(link);
    }

    link.href = htmlTitle.icon;
  }, []);

  // This enables a better navigation via hash
  useEffect(() => {
    function handleHashChange() {
      const hash = window.location.hash.slice(1).toLowerCase();

      if (hash === 'imprint') {
        window.location.hash = 'imprint';
        setImprint(true);
        return;
      } else setImprint(false);

      const found = navLinks.find((link) => link.label.toLowerCase() === hash);
      if (found) {
        window.location.hash = found.label.toLowerCase();

        if (found.label === navbar.home) window.location.hash = '';

        setActiveLink(found.label);
      } else {
        window.location.hash = '';
        setActiveLink(navbar.home);
      }
    }

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <NavBar
        links={navLinks}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        isImprint={isImprint}
        setImprint={setImprint}
      />
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
        <div style={{ flex: 1, paddingTop: '8vh' }}>
          {isImprint ? <Imprint /> : contentMap[activeLink]}
        </div>

        <Footer isImprint={isImprint} setImprint={setImprint} />
      </Box>
    </>
  );
}
