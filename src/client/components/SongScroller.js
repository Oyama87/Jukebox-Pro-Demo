import React from 'react';

const defaultStyles = {
  width: '80%',
  height: '60%',
  overflow: 'scroll',
  border: '1px solid black',
  borderRadius: '10px',
  padding: 0,
  boxShadow: '8px 8px 8px rgba(0,0,0,0.2)',
}

export default function SongScroller (props) {
  const { songList } = props;
  return (
    <ul style={defaultStyles} >
      {
        songList.map(song => {
          return (
            <li 
            key={song.id} 
            className='aSong'
            >
          Song: {song.name}
          </li>
          )
        })
      }
    </ul>
  )
}

// style={Object.assign(songListStyles, props.style || {})}

// const styles = {
//   songListStyles: {
//     width: '80%',
//     height: '60%',
//     overflow: 'scroll',
//     border: '1px solid black',
//     borderRadius: '10px',
//     padding: 0,
//     boxShadow: '8px 8px 8px rgba(0,0,0,0.2)',
//     backgroundColor: 'rgba(35,35,35,0.7)',
//     scrollBarColor: 'black'
//   }
// }

// const {  songListStyles } = styles;
