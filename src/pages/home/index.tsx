/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import AnchorNav from 'react-single-page-navigation';
import Nav from 'shared/components/Nav';
import AboutUs from './AboutUs';
import ContactUS from './ContactUs';
import Footer from './Footer';
import Intro from './Intro';
import { StyledMain } from './Main/Styles';
import Services from './Services';
import Testimonials from './Testimonials';
import WhyUs from './WhyUs';

// tslint:disable-next-line:no-submodule-imports

// NOTE don't style this way in the production apps

export const elements = {
  Intro: {},
  About: {},
  Services: {},
  Testimonials: {},
  Contact: {},
};

const Home = () => {
  return (
    <AnchorNav elements={elements}>
      {({ refs, activeElement, goTo }) => (
        <>
          <Nav goTo={goTo} activeElement={activeElement} />
          <div style={{ marginTop: '4em' }} />
          <StyledMain>
            <section ref={refs.Intro}>
              <Intro />
            </section>
            <section ref={refs.About}>
              <AboutUs />
            </section>
            <section ref={refs.Services}>
              <Services />
            </section>
            <section>
              <WhyUs />
            </section>
            <section ref={refs.Testimonials}>
              <Testimonials />
            </section>

            <section ref={refs.Contact}>
              <ContactUS />
            </section>
          </StyledMain>
          <Footer />
        </>
      )}
    </AnchorNav>
  );
};

export default Home;
