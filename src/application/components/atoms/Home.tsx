import React from 'react';
import MessageSVG from '$application/assets/icons/message.svg';
import MsgSVG from '$application/assets/icons/msg.svg';

import styled, { useTheme } from 'styled-components';
import { useMediaQuery } from '@mui/material';
import { showMenuAtom } from '../templates/store';
import { useAtomValue } from 'jotai';

export const Home = () => {
  const showMenu = useAtomValue(showMenuAtom);
  const theme = useTheme();
  const isInLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

  if (showMenu) return null;

  return (
    <Container>
      {isInLargeScreen ? <MessageIcon /> : <MsgIcon />}
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
  ${({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      width: '260px',
      textAlign: 'center',
      marginTop: '28px',
    },
  })}
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 68px;
  line-height: 80px;
  width: 384px;
  color: #fff;
  margin-top: 73px;
  ${({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      fontSize: '44px',
      lineHeight: '52px',
      textAlign: 'center',
      width: '190px',
    },
  })}
`;

const Container = styled.div`
  padding-top: 194px;
  padding-left: 222px;
  ${({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      padding: 'unset',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  })}
`;
const MsgIcon = styled(MsgSVG)`
  width: 120px;
  height: 120px;
  margin-top: 148px;
  display: flex;
`;

const MessageIcon = styled(MessageSVG)`
  width: 180px;
  height: 180px;
  padding-left: 15px;
  box-sizing: content-box;
  ${({ theme }) => ({
    [theme.breakpoints.down('sm')]: {},
  })}
`;

export default Home;
