import { createTheme } from '@mantine/core';

// Here you can customize the Website theme,
// currently it is online possible to change the box colors in light and dark mode, as well as the NavBar color

export const theme = createTheme({
  other: {
    colors: {
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
