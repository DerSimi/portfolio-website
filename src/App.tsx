import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { RootPage } from './RootPage';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <RootPage />
    </MantineProvider>
  );
}

