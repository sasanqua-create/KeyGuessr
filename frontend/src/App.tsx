import React from 'react';
import './App.css';
import Participants from './components/participants';

export default function App() {
  const strings = ['Hello', 'World', 'React', 'TypeScript', 'ast', 'asdfas'];
  return (
    <Participants participantlist={strings}/>
  )
}