import React from 'react';
import NavUi from './NavUi';

interface Props {
  goTo: Function;
  activeElement: any;
  toggleSidebar: Function;
}

const Nav: React.FC<Props> = (props) => {
  const { goTo, activeElement, toggleSidebar } = props;

  return (
    <NavUi
      goTo={goTo}
      activeElement={activeElement}
      toggleSidebar={toggleSidebar}
    />
  );
};

export default Nav;
