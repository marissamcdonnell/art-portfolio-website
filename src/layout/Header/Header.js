import React from 'react'
import Nav from '../../components/Nav/Nav'

import styles from './Header.module.scss'

const Header = () => (
  <div className={styles.Header}>
    <div>
      <h1 className={styles.HeaderTitle}>
        Marissa
        <br />
        McDonnell
      </h1>
    </div>
    <Nav />
  </div>
)

export default Header
