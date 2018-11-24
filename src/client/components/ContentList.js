import React from 'react';
import ListScroller from './ListScroller.js'
import '../styles/contentStyles.css';
import '../styles/songStyles.css';

const titleStyle = {
  textShadow: '4px 4px 4px rgba(0,0,0,0.6)'
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
      <div id="Controller">
        <h2>Play</h2>
      </div>
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
