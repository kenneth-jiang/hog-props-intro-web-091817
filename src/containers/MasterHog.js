import React, { Component } from 'react'
import Master from '../assets/master-hog.png'
import BabyHog from '../components/BabyHog'

class MasterHog extends Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.state = {
      eyeColor: "blue",
      name: "Master Blaster",
      weight: '2.54 Tons',
      offspring: props.offspring
    }
  }

  changeEyeColor(event) {
    event.preventDefault()
    this.setState({eyeColor: event.target.value})
  }

  render() {
    return (
      <div>

        <form>
          <input
            type="radio"
            name="eyeColor"
            value="blue"
            onChange={this.changeEyeColor.bind(this)}>
          </input> Blue<br></br>
          <input
            type="radio"
            name="eyeColor"
            value="sun"
            onChange={this.changeEyeColor.bind(this)}>
          </input> Sun<br></br>
          <input
            type="radio"
            name="eyeColor"
            value="glowing"
            onChange={this.changeEyeColor.bind(this)}>
          </input> Glowing<br></br>
        </form>

        <h2>Name: {this.state.name}</h2>
        <h3>Weight: {this.state.weight}</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>

        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt='MasterBlaster' style={{height: 400}}></img>
        </div>

        <ul className="hoglist">
          {this.state.offspring.map(el => <BabyHog key={el.id} changeEyes={this.changeEyeColor} {...el} eyeColor={this.state.eyeColor} />)}
        </ul>

      </div>
    )
  }

}

export default MasterHog;
