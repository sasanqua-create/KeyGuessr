import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { GamePage } from './pages/game'
import { HomePage } from './pages/home'
import { Header } from './components/Header'

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="App flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game/" element={<GamePage />} />
        </Routes>
      </div>
    </div>
  )
}
