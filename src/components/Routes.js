import React from 'react'
import {
  BrowserRouter as Router,
  Routes as RouterRoutes,
  Route,
  Link,
  useLocation
} from 'react-router-dom'
import { animated, useTransition } from 'react-spring'

const Routes = () => {
  return (
    <Router>
      <ul className="router-nav">
        <NavLink to="/">One</NavLink>
        <NavLink to="/two">Two</NavLink>
        <NavLink to="/three">Three</NavLink>
      </ul>
      <Main />
    </Router>
  )
}

const Main = () => {
  const location = useLocation()

  const transitions = useTransition(location, location => location.key, {
    from: {
      opacity: 0,
      position: 'absolute',
      width: '100%'
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  return transitions.map(({ item, props: transition, key }) => (
    <animated.div key={key} style={transition}>
      <RouterRoutes location={item}>
        <Route path="/" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
      </RouterRoutes>
    </animated.div>
  ))
}

function NavLink(props) {
  return (
    <li>
      <Link {...props} />
    </li>
  )
}

const One = () => {
  return (
    <div className="page-route">
      <h1>One</h1>
    </div>
  )
}

const Two = () => {
  return (
    <div className="page-route two">
      <h1>Two</h1>
    </div>
  )
}

const Three = () => {
  return (
    <div className="page-route three">
      <h1>Three</h1>
    </div>
  )
}

export default Routes
