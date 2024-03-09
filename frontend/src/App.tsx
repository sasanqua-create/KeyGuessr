import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ranking from "./components/ranking";

function App() {
  const strings = ['Hello', 'World', 'React', 'TypeScript'];

  return (
    <>
    <Ranking rankerlist={strings} />
    </>
  );
}

export default App;
