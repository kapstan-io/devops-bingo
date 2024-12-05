import React from "react";
import KapstanLogo from '../assets/svg/Kapstan.svg';

export default function Header() {
  return (
    <header className="header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '80px' }}>
        <a href='https://www.kapstan.io' target='_blank' rel='noreferrer' style={{ display: 'contents' }}>
          <KapstanLogo />
        </a>

        <a href='https://kapstan.io/about-us' target='_blank' rel='noreferrer'>About</a>
      </div>

      <a href="#bingo" className='button-main button-inverted'>Play DevOps Bingo</a>
    </header>
  );
}