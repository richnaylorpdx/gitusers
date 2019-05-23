import React from 'react'
import { Route, Link } from 'react-router-dom'
import About from './containers/about'
import HomeContainer from './containers/home/HomeContainer'
import './app.css'

const App = () => (
  <div className='page-wrapper'>
    <main>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
