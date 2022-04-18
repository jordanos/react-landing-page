/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import RicaIcon from 'shared/assets/icons/RicaIcon';
import BurgerMenu from './BurgerMenu';
import Navs from './Navs';
import StyledNav, { StyledBurgerMenu, StyledNavList } from './Styles';

interface Props {
  goTo: Function;
  activeElement: string;
  toggleSidebar: Function;
}

const NavUi: React.FC<Props> = (props) => {
  const { goTo, activeElement, toggleSidebar } = props;

  return (
    <StyledNav>
      <RicaIcon />
      <StyledNavList>
        <Navs goTo={goTo} activeElement={activeElement} />
      </StyledNavList>
      <StyledBurgerMenu>
        <BurgerMenu toggleSidebar={toggleSidebar} />
      </StyledBurgerMenu>
    </StyledNav>
  );
};

export default NavUi;
