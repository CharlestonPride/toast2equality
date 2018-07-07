import React, { Component } from 'react'
import './SocialList.css'

export default class SocialList extends Component {

    Social(props) {
        return props.page && props.page.length > 0 
          && <a className="social" target="_blank" rel="noopener noreferrer" href={props.url + props.page + "/?utm_source=charleston_pride&utm_medium=toast_to_equality&utm_campaign=sponsors"}><i className={"fa fa-" + props.icon}></i></a>
    }

  render() {
    return (
      <div>
        {this.props.facebook && <this.Social icon="facebook-square" url="https://facebook.com/" page={this.props.facebook} />}
        {this.props.twitter && <this.Social icon="twitter-square" url="https://twitter.com/" page={this.props.twitter} />}
        {this.props.instagram && <this.Social icon="instagram" url="https://instagram.com/" page={this.props.instagram} />}
        {this.props.web && <this.Social icon="globe" url="" page={this.props.web} />}
      </div>
    )
  }
}
