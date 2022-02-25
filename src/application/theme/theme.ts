import { ThemeOptions } from '@mui/material';

export const theme: ThemeOptions = {
  typography: {
    fontFamily: 'Montserrat',
  },
  breakpoints: {
    values: {
      xl: 2000,
      lg: 1920,
      md: 1440,
      sm: 414,
      xs: 0,
    },
  },
  palette: {
    primary: {
      main: '#1b62f8',
      dark: '#0a4fde',
      '100': '#558afa',
      '200': '#8db0fb',
      light: '#c7d8fd',
    },
    secondary: {
      main: '#04bfbf',
      dark: '#06a1a1',
      '100': '#43cfcf',
      '200': '#81dfdf',
      light: '#c0efef',
    },
    success: {
      main: '#1ab297',
      dark: '#0a967d',
      '100': '#53c5b0',
      '200': '#8dd9cb',
      light: '#c6ece5',
    },
    info: {
      main: '#03b9ff',
      dark: '#00a5e5',
      '100': '#42cbff',
      '200': '#81dcff',
      light: '#c0eeff',
    },
    error: {
      main: '#f36d53',
      dark: '#dc553b',
      '100': '#f6927e',
      '200': '#f8b5a8',
      light: '#fcdad4',
    },
    warning: {
      main: '#f5d650',
      dark: '#ecc622',
      '100': '#f7e07b',
      '200': '#faeaa7',
      light: '#fcf4d4',
    },
    grey: {
      '100': '#000',
      '200': '#738297',
      '300': '#a1b1c7',
      '400': '#c1cddd',
      '500': '#d5dfed',
      '600': '#e3ebf7',
      '700': '#eff6ff',
      '800': '#f7fafe',
      '900': '#fff',
    },
  },
};
