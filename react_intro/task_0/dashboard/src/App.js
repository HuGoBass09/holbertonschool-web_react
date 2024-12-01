import logo from '../src/Holberton_Logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
        School dashboard
        </h1>
      </header>
      <body className="App-body">
        <p>
        Login to access the full dashboard
        </p>
      </body>
      <footer className="App-footer">
        <p>
        <em>Copyright 2020 - holberton School</em>
        </p>
      </footer>
    </div>
  );
}

export default App;