import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children ,logo,filtered}) => {
  return (
    <div>
      <Header logo={logo} filtered={filtered}/>
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
