import React, { Component } from 'react';
import {Element} from 'react-scroll';
import Style from './about.scss';
import logo from '../../assets/logo-with-icons.png';

class About extends Component {
  constructor(props) {
    super();

    this.aboutText1 = `Our agency, Next Move, specializes in navigating players to the right places, by placing each player in the best situation for him with the perspective of what the best next move is, with the consideration of the player's abilities, qualities and his wishes for his career. Every season we focus on what the right move is for the player, we mark the goals and the teams that we think are suitable.`;
    this.aboutText2 = `We believe in representing players that we have faith in, both in their potential and their ability to improve and upgrade themselves every season. We don’t believe in having too many players. We work everywhere- we place players in Europe, South America, Asia. last year we placed players in all levels and areas, we placed players in Spain, Germany, Japan to Euroleauge level. We specialize in Europe, we have strong connections with high level clubs, clubs trust our knowledge & connections. We fight hard for our players, we are well known for our negotiating skills, and we do high level PR in the media.`;
  }

  render() {
    return (
      <Element name="about" className="about-wrap section-wrap">
        <div className="row">
          <div className="small-12 small-centered medium-3 medium-uncentered columns clearfix">
            <div className="section-title-large">
              <span>ABOUT US</span>
            </div>
          </div>
          <div className="small-10 about-text small-centered medium-7 medium-uncentered columns end">
            <div className="run-font">
              <p>{this.aboutText1}</p>
              <p>{this.aboutText2}</p>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default About;
