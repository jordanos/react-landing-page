import React from 'react';
import AboutUs from '../AboutUs';
import ContactUs from '../ContactUs';
import Intro from '../Intro';
import Services from '../Services';
import Testimonials from '../Testimonials';
import WhyUs from '../WhyUs';
import { StyledMain } from './Styles';

const Main = () => {
  return (
    <StyledMain>
      <Intro />
      <AboutUs />
      <Services />
      <WhyUs />
      <Testimonials />
      <ContactUs />
    </StyledMain>
  );
};

export default Main;
