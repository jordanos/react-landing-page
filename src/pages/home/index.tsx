import React from 'react';
import Nav from 'shared/components/Nav';
import Footer from './Footer';
import Main from './Main';

const Home = () => {
  return (
    <>
      <Nav />
      <div style={{ marginTop: '4em' }} />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
