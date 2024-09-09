import React from 'react';
import './ResponsiveGridLayout.css';

const ResponsiveGridLayout = ({ header, leftAside, banner, main, rightAside, lowContent, footer }) => {
  return (
    <div className="container">
      <div className="header">{header}</div>
      <div className="banner">{banner}</div>
      <div className="left-aside">{leftAside}</div>
      <div className="main">{main}</div>
      <div className="right-aside">{rightAside}</div>
      <div className="low-content">{lowContent}</div>
      <div className="footer">{footer}</div>
    </div>
  );
};

export default ResponsiveGridLayout;
