import React from 'react';
import styles from '../styles/contentStyles';
import SongScroller from './SongScroller.js'

export default function ContentList (props) {
  const 
    { title, songList } = props.album,
    { containerStyles } = styles;
  
    return (
    <div style={containerStyles}>
      <h1 id='albumTitle'>Album: {title}</h1>
      <SongScroller songList={songList}/> 
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
