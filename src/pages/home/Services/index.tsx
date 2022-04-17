import React from 'react';
import { colors } from 'shared/utils/Styles';
import { MainDisc, MainSub, MainTitle } from '../Main/Styles';

const Services = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient( 21deg, #8639b9 -76%, #682696 -76%, #692594 -76%, #93246d -62%, #b6234c -48%, #d12233 -34%, #e42221 -19%, #f02216 -4%, #f42213 11%, #f8b04a 98% )',
      }}>
      <MainSub>
        <MainTitle
          style={{
            color: colors.textLightest,
          }}>
          Services
        </MainTitle>
        <MainDisc
          style={{
            color: colors.textLightest,
          }}>
          Rica Technology can MainDiscut together full teams of engineers,
          developers, and other experts to complete a project. Our main goal is
          to provide cutting-edge solutions that will benefit a company&apos
          future operations.
        </MainDisc>
      </MainSub>
    </div>
  );
};

export default Services;
