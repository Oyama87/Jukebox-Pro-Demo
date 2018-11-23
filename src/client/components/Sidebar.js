import React from 'react'
import styles from '../styles/SidebarStyles.js';
import ListScroller from './ListScroller.js'
import data from './data.js'

const { containerStyles, headerStyles, /*listStyles, itemStyles*/} = styles;

export default function Sidebar (props) {
   return (
     <div id='sidebarContainer' style={containerStyles}>
       <header style={headerStyles}>{props.headerText}</header>
       <ListScroller 
        list={data} 
        rowClass='anAlbum' 
        containerId='albumScroller' />
     </div>
   )
 }

      //  <ul style={listStyles}>
      //    {
      //       data.map(item => {
      //         return (
      //           <li 
      //             key={item.id} 
      //             style={itemStyles}
      //             className='sidebarItem'
      //           >
      //             {item.title}
      //           </li>
      //         )
      //       })
      //    }
      //  </ul>
