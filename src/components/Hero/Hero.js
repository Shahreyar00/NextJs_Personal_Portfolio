import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hey there, Shahreyar this side. I am a full stack web developer and ui/ux designer. I will help you to convert your ideas into design and then into fully functional Web App or Website. I am a quick learner too and can learn new frameworks if i find the project intriguing.
        </SectionText>
        <Button onClick={props.handleClick}>SHAHREYAR ARIF</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;