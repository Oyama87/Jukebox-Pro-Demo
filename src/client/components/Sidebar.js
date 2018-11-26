import React from 'react';
import ListScroller from './ListScroller.js';
import '../styles/sidebarStyles.css';
import '../styles/albumStyles.css';

export default function Sidebar (props) {
  const { headerText, list, selectAlbum, headerClickHandler } = props;
   return (
     <div id='sidebarContainer' className='container'>
       <header
         className='header'
         onClick={headerClickHandler}>{headerText}</header>
       <ListScroller 
        list={list} 
        rowClass='anAlbum'
        containerClass='albumScroller' 
        clickHandler={selectAlbum} />
     </div>
   )
 }
