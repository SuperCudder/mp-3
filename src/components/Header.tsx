import React, { useContext } from 'react';
import { TitleContext } from '../contexts/TitleContext';

const Header = () => {
  const { title, subtitle } = useContext(TitleContext);

  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
};

export default Header;