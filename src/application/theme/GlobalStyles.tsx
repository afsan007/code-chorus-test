import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${normalize}

*{
  box-sizing:border-box;
  font-family:'Montserrat';
}

html{
  background:#000;

   ${({ theme }) => theme.breakpoints.down('sm')} {
     background:rgba(1, 2, 20, 0.9)
    }
}
`;
