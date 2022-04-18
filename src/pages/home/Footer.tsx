import React from 'react';
import { colors } from 'shared/utils/Styles';
import {
  StyledFooter,
  StyledFooterCol,
  StyledFooterMain,
  StyledFooterTitle,
} from './Styles';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterMain>
        <StyledFooterCol>
          <StyledFooterTitle
            style={{
              fontFamily: "'AlongSansBold'",
              fontSize: '4.5rem',
              color: colors.textLightest,
            }}>
            Rica
          </StyledFooterTitle>
          Rica Technologies can put together complete teams of engineers,
          developers, and other experts to see a project through from start to
          finish. Our main goal is to provide clever solutions that will help
          the business function smoothly in the future.{' '}
        </StyledFooterCol>
        <StyledFooterCol>
          <StyledFooterTitle>CONTACT US</StyledFooterTitle>
          Laphto Mall - Yenim Apartment 1st Floor Addis Ababa, Ethiopia.
          <br />
          Phone: +251 90 946 5857 | +251 91 099 0147 Email: info@recatech.com
        </StyledFooterCol>

        <StyledFooterCol>
          <StyledFooterTitle>Our Newsletter</StyledFooterTitle>
          We&apos;ll send you newsletters, product updates, event alerts, and
          promotional emails on a regular basis. Your e-mail address will not be
          used for anything other than delivering you the emails you requested.
        </StyledFooterCol>
      </StyledFooterMain>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '2em',
        }}>
        © Copyright{'  '}
        <span
          style={{
            fontFamily: 'AlongSansBold',
            color: colors.textPrimary,
            margin: '0 0.35em',
          }}>
          Rica Technologies{' '}
          <span
            style={{
              color: colors.textLightest,
            }}>
            - 2022.
          </span>
        </span>{' '}
        All Rights Reserved
      </div>
    </StyledFooter>
  );
};

export default Footer;
