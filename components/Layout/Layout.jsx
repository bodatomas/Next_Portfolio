/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Nav from '../Nav/Nav';

const Layout = (props) => {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
};

export default Layout;
