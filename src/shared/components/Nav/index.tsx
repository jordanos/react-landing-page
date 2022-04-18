import React from 'react';
import NavUi from './NavUi';

interface Props {
  goTo: Function;
  activeElement: any;
}

const Nav: React.FC<Props> = ({ goTo, activeElement }) => {
  return <NavUi goTo={goTo} activeElement={activeElement} />;
};

export default Nav;
