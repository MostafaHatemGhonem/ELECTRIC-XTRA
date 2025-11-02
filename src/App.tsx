import React from 'react';
import './App.css';

function BackgroundPage() {
  return (
    <div className='bgc'>
      <div className="circle"></div>
      <div className='square'></div>
      <div className='triangle'></div>
      <div className='fullSquare'></div>
    </div>
  )
}

function Header() {
  return (
    <div className='header'>
      <div className="logo">
        ELECTRIC XTRA
      </div>
      <div className="links">
        <ul>
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#features">
            <li>Features</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
    <BackgroundPage/>
    <Header/>
    </>
  )
}

export default App;