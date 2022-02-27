import { showMenuAtom } from '$application/components/templates/store';
import { useAtomValue } from 'jotai';
import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = () => {
  const showMenu = useAtomValue(showMenuAtom);

  const Global = createGlobalStyle`
  ${normalize}
  *{
    box-sizing:border-box;
    font-family:'Montserrat';
  }

  html{
    background:#000;
    ${({ theme }) => theme.breakpoints.down('sm')} {
      ${() =>
        showMenu &&
        css`
          background: rgba(1, 2, 20, 0.9);
        `}
      }
  }
  `;

  return <Global />;
};
