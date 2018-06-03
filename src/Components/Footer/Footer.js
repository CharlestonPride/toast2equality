import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (

        <footer className="gb-footer">
            <div className="footer-bottom text-center">
                <div className="container">
                    <span>Toast to Equality</span><br/>
                    <span>&copy; Copyright 2018 <a target="_blank" rel="noopener noreferrer" href="https://charlestonpride.org">Charleston Pride Festival, Inc. </a>  All Rights Reserved.</span><br/>
                    <span>Charleston Pride Festival, Inc. is a 501(c)(3) public charity under the Internal Revenue Service Code of 1986 and the State of South Carolina.</span>
                </div>
            </div>
        </footer>
    )
  }
}
