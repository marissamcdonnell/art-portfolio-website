import React from 'react'
import Nav from '../../components/Nav/Nav'

import styles from './Header.module.scss'

const Header = () => (
  <div className={styles.Header}>
    <div>
      <h1 className={styles.HeaderTitle}>Marissa McDonnell</h1>
      <Nav />
    </div>
    <p className={styles.Footer}>copyright 2020</p>
  </div>
)

export default Header
