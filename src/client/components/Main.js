import React, { Component } from 'react'
import Navbar from './Navbar.js'
import Sidebar from './Sidebar.js'
import ContentList from './ContentList.js'
// import data from '../../../song_data.js'
// const albumData = require('../../../album_data.js');
const axios = require('axios')

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      sideBarHeader: 'Albums',
      navTitle: 'Jukebox Pro',
      albums: [],
      selectedAlbum: {}
    }
    this.selectAlbum = this.selectAlbum.bind(this);
  }
  
  async componentDidMount() {
    try {
      let albums = await axios.get('api/albums');
      // console.log(albums);
      this.setState({
        albums: albums.data
      })
    }
    catch(err) {
      console.log(err.message);
    }
  }
  
  async selectAlbum(albumId) {
    let album = await axios.get(`/api/albums/${albumId}`);
    let albumSongs = await axios.get(`/api/albums/${albumId}/songs`);
    // console.dir(albumSongs.data);
    this.setState({
      selectedAlbum: {
        title: album.data.name,
        songList: albumSongs.data
      }
    })
  }
  
  render() {
    return (
      <div>
        <Navbar title={this.state.navTitle} />
        <Sidebar 
          headerText={this.state.sideBarHeader} 
          list={this.state.albums} 
          selectAlbum={this.selectAlbum}/>
        <ContentList 
          album={this.state.selectedAlbum.songList || this.state.albums}
          title={this.state.selectedAlbum.title || 'Albums'} />
      </div>
    )
  }
}
