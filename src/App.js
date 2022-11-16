import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, Vini!
        </p>
        <a
          className="App-link"
          href="https://www.valcann.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Valcann Cloud Intelligence
        </a>
      </header>
    </div>
  );
}

export default App;
