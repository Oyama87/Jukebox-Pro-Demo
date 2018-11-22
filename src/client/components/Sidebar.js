import React from 'react'
import styles from '../styles/SidebarStyles.js';

const data = [
  {
    id: 1,
    title: 'hello'
  },
  {
    id: 2,
    title: 'and'
  },
  {
    id: 3,
    title: 'goodbye'
  }
]

const { containerStyles, headerStyles, listStyles, itemStyles} = styles;

export default function Sidebar (props) {
   return (
     <div id='sidebarContainer' style={containerStyles}>
       <header style={headerStyles}>{props.headerText}</header>
       <ul style={listStyles}>
         {
            data.map(item => {
              return (
                <li 
                  key={item.id} 
                  style={itemStyles}
                  className='sidebarItem'
                >
                  {item.title}
                </li>
              )
            })
         }
       </ul>
     </div>
   )
 }
