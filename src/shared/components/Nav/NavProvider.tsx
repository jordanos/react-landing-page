import React, { useState } from 'react';

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

export const NavContext = React.createContext({});

export const NavProvider: React.FC<Props> = ({ children }) => {
  const [activeNavLinkId, setActiveNavLinkId] = useState('');

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const providerValue = {
    activeNavLinkId,
    setActiveNavLinkId,
  };

  return (
    <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
  );
};
