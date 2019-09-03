import React from 'react'
import Nav from '../components/Nav'

import styles from '../styles/header.module.scss'

const Header = () => (
  <div className={styles.Header}>
    <h1>Marissa Love's This Shit</h1>
    <Nav />
  </div>
)

export default Header
