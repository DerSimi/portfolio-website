import { createTheme } from '@mantine/core';

export const theme = createTheme({
  other: {
    colors: {
      // General
      accent: '#39D7C9',

      // Light Mode
      light: {
        inactiveText: '#656168',
        hoverText: '#111827',
        contentBg: '#F9FAFB',
        drawerText: '#6C686F',
      },
      
      // Dark Mode
      dark: {
        inactiveText: '#A0AEC0',
        hoverText: '#E2E8F0',
        navBg: '#2D3748',
        contentBg: '#1A202C',
      }
      
    },
  },
});
