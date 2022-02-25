import '$application/theme/fonts';
import { useEffect, useMemo } from 'react';

import {
  StylisPlugin,
  StyleSheetManager as SCStyleSheetManager,
  ThemeProvider as SCThemeProvider,
} from 'styled-components';
import stylisRTLPlugin from 'stylis-plugin-rtl';
import { createTheme } from '@mui/material/styles';
import { ReactNode } from 'react';
import { theme as themeBase } from './theme';

const theme = createTheme(themeBase);

interface ThemeProviderProps {
  fontFamily?: string;
  direction?: 'rtl' | 'ltr';
  children: ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { fontFamily = 'Source Sans Pro', direction = 'ltr' } = props;

  useEffect(() => {
    document.dir = direction;
    document.body.style.fontFamily = fontFamily;
  }, [direction, fontFamily]);

  const appTheme = useMemo(() => ({ ...theme, direction }), [direction]);

  const stylePlugins = useMemo(
    () =>
      direction === 'rtl' ? [stylisRTLPlugin as unknown as StylisPlugin] : undefined,
    [direction],
  );

  return (
    <SCStyleSheetManager stylisPlugins={stylePlugins}>
      <SCThemeProvider theme={appTheme}>{props.children}</SCThemeProvider>
    </SCStyleSheetManager>
  );
};
