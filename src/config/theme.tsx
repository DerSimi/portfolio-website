import { createTheme } from '@mantine/core';

// Here you can customize the Website theme,
// currently it is online possible to change the box colors in light and dark mode, as well as the NavBar color

export const theme = createTheme({
  other: {
    colors: {
      accentColor: '#008080',

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
        contentBg: '#121212',
        // Color of boxes (Navbar, Cards)
        boxBg: '#1e1e1e',
      },
    },
  },
});
