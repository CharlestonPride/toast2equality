import React, { Component } from 'react'
import Section from '../Section/Section';
import Slider from 'react-slick'
import {Link} from 'react-router-dom'
import Sponsor from './Sponsor'
import Placeholder from './sponsor.png'

export default class Sponsors extends Component {
    constructor() {
        super();
        this.state = {
            sponsors: [],
        }
    }
    componentDidMount() {
        fetch("https://lpjj2dpqzf.execute-api.us-east-1.amazonaws.com/dev/sponsors")
            .then(results => {
                return results.json();
            })
            .then(data => {
                let sponsors = data.filter(s => s.active).map(s =>
                    <Sponsor key={s.id} data={s} />);
                sponsors.push(<this.Register key="register"/>)
                this.setState({ sponsors: sponsors })
            })
    }

    Register(props){
        return (
    <div className="sponsor">
    <img src={Placeholder} alt=" become a sponsor " width="300px" height="200px" />
    <p className="font-pacifico">Become a Sponsor</p>
    <div>
        <Link className="social" to="/sponsor"><i className="fa fa-globe"></i></Link>
    </div>
</div>)
    }
    render() {
        var settings = {
            infinite: true,
            speed: 600,
            dots: true,
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            lazyLoad: true,
            rows: 1,
            responsive: [
                {
                    breakpoint: 1250,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay: true
                    }
                },
                {
                    breakpoint: 950,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        autoplay: true
                    }
                },
                {
                    breakpoint: 675,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        dots: true
                    }
                }
            ]
        };
        return (
            <Section id="sponsors" title="The Sponsors" >
                <Slider {...settings}>
                    {this.state.sponsors}
                </Slider>
                <div className="callToAction">
                <Link to="/sponsor" className="btn btn-primary">Sponsorship Opportunities</Link>
                </div>

            </Section>
        )
    }
}
