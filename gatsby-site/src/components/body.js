import React from 'react'
import paint from '../images/paint-and-brush.png'
import pencils from '../images/pencils.png'
import sew from '../images/needle-and-thread.png'
import yarn from '../images/yarn.png'

import styles from '../scss/layout/body.module.scss'

const Body = () => (
    <div>
        <img src={pencils} alt="Pencils" className={styles.pencils} />
        <img src={sew} alt="Needle and Thread" className={styles.sew} />
        <img src={yarn} alt="Yarn" className={styles.yarn} />
        <img src={paint} alt="Paint Brush" className={styles.paint} />
    </div>
)

export default Body
