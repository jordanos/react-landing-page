/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import BurgerMenuIcon from 'shared/assets/icons/BurgerMenuIcon';
import { colors } from 'shared/utils/Styles';

interface Props {
  toggleSidebar: Function;
}

const BurgerMenu: React.FC<Props> = ({ toggleSidebar }) => {
  const handleClick: React.MouseEventHandler = () => {
    toggleSidebar();
  };

  return (
    <span
      style={{ color: colors.textSecondary, cursor: 'pointer' }}
      onClick={handleClick}>
      <BurgerMenuIcon />
    </span>
  );
};

export default BurgerMenu;
