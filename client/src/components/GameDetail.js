import React, { Component, Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import GameHeader from "./GameHeader";
import TopScorers from "./TopScorers";
import axios from "axios";
import "./gameDetail.css";

export default class GameDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameInfo: null
    };
  }
  getGameDetail = () => {
    axios
      .get(`http://localhost:5000/gameDetail?gameId=${this.props.gameId}`)
      .then(res => {
        this.setState({ gameInfo: res.data },()=> this.getTopScorers()); 
      });
  };

  getTeamLeaders = team => {
    const leaders = this.state.gameInfo[team].leaders;
    return {
      teamFullName: this.state.gameInfo[team].fullName,
      teamShortName: this.state.gameInfo[team].shortName,
      gameId: this.state.gameInfo.gameId,
      points: Object.keys(leaders).reduce(
        (acc, curr) =>
          acc.points
            ? +leaders[curr].points > +acc.points
              ? leaders[curr]
              : acc
            : leaders[curr],
        {}
      ),
      assists: Object.keys(leaders).reduce(
        (acc, curr) =>
          acc.assists
            ? +leaders[curr].assists > +acc.assists
              ? leaders[curr]
              : acc
            : leaders[curr],
        {}
      ),
      rebounds: Object.keys(leaders).reduce(
        (acc, curr) =>
          acc.rebounds
            ? +leaders[curr].rebounds > +acc.rebounds
              ? leaders[curr]
              : acc
            : leaders[curr],
        {}
      )
    };
  };
  getTopScorers = () => {
    const hLeaders = this.getTeamLeaders("hTeam");
    const vLeaders = this.getTeamLeaders("vTeam");
    this.getMoreStats(hLeaders, vLeaders);
    this.setState({topScorers: {
        hLeaders,
        vLeaders
    }})
  };

  getMoreStats = (hLeaders, vLeaders) => {
    const playerIds = [
      hLeaders.points.playerId,
      hLeaders.assists.playerId,
      hLeaders.rebounds.playerId,
      vLeaders.points.playerId,
      vLeaders.assists.playerId,
      vLeaders.rebounds.playerId
    ];

    axios
      .get(`http://localhost:5000/player`, {
        params: { playerIds, gameId: hLeaders.gameId }
      })
      .then(res => {
          this.setState({stats: res.data }) ;
      });
  };

  componentWillMount = () => {
    this.getGameDetail();
    
  };

  render() {
    return (
      <Fragment>
        <Modal.Header closeButton>
          <Modal.Title>Game Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body className="container">
          {this.state.gameInfo && this.state.topScorers && this.state.stats && (
            <Fragment>
              <GameHeader gameInfo={this.state.gameInfo}></GameHeader>
              <TopScorers leaders={{hLeaders: this.state.topScorers.hLeaders, vLeaders: this.state.topScorers.vLeaders, stats: this.state.stats}}></TopScorers>
            </Fragment>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Fragment>
    );
  }
}
