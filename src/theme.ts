import { createTheme } from '@mantine/core';

export const theme = createTheme({
  other: {
    colors: {
      // General
      accent: '#39D7C9',

      // Light Mode
      inactiveTextLight: '#656168',
      hoverTextLight: '#111827',
      contentBgLight: '#F9FAFB',
      drawerTextLight: '#6C686F',

      // Dark Mode
      inactiveTextDark: '#A0AEC0',
      hoverTextDark: '#E2E8F0',
      navBgDark: '#2D3748',
      contentBgDark: '#1A202C',
    },
  },
});
