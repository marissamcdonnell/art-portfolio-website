import React from 'react'

import styles from './Body.module.scss'
import '../../styles/App.scss'

const Body = () => {
  return (
    <div className={styles.Body}>
      <div className={styles.BodyInner}></div>
    </div>
  )
}

export default Body
