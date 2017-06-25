import React from 'react';
import navbarStyle from './navbar.scss';
import {Link, Element, animateScroll} from 'react-scroll';
import Consts from '../../consts';
import logoWithIcons from '../../assets/logo-with-icons.png';
import logo from '../../assets/logo-small.png';

class NavBar extends React.Component {
  constructor(props){
    super();

    this.menuItems = [
      {path: 'about', title: 'ABOUT'},
      {path: 'ourClients', title: 'OUR CLIENTS'},
      {path: 'contact', title: 'CONTACT'}
    ];

    this.state = {
      mobileNavVisible: false,
    };

    this.scrollToTop = this.scrollToTop.bind(this);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
    this.getSubHeader = this.getSubHeader.bind(this);
    this.buildMenuItems = this.buildMenuItems.bind(this);
  }

  scrollToTop() {
    animateScroll.scrollToTop();
  }

  toggleMobileNav() {
    this.setState({
      mobileNavVisible: !this.state.mobileNavVisible
    });
  }

  buildMenuItems(offset) {
    return this.menuItems.map((menuItem, index) => {
        return (
          <li key={index} className="menu-link">
            <Link activeClass="active" to={menuItem.path} spy={true} smooth={true} offset={offset} duration={800}>
              {menuItem.title}
            </Link>
          </li>
        );
      });
  }

  getSubHeader() {
    let subHeader = '';

    if (this.props.scrollPosition === Consts.scrollPositions.LARGE_HEADER) {
      subHeader = (
        <div className="subheader-section">
          <div className="row">
            <div className="small-12 small-centered medium-6 medium-uncentered columns">
              <div className="logo-big">
                <img src={logoWithIcons} />
              </div>
            </div>
            <div className="small-10 small-centered medium-6 medium-uncentered columns">
              <div className="clearfix text-content-wrap">
                <ul className="no-bullet">
                  <li className="content-text-darker run-font large">Contract Negotiation</li>
                  <li className="content-text-darker run-font large">Marketing and PR</li>
                  <li className="content-text-darker run-font large">Financial Management and Tax Planning</li>
                  <li className="content-text-darker run-font large">Legal services</li>
                  <li className="content-text-darker run-font large">Career planning</li>
                  <li className="content-text-darker run-font large">Match personal coaches to your needs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      subHeader = (
        <div className="subheader-section small-subheader">
          <div className="row">
            <div className="small-12 columns">
              <div className="logo animated fadeIn">
                <img src={logo} />
              </div>
            </div>
          </div>
        </div>
      );
    }

    return subHeader;
  }

  render() {
    let menuItems = this.buildMenuItems(-135);

    let mobileNav = this.state.mobileNavVisible
      ? (<ul className="no-bullet mobile-nav">{this.buildMenuItems(-250)}</ul>)
      : '';

    let subHeader = this.getSubHeader();

    return (
      <div className="header-wrap">
        <div className="top-bar navbar">
          <div className="top-bar-right">
            <ul className="menu run-font large show-for-medium">
              {menuItems}
            </ul>
            <button className="toggle-mobile-nav-btn menu-icon dark hide-for-medium" type="button"
              onClick={this.toggleMobileNav}>
            </button>
          </div>
          {mobileNav}
        </div>
        {subHeader}
      </div>
    );
  }
}
export default NavBar;
