import React, { Component } from 'react'
import './Sponsors.css'
import SocialList from '../SocialList/SocialList'
export default class Sponsor extends Component {

  render() {
    return (
        <div className="sponsor">
            <img src={"https://d2f908d3j7stzr.cloudfront.net/toast/sponsors/" + this.props.data.image} alt={this.props.data.name + " logo"} width="300px" height="200px" />
            <p className="font-pacifico">{this.props.data.level + " Sponsor"}</p>
            <SocialList facebook={this.props.data.facebook} instagram={this.props.data.instagram} twitter={this.props.data.twitter} web={this.props.data.web} />
        </div>
    )
  }
}
