import React from 'react';
import RicaIcon from 'shared/assets/icons/RicaIcon';
import { ShadowCard } from 'shared/components/Card';
import { colors } from 'shared/utils/Styles';
import {
  MainDisc,
  MainSectionWrapper,
  MainSub,
  MainTitle,
} from '../Main/Styles';

const WhyUs = () => {
  return (
    <>
      <MainSub>
        <MainTitle
          style={{
            color: colors.textDarkest,
            fontSize: '2.5rem',
          }}>
          Why choose us?
        </MainTitle>
        <MainDisc
          style={{
            color: colors.textDarkest,
            textAlign: 'center',
            fontSize: '1.2rem',
          }}>
          We have highly skilled engineers with extensive technical knowledge
          and experience in using the latest software standards, tools,
          platforms, frameworks, and technologies, and we invest continuously in
          training and education so that we can respond to any new technology
          challenges and demands from our clients.
        </MainDisc>
      </MainSub>
      <MainSectionWrapper>
        <ShadowCard
          icon={<RicaIcon />}
          title="Skill"
          disc="We have highly trained engineers with in-depth technical knowledge and hands-on expertise with the most up-to-date software standards. "
        />
        <ShadowCard
          icon={<RicaIcon />}
          title="Budget"
          disc="We bring a wealth of experience to bear on delivering solutions that match the needs, objectives, and budgets of our clients. We achieve this by placing our customers at the center of everything we do.  "
        />
        <ShadowCard
          icon={<RicaIcon />}
          title="Time Bound"
          disc="Despite the tight deadline, we prioritize work in sprints, manage blocks with daily stand-ups and agile approach, and do retrospectives.  "
        />
      </MainSectionWrapper>
    </>
  );
};

export default WhyUs;
