import React from "react";
import { ReactComponent as KapstanLogo } from '../assets/svg/Kapstan.svg';

export default function Header() {
  const handleClick = () => {

  };

  return (
    <header className="header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '80px' }}>
        <KapstanLogo />

        <a href='https://kapstan.io/about-us' target='_blank' rel='noreferrer'>About</a>
      </div>

      <a href="#bingo" className='button-main button-inverted' onClick={handleClick}>Play DevOps Bingo</a>
    </header>
  );
}