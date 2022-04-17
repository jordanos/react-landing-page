import React from 'react';
import IntroImage from 'shared/assets/img/IntroImage';
import StyledButton from 'shared/components/Button/Styles';
import { colors } from 'shared/utils/Styles';
import { MainSectionWrapper, SubSectionWrapper } from '../Main/Styles';
import background from './bg-gradient.png';

const Intro = () => {
  return (
    <MainSectionWrapper
      pd="6em"
      style={{ background: `url(${background}) center bottom no-repeat` }}>
      <SubSectionWrapper>
        <div
          style={{
            fontFamily: "'AlongSansBolder', sans-serif",
            fontSize: '3rem',
            color: colors.textLightest,
            maxWidth: '80%',
          }}>
          Rica Technology{' '}
          <span
            style={{
              color: colors.textSecondary,
            }}>
            Committed for
          </span>{' '}
          a better Future
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '19em',
            marginTop: '2em',
          }}>
          <StyledButton bg={colors.textSecondary}>Get Started</StyledButton>
          <StyledButton bg={colors.textSecondary} outline>
            Our Services
          </StyledButton>
        </div>
      </SubSectionWrapper>
      <SubSectionWrapper>
        <IntroImage />
      </SubSectionWrapper>
    </MainSectionWrapper>
  );
};

export default Intro;
