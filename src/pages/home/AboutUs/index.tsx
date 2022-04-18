import React from 'react';
import RicaIcon from 'shared/assets/icons/RicaIcon';
import AboutImage from 'shared/assets/img/AboutImage';
import AboutImage2 from 'shared/assets/img/AboutImage2';
import {
  StyledMainDisc,
  StyledMainSectionWrapper,
  StyledMainSub,
  StyledMainTitle,
  StyledSubSectionWrapper,
} from '../Main/Styles';
import AboutCard from './AboutCard';

const AboutUs = () => {
  return (
    <>
      <StyledMainSub>
        <StyledMainTitle
          style={{
            color: '#283d50',
          }}>
          About Us
        </StyledMainTitle>
        <StyledMainDisc style={{ padding: '0 2em' }}>
          Rica Technology can MainDiscut together full teams of engineers,
          developers, and other experts to complete a project. Our main goal is
          to provide cutting-edge solutions that will benefit a company&apos
          future operations.
        </StyledMainDisc>
      </StyledMainSub>
      <StyledMainSectionWrapper>
        <StyledSubSectionWrapper>
          <div style={{ lineHeight: '1.5em' }}>
            Rica Technology is a technology company based in Addis Ababa,
            Ethiopia. Software technology design, software adaptations, software
            product development, and digital marketing are among Rica
            Technologies&apos primary services. We provide a variety of
            services, including website development, software design, mobile
            application development, graphic design, and digital media
            marketing.
          </div>
          <AboutCard
            icon={<RicaIcon />}
            title="We Design"
            disc="To meet the Client&aposs needs, we define the system&aposs
            architecture, product design, modules, interfaces, and data. The
            applicability of systems theory to product development might be
            observed in the system design team."
          />

          <AboutCard
            icon={<RicaIcon />}
            title="We Develope"
            disc="We define software application or program testing and
            implementation. Internal creation of bespoke systems and database
            systems are among the services we provide."
          />
          <AboutCard
            icon={<RicaIcon />}
            title="We Support"
            disc="Our support agents are in charge of addressing system applications
            and network difficulties, as well as completing technical
            configuration and infrastructure upgrades."
          />
        </StyledSubSectionWrapper>
        <StyledSubSectionWrapper>
          <AboutImage />
        </StyledSubSectionWrapper>
      </StyledMainSectionWrapper>
      <StyledMainSectionWrapper>
        <StyledSubSectionWrapper>
          <AboutImage2 />
        </StyledSubSectionWrapper>
        <StyledSubSectionWrapper>
          <StyledMainTitle
            style={{
              color: '#283d50',
            }}>
            RicaTechs Specilization.
          </StyledMainTitle>
          <StyledMainDisc width="100%">
            We specialize in a variety of sectors where innovation, integration,
            and technology may assist drive long-term company improvement. More
            than ten companies from various industries have benefited from our
            Enterprise app development efforts, which have helped them achieve
            their business goals and saw major improvements in their operations.
          </StyledMainDisc>
        </StyledSubSectionWrapper>
      </StyledMainSectionWrapper>
    </>
  );
};

export default AboutUs;
