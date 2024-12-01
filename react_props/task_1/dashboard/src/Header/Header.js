import React from 'react';
import logo from '../assets/Holberton_Logo.jpg';
import './Header.css';

function Header() {
  return (
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
        School dashboard
        </h1>
      </header>
  )
};

export default Header;