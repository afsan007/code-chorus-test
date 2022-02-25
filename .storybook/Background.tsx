import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  noPadding: boolean;
  children: ReactNode;
}

export const Background = (props: Props) => {
  return <Container noPadding={props.noPadding}>{props.children}</Container>;
};

const Container = styled.div<{ noPadding: boolean }>`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  padding: ${({ noPadding }) => (noPadding ? 'none' : '1rem')};
  background-color: transparent;
`;
