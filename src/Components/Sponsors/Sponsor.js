import React, { Component } from 'react'
import './Sponsors.css'
import SocialList from '../SocialList/SocialList'
export default class Sponsor extends Component {

    Social(props) {
        return props.page.length > 0 && <a className="social" target="_blank" href={props.url + props.page + "/?utm_source=charleston_pride&utm_medium=toast_to_equality&utm_campaign=sponsors"}><i className={"fa fa-" + props.icon}></i></a>

    }

  render() {
    return (
        <div className="sponsor">
            <img src={this.props.image} alt={this.props.name + " logo"} width="300px" height="200px" />
            <p className="font-pacifico">{this.props.level}</p>
            <SocialList facebook={this.props.facebook} instagram={this.props.instagram} twitter={this.props.twitter} web={this.props.web} />
        </div>
    )
  }
}
