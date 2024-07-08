import React from 'react'
import './App.css'
import Header from './components/Header.js/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Pages/Home/Home'

function App() {
  return (
    <div>
      <Header />
      <Home/>
      <Footer/>
    </div>
  )
}

export default App