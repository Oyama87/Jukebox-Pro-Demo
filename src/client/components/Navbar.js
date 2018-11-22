import React from 'react'
import styles from '../styles/navbarStyles';

export default function Navbar(props) {
  return (
    <nav style={styles}>
      <h1>{props.title}</h1>
    </nav>
  )
}
