import React from 'react';
import styled from 'styled-components';
import HomeSVG from '$application/assets/home.svg';

export const Home = () => {
  return (
    <Div>
      <HomeSVG />
    </Div>
  );
};
const Div = styled.div`
  width: 1560px;
  height: 704px;
`;

export default Home;
