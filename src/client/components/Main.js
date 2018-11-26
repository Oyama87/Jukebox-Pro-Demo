import React, { Component } from 'react'
import Navbar from './Navbar.js'
import Sidebar from './Sidebar.js'
import ContentList from './ContentList.js'
import data from '../../../song_data.js'
const axios = require('axios')

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      sideBarHeader: 'Albums',
      navTitle: 'Jukebox Pro',
      albums: [],
      selectedAlbum: {
        title: '10,000 Days',
        songList: data
      }
    }
  }
  
  async componentDidMount() {
    try {
      let albums = await axios.get('api/albums')
      // console.log(albums.data)
      this.setState({
        albums: albums.data
      })
    }
    catch(err) {
      console.log(err.message);
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
