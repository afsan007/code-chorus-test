import '$application/theme/fonts';

import {
  StyleSheetManager as SCStyleSheetManager,
  ThemeProvider as SCThemeProvider,
} from 'styled-components';
import { createTheme } from '@mui/material/styles';
import { ReactNode } from 'react';
import { theme as themeBase } from './theme';

const theme = createTheme(themeBase);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  return (
    <SCStyleSheetManager>
      <SCThemeProvider theme={theme}>{props.children}</SCThemeProvider>
    </SCStyleSheetManager>
  );
};
