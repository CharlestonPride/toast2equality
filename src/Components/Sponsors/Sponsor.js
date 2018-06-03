import React, { Component } from 'react'
import './Sponsors.css'
export default class Sponsor extends Component {

    Social(props) {
        return props.page.length > 0 && <a className="social" target="_blank" href={props.url + props.page + "/?utm_source=charleston_pride&utm_medium=toast_to_equality&utm_campaign=sponsors"}><i className={"icofont icofont-" + props.icon} aria-hidden="true"></i></a>

    }

  render() {
    return (
        <div className="sponsor">
            <img src={this.props.image} className="img-fluid" />
            <div>
                <this.Social icon="social-facebook" url="https://facebook.com/" page={this.props.facebook} />
                <this.Social icon="social-twitter" url="https://twitter.com/" page={this.props.twitter} />
                <this.Social icon="social-instagram" url="https://instagram.com/" page={this.props.instagram} />
                <this.Social icon="web" url="" page={this.props.web} />
            </div>
        </div>
    )
  }
}
