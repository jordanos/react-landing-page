import React from 'react';
import IntroImage from 'shared/assets/img/IntroImage';
import {
  MainDisc,
  MainSectionWrapper,
  MainSub,
  MainTitle,
  SubSectionWrapper,
} from '../Main/Styles';

const AboutUs = () => {
  return (
    <>
      <MainSub>
        <MainTitle
          style={{
            color: '#283d50',
          }}>
          About Us
        </MainTitle>
        <MainDisc>
          Rica Technology can MainDiscut together full teams of engineers,
          developers, and other experts to complete a project. Our main goal is
          to provide cutting-edge solutions that will benefit a company&apos
          future operations.
        </MainDisc>
      </MainSub>
      <MainSectionWrapper>
        <SubSectionWrapper>
          Rica Technology is a technology company based in Addis Ababa,
          Ethiopia. Software technology design, software adaptations, software
          product development, and digital marketing are among Rica
          Technologies&apos primary services. We provide a variety of services,
          including website development, software design, mobile application
          development, graphic design, and digital media marketing.
          <div>
            We Design To meet the Client&aposs needs, we define the system&aposs
            architecture, product design, modules, interfaces, and data. The
            applicability of systems theory to product development might be
            observed in the system design team.
          </div>
          <div>
            We Develope We define software application or program testing and
            implementation. Internal creation of bespoke systems and database
            systems are among the services we provide.
          </div>
          <div>
            We Support Our support agents are in charge of addressing system
            applications and network difficulties, as well as completing
            technical configuration and infrastructure upgrades.
          </div>
        </SubSectionWrapper>
        <SubSectionWrapper>
          <IntroImage />
        </SubSectionWrapper>
      </MainSectionWrapper>
    </>
  );
};

export default AboutUs;
