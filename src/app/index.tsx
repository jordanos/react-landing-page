import Home from 'pages/home';
import React from 'react';
import BaseStyles from './BaseStyles';
import './fontStyles.css';
import NormalizeStyles from './NormalizeStyles';

const App: React.FC = () => {
  return (
    <>
      <NormalizeStyles />
      <BaseStyles />
      <Home />
    </>
  );
};

export default App;
