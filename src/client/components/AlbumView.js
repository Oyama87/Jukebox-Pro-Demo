import React from 'react'
import '../styles/albumImageStyles.css'

export default function AlbumView(props) {
  return (
    <div id='albumViewContainer'>
      {
        props.list.map(item => {
          return <img 
            key={item.id} 
            src={item.artworkUrl} 
            className='albumImg' />
        })
      }
    </div>
  )
}
