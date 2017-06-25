import React, { Component } from 'react';
import Style from './sectionDevider.scss';

class SectionDevider extends React.Component {
  constructor(props){
    super();

    this.state = {
      viewportWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    };

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  handleResize() {
    this.setState({
      viewportWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    });
  }

  render(){
    let divStyle = {
      width: this.state.viewportWidth * 0.18
    }
    return (
      <div className="section-devider-wrap">
        <div className="small-12 small-centered medium-4 medium-offset-1 columns">
          <div className="section-devider" style={divStyle}></div>
        </div>
      </div>
    );
  }
}

export default SectionDevider;
