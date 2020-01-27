import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Nav.module.scss'

const Nav = () => (
  <div className={styles.container}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/Paintings">Paintings</NavLink>
    <NavLink to="/Sculptures">Sculptures</NavLink>
    <NavLink to="/Drawings">Drawings</NavLink>
    <NavLink to="/Sewing">Sewing</NavLink>
    <NavLink to="/Crochet">Crochet</NavLink>
    <NavLink to="/Store">Store</NavLink>
    <NavLink to="/Support">Support</NavLink>
    <NavLink to="/About">About</NavLink>
  </div>
)

export default Nav
