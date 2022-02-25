import Button from '@mui/material/Button';
import styled from 'styled-components';

export const Sample = () => {
  return (
    <>
      <Div>This is a sample component</Div>
      <Button variant="contained">Sample Button</Button>
    </>
  );
};

const Div = styled.div`
  margin-bottom: 10px;
`;
