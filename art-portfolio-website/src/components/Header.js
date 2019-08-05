import React from 'react'
// import logo from '../images/art.png'

import styles from '../scss/layout/header.module.scss'

const Header = () => (
  <div className={styles.header}>
    {/* <img src={logo} alt="Logo" className={styles.headerTitle} /> */}
    <h1>Marissa McDonnell</h1>
    <div className={styles.nav}>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}
      <div>Contact</div>
    </div>
  </div>
)

export default Header
