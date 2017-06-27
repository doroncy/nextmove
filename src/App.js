import React from 'react';
import style from './styles/style.scss';

// Components
import Consts from './consts';
import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import MutualClients from './components/mutualClients/mutualClients';
import OurClients from './components/ourClients/ourClients';
import Contact from './components/contact';

let viewportHeight;

class App extends React.Component {
  constructor(props){
    super();

    this.state = {
      scrollPosition: Consts.scrollPositions.LARGE_HEADER
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  handleResize() {
    viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let newScrollPosition = this.getScrollPosition(document.body.scrollTop);
    this.setState({
      scrollPosition: newScrollPosition
    });
  }

  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop;
    let newScrollPosition = this.getScrollPosition(scrollTop);
    if (newScrollPosition !== this.state.scrollPosition) {
      this.setState({
        scrollPosition: newScrollPosition
      });
    }
  }

  getScrollPosition(scrollTop) {
    let scrollPosition = Consts.scrollPositions.LARGE_HEADER;
    if (scrollTop >= viewportHeight * 0.45 - 115) {
      scrollPosition = Consts.scrollPositions.SMALL_HEADER;
    }
    return scrollPosition;
  }


  render(){
    return (
      <div>
        <NavBar scrollPosition={this.state.scrollPosition}></NavBar>
        <Home scrollPosition={this.state.scrollPosition}></Home>
        <About></About>
        <OurClients></OurClients>
        <MutualClients></MutualClients>
        <Contact></Contact>
      </div>
    )
  }
}

export default App
