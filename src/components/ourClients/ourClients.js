import React, { Component } from 'react';
import {Element} from 'react-scroll';
var contentful = require('contentful');
import _ from 'lodash';
import Style from './ourClients.scss';
import logo from '../../assets/logo-with-icons.png';
import PlayerCard from '../playerCard/';

const SPACE_ID = 'bz3ki8kdk35e';
const ACCESS_TOKEN ='91f0f4a6392bfea3fd719086c670b8b81b79d6c0faa663ecb81197d65251fe48';

function fetchContentTypes () {
  return client.getContentTypes()
  .then((response) => {
    console.log('response', response.items);
  })
  .catch((error) => {
    console.log(chalk.red('\nError occurred while fetching Content Types:'))
    console.error(error)
  })
}

class OurClients extends Component {
  constructor(props) {
    super();

    this.state = {players: []};
  }

  componentDidMount() {
    const client = contentful.createClient({
      space: SPACE_ID,  
      accessToken: ACCESS_TOKEN
    });

    client.getEntries({content_type: 'client'}).then((response) => {
      let players = _(response.items)
        .flatMap('fields')
        .sortBy('order')
        .value();

      this.setState({players})
    });
  }

  render() {
    const players = this.state.players.map((player, index) => {
        return (
          <div className="column" key={index}>
            <PlayerCard player={player}></PlayerCard>
          </div>
        );
      });

    return (
      <Element name="ourClients" className="our-clients-wrap">
        <div className="row">
          <div className="small-12 small-centered medium-3 medium-uncentered columns">
            <div className="section-title-large">OUR CLIENTS</div>
          </div>
          <div className="small-10 about-text small-centered medium-9 medium-uncentered columns end">
            <div className="row small-up-1 medium-up-2 large-up-3 small-centered">
              {players}
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default OurClients;
