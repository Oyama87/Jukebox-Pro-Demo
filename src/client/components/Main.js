import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.js'
import Sidebar from './Sidebar.js'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      sideBarHeader: 'Placeholder',
      navTitle: 'SoloJuke'
    }
  }
  
  render() {
    return (
      <div>
        <Navbar title={this.state.navTitle} />
        <Sidebar headerText={this.state.sideBarHeader}/>
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
// console.log('Hello');
