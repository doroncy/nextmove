import React, { Component } from 'react';
import {Element} from 'react-scroll';
import Style from './contact.scss';
import logo from '../../assets/logo-with-icons.png';

class About extends Component {
  constructor(props) {
    super();

    this.title = `LET’S GET IN TOUCH !`;
    this.aboutText2 = `We believe in representing players that we have faith in, both in their potential and their ability to improve and upgrade themselves every season. We don’t believe in having too many players. We work everywhere- we place players in Europe, South America, Asia. last year we placed players in all levels and areas, we placed players in Spain, Germany, Japan to Euroleauge level. We specialize in Europe, we have strong connections with high level clubs, clubs trust our knowledge & connections. We fight hard for our players, we are well known for our negotiating skills, and we do high level PR in the media.`;
  }

  render() {
    return (
      <Element name="contact" className="contact-wrap section-wrap">
        <div className="row">
          <div className="small-12 small-centered medium-3 medium-uncentered columns clearfix">
            <div className="section-title-large">
              <span>CONTACT</span>
            </div>
          </div>
          <div className="small-12 small-centered medium-7 medium-uncentered columns end">
            <ul className="no-bullet contact-info run-font">
              <li>{this.title}</li>
              <li className="nextmove-strip">
                <div className="nextmove-strip-grey"></div>
                <div className="nextmove-strip-orange"></div>
              </li>
              <li>udbarnea@hotmail.com</li>
              <li>+972 528 936 935</li>
            </ul>
          </div>
        </div>
      </Element>
    );
  }
}

export default About;
