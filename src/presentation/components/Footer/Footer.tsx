import React from 'react';

interface FooterProps {
  text: string;
}

const Footer: React.FC<FooterProps> = ({ text }) => (
  <footer className="footer">
    <p>{text}</p>
  </footer>
);

export default Footer;
