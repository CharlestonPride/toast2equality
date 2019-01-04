import React, { Component } from 'react'
import Section from '../Section/Section';
import Slider from 'react-slick'
import {Link} from 'react-router-dom'
import Sponsor from './Sponsor'

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
                this.setState({ sponsors: data })
            })
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
            <Section id="sponsors" title="The Sponsors" desc="2018" >
                <Slider {...settings}>
                    {this.state.sponsors.map(s =>
                        <Sponsor key={s.id} data={s} />)}
                </Slider>
                <div className="callToAction">
                <Link to="/sponsor" className="btn btn-primary">Sponsorship Opportunities</Link>
                </div>

            </Section>
        )
    }
}
