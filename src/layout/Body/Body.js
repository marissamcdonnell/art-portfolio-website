import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from '../Header/Header'
import Home from '../Home'
import Paintings from '../Paintings'
import styles from './Body.module.scss'
import '../../styles/App.scss'

const Body = () => {
  return (
    <div className={styles.Body}>
      <BrowserRouter>
        <Header />
        <div className={styles.BodyInner}>
          <Route exact path="/" component={Home} />
          <Route path="/Paintings" component={Paintings} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Body
