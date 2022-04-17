import React from 'react';
import AboutUs from '../AboutUs';
import ContactUs from '../ContactUs';
import Intro from '../Intro';
import Services from '../Services';
import WhyUs from '../WhyUs';
import { MainSectionWrapper, StyledMain } from './Styles';

const Main = () => {
  return (
    <StyledMain>
      <Intro />
      <AboutUs />
      <Services />
      <WhyUs />
      <MainSectionWrapper>Portofolio</MainSectionWrapper>
      <ContactUs />
    </StyledMain>
  );
};

export default Main;
