import React, { Component } from 'react'
import Navbar from './Navbar.js'
import Sidebar from './Sidebar.js'
import ContentList from './ContentList.js'
import  axios from 'axios'

const audio = document.createElement('audio')
audio.autoplay = true

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      sideBarHeader: 'Albums',
      navTitle: 'Jukebox Pro',
      albums: [],
      selectedAlbum: {},
      songIsPlaying: false,
      selectedSong: {}
    }
    this.selectAlbum = this.selectAlbum.bind(this);
    this.getAlbums = this.getAlbums.bind(this);
    this.loadAudio = this.loadAudio.bind(this)
    this.playOrPause = this.playOrPause.bind(this)
  }
  
  async componentDidMount() {
    await this.getAlbums();
  }
  
  async getAlbums() {
    try {
      let albums = await axios.get('api/albums');
      this.setState({
        albums: albums.data
      })
    }
    catch(err) {
      console.log(err.message);
    }
  }
  
  loadAudio(song) {
    this.setState({
      selectedSong: song,
      songIsPlaying: true
    })
    audio.src = song.audioUrl
    audio.load()
  }
  
  playOrPause() {
    if(!this.state.selectedSong.id) {
      this.setState({
        songIsPlaying: false
      })
    }
    else if(audio.paused) {
      this.setState({
        songIsPlaying: true
      })
      audio.play()
    }
    else {
      this.setState({
        songIsPlaying: false
      })
      audio.pause()
    }
  }
  
  async selectAlbum(albumId) {
    // let album = await axios.get(`/api/albums/${albumId}`);
    const album = this.state.albums.find(alb => alb.id === albumId)
    let albumSongs = await axios.get(`/api/albums/${albumId}/songs`);
    // console.dir(album.data);
    this.setState({
      selectedAlbum: {...album, songList: albumSongs.data}
    })
    // this.setState({
    //   selectedAlbum: {
    //     title: album.data.name,
    //     id: album.data.id,
    //     artworkUrl: album.data.artworkUrl,
    //     songList: albumSongs.data
    //   }
    // })
  }
  
  render() {
    return (
      <div>
        <Navbar title={this.state.navTitle} />
        <Sidebar 
          headerText={this.state.sideBarHeader} 
          headerClickHandler={()=> this.setState({ selectedAlbum: {} })}
          list={this.state.albums} 
          selectAlbum={this.selectAlbum}
          selectedAlbum={this.state.selectedAlbum} />
        <ContentList 
          album={this.state.selectedAlbum.songList || this.state.albums}
          title={this.state.selectedAlbum.title || 'Albums'}
          imageSrc={this.state.selectedAlbum.artworkUrl} 
          selectSong={this.loadAudio}
          selectedSong={this.state.selectedSong}
          playPauseBtn={this.playOrPause} 
          isPlaying={this.state.songIsPlaying} />
      </div>
    )
  }
}
