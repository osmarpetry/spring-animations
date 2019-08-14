import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'

import Accordion from './components/Accordion'
import Checkout from './components/Checkout'
import Modal from './components/Modal'
import Nav from './components/Nav'
import Routes from './components/Routes'

import logo from './logo.svg';
import './App.css';

function App() {
  const [isNavOpen, setNavOpen] = useState(false)
  const [isCheckotOpen, setCheckoutOpen] = useState(false)
  const [isModalOpen, setNavModal] = useState(false)

  const navAnimation = useSpring({
    transform: isNavOpen
      ? 'translate3d(0, 0, 0) scale(1)'
      : 'translate3d(100%, 0, 0) scale(0)'
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

  const handleCheckoutOpen = () => {
    setCheckoutOpen(!isCheckotOpen)
  }

  const handleToggleModal = () => {
    setNavModal(!isModalOpen)
  }

  return (
    <animated.div className='App' style={fade}>
      <header className='App-header'>
        <img src={logo} className='logo' alt='App logo' />
        <div className='Nav-buttons '>
          <button
            className='menu-button'
            onClick={handleTogleNav}>
            Menu
          </button>
          <button
            className='menu-button'
            onClick={handleCheckoutOpen}>
            Checkout
          </button>
          <button
            className='menu-button'
            onClick={handleToggleModal}>
            Modal
          </button>
        </div>
        <Nav style={navAnimation} />
      </header>
      <main>
        <Accordion />
        <Checkout isCheckotOpen={isCheckotOpen} />
        <Routes />
        <Modal on={isModalOpen} toggle={handleToggleModal}/>
      </main>
    </animated.div>
  );
}

export default App;
