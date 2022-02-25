import React from 'react';
import MessageSVG from '$application/assets/icons/message.svg';
import styled from 'styled-components';

export const Home = () => {
  return (
    <Container>
      <MessageIcon />
      <Text>Request Invite</Text>
      <SubText>Thanks for reaching out, we will get back to you soon!</SubText>
    </Container>
  );
};

const SubText = styled.div`
  font-family: Readex Pro;
  font-weight: 200;
  font-size: 15px;
  line-height: 26px;
  color: #ffffff;
  margin-top: 14px;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 68px;
  line-height: 80px;
  width: 384px;
  color: #fff;
  margin-top: 73px;
`;

const Container = styled.div`
  padding-top: 194px;
  padding-left: 222px;
`;

const MessageIcon = styled(MessageSVG)`
  width: 180px;
  height: 180px;
  padding-left: 15px;
  box-sizing: content-box;
`;

export default Home;
