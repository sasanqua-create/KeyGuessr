import React from 'react';
import logo from './logo.svg';
import './App.css';
import './game/hint.css'
import Hint from "./game/hint";
import Ranking from "./game/ranking";

function App() {
  const strings = ['Hello', 'World', 'React', 'TypeScript'];

  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <Hint  texts={strings} />
    <Ranking />
    </>
  );
}

export default App;
