import styled from 'styled-components';
// import BackgroundSVG from '$application/assets/icons/background.svg';
import Header from './Layout/Header';

export const Layout = (props) => {
  return (
    <Wrapper>
      <StyledHeader />
      {/* <Background /> */}
      <Container>{props.children}</Container>
    </Wrapper>
  );
};

// const Background = styled(BackgroundSVG)`
//   position: absolute;
//   width: 807px;
//   box-sizing: content-box;
//   /* height: 900px; */
// `;
const StyledHeader = styled(Header)``;

const Container = styled.div``;

const Wrapper = styled.div`
  background-color: black;
  height: 100%;
  width: 1440px;
  margin: 0 auto;
  ${({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  })}
`;

export default Layout;
