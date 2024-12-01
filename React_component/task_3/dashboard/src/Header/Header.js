import React from 'react';
import logo from '../Holberton Logo.jpg';
import './Header.css';


function Header() {
  return (
    <div className="header">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      </div>
  )
}

export default Header;
