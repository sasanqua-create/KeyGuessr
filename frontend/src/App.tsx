import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Game } from './pages/game.js'
import { Home } from './pages/home.js'
import { Header } from './components/Header.js'

export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/" element={<Game />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}
