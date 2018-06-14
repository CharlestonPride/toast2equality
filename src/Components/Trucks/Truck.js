import React, { Component } from 'react'
import SocialList from '../SocialList/SocialList'

export default class Truck extends Component {
  render() {

    return (
        <div className="truck">
            <img src={this.props.image} alt={this.props.name + " logo"} width="250px" height="250px" />
            <SocialList facebook={this.props.facebook} twitter={this.props.twitter} instagram={this.props.instagram} web={this.props.web}/>
        </div>
    )
  }
}
