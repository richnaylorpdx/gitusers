import React from 'react'
import { Route, Link } from 'react-router-dom'
import { PageHeader } from 'antd';
import About from './containers/about'
import HomeContainer from './containers/home/HomeContainer'
import './app.css'

const App = () => (
  <React.Fragment>
    <PageHeader title="Git Users App" className='header-text' />
    <main>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/about-us" component={About} />
    </main>
  </React.Fragment>
)

export default App
