import React, { Component } from 'react'
import './Nav.css'
import Logo from './logo.png'
import LogoAlt from './logo_h.png'

export default class Nav extends Component {

constructor(props) {
  super(props)

  this.state = {
      fixedClass: "navbar fixed-top navbar-toggleable-md animated slideInDown",
      src: Logo
  }
}


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(event){
        var navClass = "navbar fixed-top navbar-toggleable-md animated slideInDown";
        if (window.scrollY > 50) {
            navClass += " menu-bg";
        }

        this.setState({
            fixedClass: navClass
        });
    }

    mouseOver = () => {
        this.setState({ src: LogoAlt })
    }

    mouseOut = () => {
        this.setState({ src: Logo })
    }

  render() {
    return (
        <div className="gb-menu">
            <nav className={this.state.fixedClass}>
                <div className="container">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <a href="#home" className="navbar-brand" onMouseOver={this.mouseOver}
                        onMouseOut={this.mouseOut} ><img className="img-fluid" src={this.state.src} alt="Logo"/></a>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav onepage-nav">
                            <li className="nav-item scroll"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item scroll"><a className="nav-link" href="#about">The Contest</a></li>
                            <li className="nav-item scroll"><a className="nav-link" href="#contenders">The Contenders</a></li>
                            <li className="nav-item scroll"><a className="nav-link" href="#liquors">The Liquors</a></li>
                            <li className="nav-item scroll"><a className="nav-link" href="#sponsors">Our Sponsors</a></li>
                            <li className="nav-item scroll"><a className="nav-link" href="#trucks">Food Trucks</a></li>
                            <li className="nav-item scroll ticket"><a className="nav-link" href="#tickets">Tickets</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
  }
}
