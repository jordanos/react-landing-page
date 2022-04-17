import React from 'react';
import AboutUs from '../AboutUs';
import Intro from '../Intro';
import Services from '../Services';
import { MainSectionWrapper, StyledMain } from './Styles';

const Main = () => {
  return (
    <StyledMain>
      <Intro />
      <AboutUs />
      <Services />
      <MainSectionWrapper>Portofolio</MainSectionWrapper>
      <MainSectionWrapper>Contact</MainSectionWrapper>
    </StyledMain>
  );
};

export default Main;
