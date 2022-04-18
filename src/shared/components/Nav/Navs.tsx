/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

interface NavsProps {
  goTo: Function;
  activeElement: any;
  toggle?: Function;
}

const Navs: React.FC<NavsProps> = (props) => {
  const { goTo, activeElement, toggle = () => {} } = props;

  const handleClick = (scroll: String) => {
    toggle();
    goTo(scroll);
  };
  return (
    <>
      <span
        style={{
          cursor: 'pointer',
          fontFamily:
            activeElement === 'Intro'
              ? "'AlongSansBold', sans-serif"
              : "'AlongSans', sans-serif",
        }}
        onClick={() => handleClick('Intro')}>
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
        onClick={() => handleClick('About')}>
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
        onClick={() => handleClick('Services')}>
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
        onClick={() => handleClick('Testimonials')}>
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
        onClick={() => handleClick('Contact')}>
        Contact
      </span>
    </>
  );
};

Navs.defaultProps = {
  toggle: () => {},
};

export default Navs;
