import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.js'
import Sidebar from './Sidebar.js'
import ContentList from './ContentList.js'
import data from '../../../song_data.js'
import albumData from '../../../album_data.js'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      sideBarHeader: 'Albums',
      navTitle: 'Jukebox Pro',
      albums: albumData,
      selectedAlbum: {
        title: '10,000 Days',
        songList: data
      }
    }
  }
  
  render() {
    return (
      <div>
        <Navbar title={this.state.navTitle} />
        <Sidebar 
          headerText={this.state.sideBarHeader} 
          list={this.state.albums} />
        <ContentList album={this.state.selectedAlbum}/>
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
