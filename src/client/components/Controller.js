import React from 'react';
import '../styles/controllerStyles.css'

export default function Controller(props) {
  return (
    <div className="controlContainer">
      <p className='controlButton' id='prevButton'>
        <i className='fas fa-step-backward' />
      </p>
      <p 
        className='controlButton fas play-circle' 
        id='playButton'
        onClick={props.playPauseBtn}>
        <i className={props.isPlaying ? 'fas fa-pause' :'fas fa-play'} />
      </p>
      <p className='controlButton' id='nextButton'>
        <i className='fas fa-step-forward' />
      </p>
    </div>
  )
}
