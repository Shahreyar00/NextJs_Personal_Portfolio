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
          Hi, I am Shahreyar Arif.
          I am a student, full-stack web developer and a UI/UX designer. I can make you a fully functional website or web app for your personal use or your business. I can also build some Deeplearning computer vision projects using Tensorflow and OpenCV.
        </SectionText>
        <Button onClick={props.handleClick}>SHAHREYAR ARIF</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;