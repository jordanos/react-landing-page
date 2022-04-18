/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import RicaIcon from 'shared/assets/icons/RicaIcon';
import NavList from './NavList';
import StyledNav from './Styles';

interface Props {
  goTo: Function;
  activeElement: string;
}

const NavUi: React.FC<Props> = ({ goTo, activeElement }) => {
  return (
    <StyledNav>
      <RicaIcon />
      <NavList>
        <span
          style={{
            cursor: 'pointer',
            fontFamily:
              activeElement === 'Intro'
                ? "'AlongSansBold', sans-serif"
                : "'AlongSans', sans-serif",
          }}
          onClick={() => goTo('Intro')}>
          Home
        </span>
        <span
          style={{
            cursor: 'pointer',
            fontFamily:
              activeElement === 'About'
                ? "'AlongSansBold', sans-serif"
                : "'AlongSans', sans-serif",
          }}
          onClick={() => goTo('About')}>
          About Us
        </span>
        <span
          style={{
            cursor: 'pointer',
            fontFamily:
              activeElement === 'Services'
                ? "'AlongSansBold', sans-serif"
                : "'AlongSans', sans-serif",
          }}
          onClick={() => goTo('Services')}>
          Services
        </span>
        <span
          style={{
            cursor: 'pointer',
            fontFamily:
              activeElement === 'Testimonials'
                ? "'AlongSansBold', sans-serif"
                : "'AlongSans', sans-serif",
          }}
          onClick={() => goTo('Testimonials')}>
          Testimonials
        </span>
        <span
          style={{
            cursor: 'pointer',
            fontFamily:
              activeElement === 'Contact'
                ? "'AlongSansBold', sans-serif"
                : "'AlongSans', sans-serif",
          }}
          onClick={() => goTo('Contact')}>
          Contact
        </span>
      </NavList>
    </StyledNav>
  );
};

export default NavUi;
