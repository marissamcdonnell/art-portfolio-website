import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './styles/App.scss'
import Header from './layout/Header'
import Home from './layout/Home'
import Flat from './layout/Flat'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/flat" component={Flat} />
    </BrowserRouter>
  )
}

export default App
