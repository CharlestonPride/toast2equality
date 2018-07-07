import React, { Component } from 'react'

export default class Contendor extends Component {

    Social(props) {
        if( props.page && props.page.length > 0 ){
            return <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href={props.url + props.page +"/?utm_source=charleston_pride&utm_medium=toast_to_equality&utm_campaign=sponsors"}><i className={"fa fa-" + props.icon}></i></a></li>
        }
        return <li></li>
    }

  render(props) {
    return (
            <div className="gb-post">
                <div className="entry-header">
                    <div className="entry-thumbnail">
                    <a target="_blank" rel="noopener noreferrer" href={this.props.data.web + "?utm_source=charleston_pride&utm_medium=toast_to_equality&utm_campaign=sponsors"}>
                    <img src={"https://s3.amazonaws.com/charlestonpride.assets/toast/contenders/" +this.props.data.logo} alt={this.props.data.name + " logo"} width="250px" height="250px" /></a>
                    </div>
                </div>
                <div className="entry-content">
                    <div className="row">
                        <div className="contendor-block"/>
                        <div className="contendor-social">
                            <ul className="global-list list-inline">
                                <this.Social icon="facebook-square" url="https://facebook.com/" page={this.props.data.facebook}/>
                                <this.Social icon="twitter-square" url="https://twitter.com/" page={this.props.data.twitter}/>
                                <this.Social icon="instagram" url="https://instagram.com/" page={this.props.data.instagram}/>
                                <this.Social icon="globe" url="" page={this.props.data.web} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    )
  }
}

