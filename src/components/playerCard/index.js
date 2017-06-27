import React, { Component } from 'react';
import _ from 'lodash';
import Style from './playerCard.scss';

const PlayerCard = (props) => {
  let playerImage = _.get(props.player, 'image.fields.file.url') + '?w=130&h=167';
  let description = _.truncate(props.player.description, {length: 100});
  let lastTeam = _.get(props.player, 'lastTeamName', '')
    ? (<div className="clearfix font-player-run font-player-orange">
      <div className="float-left">{props.player.lastTeamYear}:</div>
      <div className="float-right">{props.player.lastTeamName}</div>
    </div>)
    : '';
  let league = _.get(props.player, 'league', '')
    ? (<div className="clearfix font-player-run font-player-orange">
      <div className="float-right">({props.player.league})</div>
    </div>)
    : '';
  let moreInfoLink = _.get(props.player, 'moreInfoLink', '');
  let moreInfoLinkHtml = moreInfoLink
    ? <a href="{moreInfoLink}" target="_blank">More info</a>
    : '';

  return (
    <div className="player-card-wrap">
      <div className="player-card-image-section">
        <div className="player-card-image-strip">
          <div className="player-card-image-strip-grey"></div>
          <div className="player-card-image-strip-orange"></div>
        </div>
        <div className="player-card-image">
          <img src={playerImage}></img>
        </div>
      </div>
      <div className="player-card-info-section">
        <div className="font-player-title">{props.player.name}</div>
        <div className="clearfix">
          <div className="font-player-run font-player-black float-left">{props.player.position}</div>
          <div className="font-player-run font-player-grey float-right">
            {props.player.heightCm} | {props.player.heightInch}
          </div>
        </div>
        <div className="clearfix born-wrap">
          <div className="font-player-run font-player-black float-left">Born:</div>
          <div className="font-player-run font-player-grey float-left">{props.player.born}</div>
        </div>
        {lastTeam}
        {league}
        <div className="font-player-run-bigger font-player-grey description-wrap">
          {description}
        </div>
        {moreInfoLinkHtml}
      </div>
    </div>
  );
}

export default PlayerCard;
