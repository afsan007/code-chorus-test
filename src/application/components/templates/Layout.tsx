import styled from 'styled-components';
import Header from './Layout/Header';

export const Layout = (props) => (
  <Wrapper>
    <Header />
    {props.children}
  </Wrapper>
);

const Wrapper = styled.div`
  height: 100%;
  width: 1440px;
  margin: 0 auto;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100%;
    :before {
      content: '';
      position: absolute;
      width: 100%;
      height: 361px;
      background-image: url('/mobileBackground.svg');
      background-repeat: no-repeat;
    }
  }
  ${({ theme }) => theme.breakpoints.up('sm')} {
    :after {
      content: '';
      background-image: url('/background.svg');
      position: absolute;
      width: 65vw;
      height: 85vh;
      z-index: 2;
      bottom: 1px;
      background-repeat: no-repeat;
    }
  }
`;

export default Layout;
