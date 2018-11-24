import React from 'react';

const defaultStyles = {
  overflow: 'scroll',
  textAlign: 'center',
  padding: 0,
  cursor: 'pointer'
}

export default function ListScroller (props) {
  const { list, rowClass, containerId, customStyles } = props;
  
  return (
    <ul style={Object.assign(defaultStyles, customStyles)} id={containerId} >
      {
        list.map(item => {
          return (
            <li 
              key={list.id} 
              className={rowClass}
            >
              {item.name}
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
