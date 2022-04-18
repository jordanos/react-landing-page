import React from 'react';
import Card from 'shared/components/Card';
import { colors } from 'shared/utils/Styles';
import {
  StyledMainDisc,
  StyledMainSectionWrapper,
  StyledMainSub,
  StyledMainTitle,
  StyledSubSectionWrapper,
} from '../Main/Styles';

const Services = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient( 21deg, #8639b9 -76%, #682696 -76%, #692594 -76%, #93246d -62%, #b6234c -48%, #d12233 -34%, #e42221 -19%, #f02216 -4%, #f42213 11%, #f8b04a 98% )',
      }}>
      <StyledMainSub>
        <StyledMainTitle
          style={{
            color: colors.textLightest,
          }}>
          Services
        </StyledMainTitle>
        <StyledMainDisc
          style={{
            color: colors.textLightest,
          }}>
          Rica Technologies can MainDiscut together full teams of engineers,
          developers, and other experts to complete a project. Our main goal is
          to provide cutting-edge solutions that will benefit a company&apos
          future operations.
        </StyledMainDisc>
      </StyledMainSub>
      <StyledMainSectionWrapper>
        <StyledSubSectionWrapper>
          <Card
            title="Enterprise Software Development"
            disc="Our enterprise software takes a multi-disciplinary approach, with features such as CRM (Customer Relationship Management), HRM (Human Resource Management), accounting, Inventory Managment System, Sales(POS) and more. "
          />
        </StyledSubSectionWrapper>
        <StyledSubSectionWrapper>
          <Card
            title="Mobile App Development"
            disc="Our software professionals don’t simply produce a basic mobile application, they implement clean, responsive, and user-friendly designs so your user comes to your app not only because it’s useful but also because they love the feeling of interacting with it. "
          />
        </StyledSubSectionWrapper>
      </StyledMainSectionWrapper>
      <StyledMainSectionWrapper pd="0">
        <StyledSubSectionWrapper>
          <Card
            title="Enterprise Software Development"
            disc="Our enterprise software takes a multi-disciplinary approach, with features such as CRM (Customer Relationship Management), HRM (Human Resource Management), accounting, Inventory Managment System, Sales(POS) and more. "
          />
        </StyledSubSectionWrapper>
        <StyledSubSectionWrapper>
          <Card
            title="Enterprise Software Development"
            disc="Our enterprise software takes a multi-disciplinary approach, with features such as CRM (Customer Relationship Management), HRM (Human Resource Management), accounting, Inventory Managment System, Sales(POS) and more. "
          />
        </StyledSubSectionWrapper>
      </StyledMainSectionWrapper>
      <StyledMainSectionWrapper>
        <StyledSubSectionWrapper>
          <Card
            title="Enterprise Software Development"
            disc="Our enterprise software takes a multi-disciplinary approach, with features such as CRM (Customer Relationship Management), HRM (Human Resource Management), accounting, Inventory Managment System, Sales(POS) and more. "
          />
        </StyledSubSectionWrapper>
        <StyledSubSectionWrapper>
          <Card
            title="Enterprise Software Development"
            disc="Our enterprise software takes a multi-disciplinary approach, with features such as CRM (Customer Relationship Management), HRM (Human Resource Management), accounting, Inventory Managment System, Sales(POS) and more. "
          />
        </StyledSubSectionWrapper>
      </StyledMainSectionWrapper>
    </div>
  );
};

export default Services;
