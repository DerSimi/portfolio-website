import { createTheme } from '@mantine/core';

export const theme = createTheme({
  other: {
    colors: {
      // General accent color, used for institution, highlighting, ...
      accent: '#39D7C9',

      // Light Mode
      light: {
        // Used for general text
        normalText: '#656168',

        // Color of the context box
        contentBg: '#F9FAFB',

        // Nav bar specific
        navBg: '#FFFFFF',
        drawerText: '#6C686F',
        hoverText: '#111827',
      },

      // Dark Mode
      dark: {
        normalText: '#828282',

        // Color of the context box
        contentBg: '#1A202C',

        // Nav bar specific
        navBg: '#2D3748',
        drawerText: '#6C686F',
        hoverText: '#C8C8C8',
      },
    },
  },
});
