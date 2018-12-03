import React from 'react';
import SongScroller from './SongScroller.js';
import Controller from './Controller.js'
import '../styles/contentStyles.css';
import '../styles/songStyles.css';

const titleStyle = {
  textShadow: '0.35em 0.35em 0.35em rgba(0,0,0,0.8)'
}

export default function ContentList (props) {
  const { album, title, imageSrc, selectSong, selectedSong } = props;
  
    return (
    <div className='containerStyles'>
      <h1 style={titleStyle}>{title}</h1>
      {
        imageSrc ? 
          <img src={imageSrc} className='albumArt' /> 
          : null
      }
      
      {
        props.selectedSong.name ? 
          <p className='nowPlaying'>{`Now playing: ${props.selectedSong.name}`}</p>
          :
          null
      }
      
      <SongScroller 
        list={album} 
        rowClass='aSong' 
        containerClass='songScroller' 
        clickHandler={selectSong}
        selectedItem={selectedSong}
      /> 
      <Controller 
        playPauseBtn={props.playPauseBtn}
        isPlaying={props.isPlaying} />
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
