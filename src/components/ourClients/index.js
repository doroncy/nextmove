import React, { Component } from 'react';
import Style from './playerCard.scss';

const PlayerCard = (props) => {
  return (
    <div className="player-card-wrap">
      <div className="player-card-image-section">
        <div className="player-card-image-strip">
          <div className="player-card-image-strip-grey"></div>
          <div className="player-card-image-strip-orange"></div>
        </div>
        <div className="player-card-image">
          <img src={props.player.image}></img>
        </div>
      </div>
      <div className="player-card-info-section">
        <div className="font-player-title">{props.player.name}</div>
        <div className="clearfix">
          <div className="font-player-run font-player-black float-left">{props.player.position}</div>
          <div className="font-player-run font-player-grey float-right">
            {props.player.weight} | {props.player.height}
          </div>
        </div>
        <div className="clearfix">
          <div className="font-player-run font-player-black float-left">Born:</div>
          <div className="font-player-run font-player-grey float-left">{props.player.born}</div>
        </div>
        <div className="clearfix font-player-run font-player-orange">
          <div className="float-left">{props.player.plays.season}</div>
          <div className="float-right">{props.player.plays.team}</div>
        </div>
        <div className="clearfix font-player-run font-player-orange">
          <div className="float-right">{props.player.plays.league}</div>
        </div>
        <div className="font-player-run font-player-grey">{props.player.shortDescription}</div>
      </div>
    </div>
  );
}

export default PlayerCard;
