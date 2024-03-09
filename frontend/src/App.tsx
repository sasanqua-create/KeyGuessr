import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Game } from './pages/game'
import { Home } from './pages/home'
import { Header } from './components/Header.js'

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Router>
        <div className="App flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/" element={<Game />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}
