import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Nav.module.scss'

const Nav = () => {
  const navs = ['Craft', 'Art', 'Store', 'About']

  return (
    <ul className={styles.container}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Home
        </NavLink>
      </li>
      <li key={navs[0]}>
        <NavLink
          to={`/${navs[0].toLowerCase()}`}
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          {navs[0]}
        </NavLink>
      </li>
      <li key={navs[1]}>
        <NavLink
          to={`/${navs[1].toLowerCase()}`}
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          {navs[1]}
        </NavLink>
      </li>
      <li key={navs[2]}>
        <NavLink
          to={`/${navs[2].toLowerCase()}`}
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          {navs[2]}
        </NavLink>
      </li>
      <li key={navs[3]}>
        <NavLink
          to={`/${navs[3].toLowerCase()}`}
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          {navs[3]}
        </NavLink>
      </li>
    </ul>
  )
}

export default Nav
