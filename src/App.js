import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'

import Nav from './components/Nav'
import Toggle from './components/Toggle'

import logo from './logo.svg';
import './App.css';

function App() {
  const [isNavOpen, setNavOpen] = useState(false)

  const navAnimation = useSpring({
    transform: isNavOpen
      ? 'translate3d(0, 0, 0)'
      : 'translate3d(100%, 0, 0)'
  })

  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  })

  const handleTogleNav = () => {
    setNavOpen(!isNavOpen)
  }

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" alt='App logo' />
        <button
          className="menu-button"
          onClick={handleTogleNav}>
          Menu
        </button>
        <Nav style={navAnimation} />
      </header>
      <main>
        <Toggle />
      </main>
    </animated.div>
  );
}

export default App;
