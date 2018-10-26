import React from 'react'
import logo from '../images/art.png'
// import { Link } from 'gatsby'

import styles from '../scss/layout/header.module.scss'

const Header = () => (
  <div>
      <img src={logo} alt="Logo" className={styles.headerTitle} />
  </div>
)

export default Header
