
import React from 'react';
import logo from '../src/Holberton_Logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../src/utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
        School dashboard
        </h1>
      </header>
      <div className="App-body">
        <p>
        Login to access the full dashboard
        </p>
        <div className="App-body_container">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button onClick={() => alert('Login clicked')}>OK</button>
        </div>
      </div>
      <footer className="App-footer">
        <em><p>{`© ${getFullYear()} - ${getFooterCopy(true)}`}</p></em>
      </footer>
    </div>
  );
}

export default App;
