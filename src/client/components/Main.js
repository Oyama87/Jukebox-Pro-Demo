import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.js'
import Sidebar from './Sidebar.js'
import ContentList from './ContentList.js'
import data from '../data.js'


export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      sideBarHeader: 'Placeholder',
      navTitle: 'Jukebox Pro',
      album: {
        title: '10,000 Days',
        songList: data
      }
    }
  }
  
  render() {
    return (
      <div>
        <Navbar title={this.state.navTitle} />
        <Sidebar headerText={this.state.sideBarHeader}/>
        <ContentList album={this.state.album}/>
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
