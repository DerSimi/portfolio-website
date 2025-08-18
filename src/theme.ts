import { createTheme } from '@mantine/core';

export const theme = createTheme({
  other: {
    colors: {
      // General accent color, used for institution, highlighting, ...
      accent: '#39D7C9',

      // Light Mode
      light: {
        // Color of the content space
        contentBg: '#F9FAFB',
        // Color of boxes (Navbar, Cards)
        boxBg: '#FFFFFF',
      },

      // Dark Mode
      dark: {
        // Color of the content space
        contentBg: '#1A202C',
        // Color of boxes (Navbar, Cards)
        boxBg: '#2D3748',
      },
    },
  },
});
