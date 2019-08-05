import React, { Component } from 'react'
import Header from './components/Header'
import Body from './components/Body'

import './scss/common.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    )
  }
}

export default App
