import React, { Component } from 'react'

export default class Contendor extends Component {

    Social(props) {
    return <li className="list-inline-item"><a target="_blank" href={props.url}><i className={"icofont icofont-" + props.icon} aria-hidden="true"></i></a></li>
    
}
  render(props) {
    return (
        <div className="col-12 col-md-4 col-lg-3">
            <div className="gb-post">
                <div className="entry-header">
                    <div className="entry-thumbnail">
                        <a href={this.props.web}><img src={this.props.logo} alt={this.props.title + " logo"} className="img-fluid" /></a>
                    </div>
                </div>
                <div className="entry-content">
                    <h2 className="entry-title">{this.props.name}</h2>
                    <div className="row">
                        <div className="contendor-block"/>
                        <div className="contendor-social">
                            <ul className="global-list list-inline">
                                <this.Social icon="social-facebook" url={"https://facebook.com/" + this.props.facebook}/>
                                <this.Social icon="social-twitter" url={"https://twitter.com/" + this.props.twitter}/>
                                <this.Social icon="social-instagram" url={"https://instagram.com/" + this.props.instagram}/>
                                <this.Social icon="web" url={this.props.web}/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

