import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import './fonts';

export const GlobalStyle = createGlobalStyle`
${normalize}

*{
  box-sizing:border-box;
  font-family:'Montserrat';
}

html{
  background:#000;
}
`;
