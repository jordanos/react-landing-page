/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import AnchorNav from 'react-single-page-navigation';
import Nav from 'shared/components/Nav';
import Navs from 'shared/components/Nav/Navs';
import AboutUs from './AboutUs';
import ContactUS from './ContactUs';
import Footer from './Footer';
import Intro from './Intro';
import { StyledMain } from './Main/Styles';
import Services from './Services';
import Sidebar from './Sidebar';
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
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <AnchorNav elements={elements}>
      {({ refs, activeElement, goTo }) => (
        <>
          <Nav
            goTo={goTo}
            activeElement={activeElement}
            toggleSidebar={toggleSidebar}
          />
          <Sidebar active={sidebar} toggleSidebar={toggleSidebar}>
            <Navs
              goTo={goTo}
              activeElement={activeElement}
              toggle={toggleSidebar}
            />
          </Sidebar>
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
