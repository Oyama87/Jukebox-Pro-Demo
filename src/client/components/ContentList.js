import React from 'react';
import ListScroller from './ListScroller.js';
import Controller from './Controller.js'
import '../styles/contentStyles.css';
import '../styles/songStyles.css';

const titleStyle = {
  textShadow: '0.35em 0.35em 0.35em rgba(0,0,0,0.8)'
}

export default function ContentList (props) {
  const 
    { title, songList } = props.album;
  
    return (
    <div className='containerStyles'>
      <h1 style={titleStyle}>Album: {title}</h1>
      <ListScroller 
        list={songList} 
        rowClass='aSong' 
        containerClass='songScroller' 
      /> 
      <Controller />
    </div>
  )
}

// style={songListStyles}

      // <ul style={songListStyles}>
      //   {
      //     songs.map(song => {
      //       return <li key={song.id} className='aSong'>Song: {song.name}</li>
      //     })
      //   }
      // </ul>
