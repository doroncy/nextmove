import React, { Component } from 'react';
import Slider from 'react-slick';
import Style from './home.scss';
import Consts from '../../consts';

const sliderSettings = {
  dots: false,
  arrows: false,
  autoplay: true,
  initialSlide:0,
  infinite: true,
  speed: 1000,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  adaptiveHeight: true
};

class Home extends Component {
  constructor(props) {
    super();
  }

  buildGalaryImages() {
    return ['home_bg1', 'home_bg2', 'home_bg3'].map((image, index)=> {
      return (
        <div className="gallery-item" key={index}>
          <div className="pos-relative gallery-item-img-wrap">
            <div className={`background-image ${image}`}></div>
          </div>
        </div>
      );
    });
  }

  render() {
    let galleryImages = this.buildGalaryImages();

    let scrollPositionClassName = this.props.scrollPosition === Consts.scrollPositions.SMALL_HEADER
      ? 'with-small-header' : '';

    return (
      <div className={`home-wrap ${scrollPositionClassName}`}>
        <div className="bottom-section show-for-medium">
          <Slider {...sliderSettings}>
            {galleryImages}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Home;
