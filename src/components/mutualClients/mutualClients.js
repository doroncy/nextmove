import React, { Component } from 'react';
import {Element} from 'react-scroll';
var contentful = require('contentful');
import _ from 'lodash';
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

class MutualClients extends Component {
  constructor(props) {
    super();

    this.state = {players: []};
  }

  componentDidMount() {
    const client = contentful.createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN
    });

    client.getEntries({content_type: 'mutualClient'}).then((response) => {
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
      <Element name="mutualClients" className="mutual-clients-wrap section-wrap">
        <div className="row">
          <div className="small-12 small-centered medium-3 medium-uncentered columns clearfix">
            <div className="section-title-large">
              <span>MUTUAL SIGNINGS</span>
            </div>
          </div>
          <div className="row padding-bottom-lg">
            <div className="small-10 about-text small-centered medium-8 medium-uncentered columns">
              <p className="run-font">At <span className="run-font bold-italic">Next Move</span>, we know to recognize talents and the right situation for our players but we also specalize in make big signs for clubs, we call it <span className="run-font bold-italic">"game changer"</span>  We utilize our vast resources an experience and relationships.</p>
              <p className="run-font orange">We established our conection in europe, we are everywhere, we have high level partnets who allow us to get creative and high level deals done. this year we sign <span className="run-font bold-italic orange">NATE ROBINSON</span> in <span className="run-font bold-italic orange">Hapoel tel aviv</span>, NBA legend, three times dunk contest champion, it create hugh effect on the team and the leauge.</p>
              <p className="run-font">2012 we sign <span className="run-font bold-italic">Avery Bradley</span> Boston Celtics first round pick in <span className="run-font bold-italic">Hapoel Jerusalem</span> during lock out season we get <span className="run-font bold-italic">Gal Mekel</span> his first NBA work out with <span className="run-font bold-italic">UTAH JAZZ</span>, when he was under the radar after bad year in Treviso, we also sign Gal Mekel twice out side Israel with Euroleauge teams <span className="run-font bold-italic">Novogrod</span> and <span className="run-font bold-italic">Crven Zvedza-Red star</span></p>
              <p className="run-font">We upgrade <span className="run-font bold-italic">John Dibortolomeo</span> (ncaa3) from Spain Leb to Israeli Power house, <span className="run-font bold-italic">Maccabi Haifa</span> now he is one of the top 5 best israeli guards in the leauge.</p>
              <p className="run-font">we were involve in <span className="run-font bold-italic">K.C rivesrs</span> sign in <span className="run-font bold-italic">REAL MADRID</span> same year REAL won Euroleauge.</p>

              <div className="row padding-top-lg">
                <div className="small-up-1 medium-up-2 large-up-3 small-centered">
                  {players}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default MutualClients;
