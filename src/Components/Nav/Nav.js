import React, { Component } from 'react'
import './Nav.css'
import Logo from './logo.png'
import LogoAlt from './logo_h.png'
import NavLink from './NavLink'
import { HashLink } from 'react-router-hash-link';

export default class Nav extends Component {

constructor(props) {
  super(props)

  this.state = {
      fixedClass: "navbar fixed-top navbar-expand-lg animated slideInDown",
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
        var navClass = "navbar fixed-top navbar-expand-lg animated slideInDown";
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

                    <HashLink to="/#home" className="navbar-brand" onMouseOver={this.mouseOver}
                        onMouseOut={this.mouseOut} ><img className="img-fluid" src={this.state.src} alt="Logo"/></HashLink>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav onepage-nav">
                            <NavLink to="/#contest">The Contenst</NavLink>
                            <NavLink to="/#contenders">The Contenders</NavLink>
                            <NavLink to="/#liquors">The Liquors</NavLink>
                            <NavLink to="/#entertainment">The Entertainment</NavLink>
                            <NavLink to="/#sponsors">The Sponsors</NavLink>
                            <NavLink to="/#food">The Food</NavLink>
                            <li class="nav-item gb-dropdown">
                                <a class="nav-link" href="#">Get Involved</a>
                                <ul class="gb-dropdown-menu">
                                    <NavLink to="/sponsor">Sponsor</NavLink>
                                    <NavLink to="/advertise">Advertise</NavLink>
                                </ul>
                            </li>
                            <NavLink styleName="ticket" to="/#tickets">Tickets</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
  }
}


