import React, { Component } from 'react'
import MasterHog from '../containers/MasterHog'
import Offspring from '../db.js'
import '../App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      ...Offspring, // spreads out the offspring array that contains individual babyhog elements
    }
  }

  render() {
    return (
      <div className="App">
        <MasterHog offspring={this.state.offspring} />
      </div>
    )
  }
}

export default App;
