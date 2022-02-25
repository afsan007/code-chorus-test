import { Theme as MUITheme } from '@mui/material/styles';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends MUITheme {}
}
