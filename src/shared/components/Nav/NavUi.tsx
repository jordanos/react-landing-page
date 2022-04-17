/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import RicaIcon from 'shared/assets/icons/RicaIcon';
import NavList from './NavList';
import StyledNav from './Styles';

interface NavLinkProps {
  navLinkId: String;
  scrollToId: String;
  activeNavLinkId: String;
  setActiveNavLinkId: Function;
}

const NavLink: React.FC<NavLinkProps> = ({
  navLinkId,
  scrollToId,
  activeNavLinkId,
  setActiveNavLinkId,
}) => {
  const handleClick = () => {
    setActiveNavLinkId(navLinkId);
    // document.getElementById(scrollToId).scrollIntoView({
    //   behavior: 'smooth', // gives an ease-in-out effect to our scroll
    // });
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      id={`${navLinkId}`}
      className={activeNavLinkId === navLinkId ? 'activeClass' : ''}
      onClick={handleClick}>
      {navLinkId}
    </li>
  );
};

const NavUi = () => {
  return (
    <StyledNav>
      <RicaIcon />
      <NavList>
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Portofolio</li>
        <li>Contact</li>
      </NavList>
    </StyledNav>
  );
};

export default NavUi;
