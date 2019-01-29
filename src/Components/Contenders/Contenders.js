import React, { Component } from 'react'
import Slider from 'react-slick'
import Section from '../Section/Section'
import './Contenders.css'
import Contender from "./Contender"
import Placeholder from "./contender.png"


export default class Contenders extends Component {

  constructor() {
    super();
    this.state = {
      contenders: [],
    }
  }
  componentDidMount() {
    fetch("https://qxazoatsmj.execute-api.us-east-1.amazonaws.com/dev/contenders")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let contenders = data.filter(s => s.active).map(c =>
          <Contender key={c.id} data={c}/>);
        if(contenders.length < 12){
          contenders.push(<this.Register key="register"/>)
        }
        this.setState({ contenders: contenders })
      })
  }

  Register(props) {
    return (
      <div className="gb-post register">
        <div className="entry-header">
          <div className="entry-thumbnail">
            <a href="mailto:info@toasttoequality.com?subject=Contender Registration">
              <img src={Placeholder} alt="Placeholder logo" width="250px" height="250px" /></a>
          </div>
        </div>
        <div className="entry-content">
          <div className="row">
            <div className="contendor-block" />
            <div className="contendor-social">
              <ul className="global-list list-inline">
                <li className="list-inline-item"><a href="mailto:info@toasttoequality.com?subject=Contender Registration"><i className="fa fa-envelope"></i> Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
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
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
          }
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
          }
        },
        {
          breakpoint: 750,
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
      <Section id="contenders" title="The Contenders" desc="">
        <Slider {...settings}>
          {this.state.contenders}
        </Slider>
      </Section>
    )
  }
}
