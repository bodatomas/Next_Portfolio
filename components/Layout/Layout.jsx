/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Nav from '../Nav/Nav';

const Layout = (props) => {
  return (
    <>
      <Nav />
      {props.children}
    </>
  );
};

export default Layout;
