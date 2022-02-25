import styled from 'styled-components';
import Header from './Layout/Header';

export const Layout = (props) => {
  return (
    <Wrapper>
      <StyledHeader />
      <Container>{props.children}</Container>
    </Wrapper>
  );
};

const StyledHeader = styled(Header)`
  height: 73px;
  && {
    margin-top: 68px;
    margin-bottom: 20px;
  }
`;

const Container = styled.div`
  background: #3a3c41;
  height: 100%;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #303030;
  width: 100%;
  max-width: 1920px;
  padding-bottom: 160px;
  & > div {
    width: 1560px;
    margin: 0 auto;
  }
`;

export default Layout;
