import React from 'react'
import '../styles/navbarStyles.css';

export default function Navbar(props) {
  return (
    <nav className='navbar'>
      <h1>{props.title}</h1>
    </nav>
  )
}
