import React from 'react';
import AlbumScroller from './AlbumScroller.js';
import '../styles/sidebarStyles.css';
import '../styles/albumStyles.css';

export default function Sidebar (props) {
  const { headerText, list, selectAlbum, selectedAlbum, headerClickHandler } = props;
   return (
     <div id='sidebarContainer' className='container'>
       <header
         className='header'
         onClick={headerClickHandler}>{headerText}
       </header>
       <AlbumScroller 
        list={list} 
        rowClass='anAlbum'
        containerClass='albumScroller' 
        clickHandler={selectAlbum}
        selectedItem={selectedAlbum} />
     </div>
   )
 }
