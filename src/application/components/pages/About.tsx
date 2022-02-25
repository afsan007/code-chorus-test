import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const config = [
  { label: 'name', value: 'sajjad hadafi' },
  { label: 'birthday', value: 'june 27, 1996' },
  { label: 'mail', value: 'Af.hadafi@gmail.com' },
  { label: 'phone', value: '0933 925 3240' },
  { label: 'address', value: 'Augusta, 1340 Riverside Drive' },
];
export const About = () => {
  return (
    <Div>
      <ImageBox />
      <InfoBox>
        {config.map((conf, idx) => (
          <Content key={idx}>
            <Label>{conf.label}</Label>
            <Value>{conf.value}</Value>
            {idx + 1 !== config.length ? <Hr /> : undefined}
          </Content>
        ))}
      </InfoBox>
      <ContentWrapper>
        <AboutMe>About Me</AboutMe>
        <HeadText>World leading UI/UX designer</HeadText>
        <SubText>A passionate UI/UX Designer and Web Developer based In NYC, USA</SubText>
        <Description>
          Hi! My name is Mary Jane. I am UI/UX designer, and I&rsquo;m very passionate and
          dedicated to my work. With 20 years experience as a professional graphic
          designer, I have acquired the skills and knowledge necessary to make your
          project a success.
        </Description>
        <StyledButton disableElevation>DOWNLOAD CV</StyledButton>
      </ContentWrapper>
    </Div>
  );
};

const Content = styled.div`
  margin-bottom: 35px;
`;
const Label = styled.div`
  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  line-height: 105.67%;
  display: flex;
  align-items: center;
  letter-spacing: 0.015em;
  color: #c8c4c4;
`;
const Value = styled.div`
  margin-top: 8px;
  font-family: Poppins;
  font-weight: bold;
  font-size: 16px;
  line-height: 105.67%;
  display: flex;
  align-items: center;
  letter-spacing: 0.015em;
  color: #ffffff;
`;
const Hr = styled.div`
  border: 1px dashed #fff;
  width: 71%;
  margin-top: 31px;
`;
const StyledButton = styled(Button)`
  margin-top: 102px;
  background: linear-gradient(106.64deg, #a20aff 11.22%, #c025da 104.36%);
  border-radius: 12px;
  width: 295px;
  margin-bottom: 32px;
  height: 60px;
  font-family: Ramabhadra;
  font-size: 23px;
  line-height: 105.67%;
  display: flex;
  align-items: center;
  letter-spacing: 0.015em;
  color: #ffffff;
`;
const Description = styled.div`
  font-family: Poppins;
  font-size: 20px;
  line-height: 31px;
  letter-spacing: 0.015em;
  color: #afacac;
`;
const SubText = styled.div`
  font-family: Poppins;
  font-weight: 500;
  font-size: 25px;
  line-height: 101.7%;
  letter-spacing: 0.015em;
  color: #dedede;
  margin-bottom: 27px;
`;
const HeadText = styled.div`
  font-family: Poppins;
  font-weight: bold;
  font-size: 40px;
  line-height: 105.67%;
  width: 314px;
  letter-spacing: 0.015em;
  color: #ffffff;
  margin-bottom: 27px;
`;
const Div = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  width: 502px;
  margin-left: 91px;
  margin-top: 90px;
`;

const ImageBox = styled.div`
  width: 373px;
  height: 461px;
  background: #c4c4c4;
  border-radius: 24px;
  margin-top: 98px;
  margin-left: 97px;
`;

const InfoBox = styled.div`
  width: 303px;
  height: 573px;
  background: linear-gradient(162.63deg, #a20aff 0%, #c025da 123.52%);
  border-radius: 24px 24px 0px 0px;
  margin-left: -75px;
  margin-top: 161px;
  padding: 25px 15px 37px 53px;
`;

const AboutMe = styled.div`
  font-size: 25px;
  font-family: Ramabhadra;
  margin-bottom: 49px;
  line-height: 105.67%;
  display: flex;
  align-items: center;
  letter-spacing: 0.015em;
  color: #ffd814;
`;
export default About;
