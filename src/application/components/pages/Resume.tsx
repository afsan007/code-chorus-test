import React from 'react';
import ArrowSVG from '$application/assets/icons/arrow.svg';
import styled from 'styled-components';

const cards = [
  {
    title: 'Web developer',
    subTitle: { source: 'University of Maine', duration: '2018 - running' },
    description:
      'Web Developers are build a website’s core structure using coding languages, while designers are more visually creative and user-focused.',
  },
  {
    title: 'Web developer',
    subTitle: { source: 'University of Maine', duration: '2018 - running' },
    description:
      'Web Developers are build a website’s core structure using coding languages, while designers are more visually creative and user-focused.',
  },
  {
    title: 'Web developer',
    subTitle: { source: 'University of Maine', duration: '2018 - running' },
    description:
      'Web Developers are build a website’s core structure using coding languages, while designers are more visually creative and user-focused.',
  },
];

const skills = ['React', 'Typescript', 'Kubernetes', 'Nodejs', 'Graphql'];

const Resume = () => {
  return (
    <Wrapper>
      <TitleText>resume</TitleText>
      <TopicText>Combination of Skill & Experience</TopicText>
      <Div>
        <Column>
          <ColumnHeaderText>Experience</ColumnHeaderText>
          <Cards>
            {cards.map((card, idx) => (
              <Card key={idx}>
                <CardTitle>{card.title}</CardTitle>
                <SubTitle>
                  <Source>{card.subTitle.source}</Source>
                  <DurationTime>{card.subTitle.duration}</DurationTime>
                </SubTitle>
                <Description>{card.description}</Description>
              </Card>
            ))}
          </Cards>
        </Column>
        <Column>
          <ColumnHeaderText>Skills</ColumnHeaderText>
          <SkillList>
            {skills.map((skill, idx) => (
              <div key={idx}>
                <ArrowIcon />
                <SkillName>{skill}</SkillName>
              </div>
            ))}
          </SkillList>
        </Column>
      </Div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 70px 230px 0 117px;
`;
const TitleText = styled.div`
  font-family: Ramabhadra;
  font-size: 38px;
  line-height: 105.67%;
  display: flex;
  align-items: center;
  letter-spacing: 0.075em;
  color: #ffd814;
  margin-bottom: 20px;
`;
const TopicText = styled.div`
  font-family: Poppins;
  font-weight: bold;
  font-size: 50px;
  display: flex;
  align-items: center;
  width: 450px;
  color: #ffffff;
  margin-bottom: 104px;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Column = styled.div``;
const ColumnHeaderText = styled.div`
  font-family: Roboto;
  font-weight: 900;
  font-size: 52px;
  line-height: 61px;
  color: #ffffff;
  margin-bottom: 63px;
`;
const Cards = styled.div`
  max-width: 664px;
`;

const Card = styled.div`
  margin-bottom: 75px;
`;

const CardTitle = styled.div`
  font-family: Poppins;
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
  color: #ffffff;
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Source = styled.div`
  font-family: Poppins;
  font-weight: 500;
  font-size: 25px;
  line-height: 37px;
  color: #dedede;
`;
const DurationTime = styled.div`
  font-family: Poppins;
  font-weight: 300;
  font-size: 27px;
  line-height: 40px;
  color: #ffd814;
`;
const Description = styled.div`
  font-family: Poppins;
  font-weight: 300;
  font-size: 22px;
  line-height: 33px;
  color: #afacac;
`;

const ArrowIcon = styled(ArrowSVG)`
  width: 14px;
  height: 14px;
  margin-right: 30px;
`;

const SkillList = styled.div``;
const SkillName = styled.span`
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  font-size: 25px;
  line-height: 37px;
  color: #dedede;
`;

export default Resume;
