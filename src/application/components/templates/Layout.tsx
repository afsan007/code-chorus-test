import { useAtomValue } from 'jotai';
import styled, { css } from 'styled-components';
import Header from './Layout/Header';
import { showMenuAtom } from './store';

export const Layout = (props) => {
  const showMenu = useAtomValue(showMenuAtom);
  return (
    <Wrapper showMenu={showMenu}>
      <Header />
      {props.children}
    </Wrapper>
  );
};
const Wrapper = styled.div<{ showMenu: boolean }>`
  height: 100%;
  width: 1440px;
  margin: 0 auto;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100%;
    ${({ showMenu }) =>
      !showMenu &&
      css`
        :before {
          content: '';
          position: absolute;
          top: 0;
          width: 100%;
          height: 720px;
          background-image: url('/mobileBackground.svg');
          background-repeat: no-repeat;
        }
      `}
  }
  ${({ theme }) => theme.breakpoints.up('sm')} {
    :after {
      content: '';
      background-image: url('/background.svg');
      position: absolute;
      width: 65vw;
      height: 1000px;
      z-index: -1;
      bottom: 0;
      background-repeat: no-repeat;
    }
  }
`;

export default Layout;
