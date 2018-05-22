import React, { Component } from 'react'
import './Nav.css'

export default class Nav extends Component {

constructor(props) {
  super(props)

  this.state = {
      fixedClass: "navbar fixed-top navbar-toggleable-md animated slideInDown"
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
  render() {
    return (
        <div className="gb-menu">
            <nav className={this.state.fixedClass}>
                <div className="container">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <a href="#" className="navbar-brand"><i className="icofont icofont-cocktail"></i>Toast to Equality</a>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav onepage-nav">
                            <li className="nav-item scroll active"><a className="nav-link" href="#home">Home</a> </li>
                            <li className="nav-item scroll"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item scroll"><a className="nav-link" href="#food-menu">Menu</a></li>
                            <li className="nav-item scroll"><a className="nav-link" href="#reservation">Reservation</a></li>
                            <li className="nav-item scroll"><a className="nav-link" href="#gallery">Gallery</a></li>
                            <li className="nav-item scroll"><a className="nav-link" href="#blog">Blog</a></li>
                            <li className="nav-item scroll"><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
  }
}
