import React from 'react'
import logo from '../images/art.png'
import { Link } from 'gatsby'

import styles from '../scss/layout/header.module.scss'

const Header = () => (
  <div className={styles.header}>
    <img src={logo} alt="Logo" className={styles.headerTitle} />
    <div className={styles.nav}>
      <Link to="/">Home</Link>
      <div>About</div>
      <div>Contact</div>
    </div>
  </div>
)

export default Header
