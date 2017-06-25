import React from 'react';
import Style from './comingsoon.scss';
import logo from '../../assets/logo-big.png';

const ComingSoon = (props) => {

  return (
    <div className="coming-soon-wrap">
      <div className="row">
        <div className="small-12 small-centered medium-6 medium-uncentered columns">
          <div className="logo-big">
            <img src={logo} />
          </div>
        </div>
        <div className="small-10 small-centered medium-6 medium-uncentered columns">
          <div className="clearfix text-content-wrap">
            <ul className="no-bullet">
              <li className="content-text-light run-font">Contract Negotiation</li>
              <li className="content-text-light run-font">Marketing and PR</li>
              <li className="content-text-light run-font">Financial Management and Tax Planning</li>
              <li className="content-text-light run-font">Legal services</li>
              <li className="content-text-light run-font">Career planning</li>
              <li className="content-text-light run-font">Match personal coaches to your needs</li>
              <li className="content-text-darker run-font-bold">+972 52-893-6935</li>
              <li className="content-text-darker run-font-bold">
                <a href="mailto:udbarnea@hotmail.com" target="_blank">
                  udbarnea@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="small-12 small-centered columns">
          <div className="coming-soon-text run-font-italic">Coming soon</div>
        </div>
      </div>
      <div className="row">
        <div className="small-12 small-centered columns">
          <div className="big-black-font run-font-bold">UNDER CONSTRUCTION...</div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
