import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => (
  <header className="header">
    <h1>{title}</h1>
    {subtitle && <p>{subtitle}</p>}
  </header>
);

export default Header;
