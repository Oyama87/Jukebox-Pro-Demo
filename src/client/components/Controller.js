import React from 'react';
import '../styles/controllerStyles.css'

export default function Controller(props) {
  return (
    <div className="controlContainer">
      <p className='controlButton' id='prevButton'>Prev</p>
      <p className='controlButton' id='playButton'>Play</p>
      <p className='controlButton' id='nextButton'>Next</p>
    </div>
  )
}
