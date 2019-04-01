import React from 'react'
import { Route, Link } from 'react-router-dom'
import About from '../about'
import Home from '../../views/home/Home'
import HomeContainer from '../home/HomeContainer'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
