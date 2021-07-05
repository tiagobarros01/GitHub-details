import { theme, extendTheme, ChakraTheme } from '@chakra-ui/react';

const dark: ChakraTheme = {
  ...theme,

  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'JetBrains Mono, monospace',
  },

  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px',
  },
  fontSizes: {
    ...theme.fontSizes,
  },

  colors: {
    ...theme.colors,

    purple: {
      ...theme.colors.purple,
      500: '#8257E5',
    },
    gray: {
      ...theme.colors.gray,

      300: '#e1e1e6',
      600: '#29292e',
      700: '#202024',
      800: '#121214',
    },
  },
};

export default extendTheme(dark);
