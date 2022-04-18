import React from 'react';
import StyledModal, { StyledSidebar } from './Styles';

interface Props {
  active: boolean;
  toggleSidebar: Function;
  children: React.ReactChild | React.ReactChild[];
}

const Sidebar: React.FC<Props> = (props) => {
  const { active, toggleSidebar, children } = props;
  return (
    <>
      {/* modal background */}
      <StyledModal
        className="modal-bg"
        active={active}
        onClick={() => toggleSidebar()}
      />
      {/* actual modal */}
      <StyledSidebar className="sidebar" active={active}>
        {children}
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
