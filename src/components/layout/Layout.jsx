import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-container">
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
