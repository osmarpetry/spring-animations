import React from 'react';
import { useSpring, animated } from 'react-spring'

import Toggle from './components/Toggle'

import logo from './logo.svg';
import './App.css';

function App() {
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  })

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" alt='App logo' />
        <button className="menu-button">Menu</button>
      </header>
      <main>
        <Toggle />
      </main>
    </animated.div>
  );
}

export default App;
