import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { RootPage } from './RootPage';
import { theme } from './config/theme';

export default function App() {
  return (
    <MantineProvider
      theme={{
        ...theme,
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <RootPage />
    </MantineProvider>
  );
}
