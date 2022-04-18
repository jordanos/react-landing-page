import React from 'react';
import { StyledNavList } from './Styles';

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

const NavList: React.FC<Props> = ({ children }) => {
  return <StyledNavList>{children}</StyledNavList>;
};

export default NavList;
