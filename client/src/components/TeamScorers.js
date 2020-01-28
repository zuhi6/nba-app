import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Scorer from "./Scorer";

export default class TeamScorers extends Component {

  getStats = (playerId) => {
    
    return this.props.stats.find(player => player.playerId === playerId);

  }
  render() {
    return (
      <Tab.Pane eventKey={this.props.eventKey}>
        <Tabs
          defaultActiveKey="points"
          transition={false}
          id="noanim-tab-example"
        >
          <Tab eventKey="points" title="Points">
            <Scorer property="points" player={this.props.leaders.points} teamName={this.props.leaders.teamFullName} stats={this.getStats(this.props.leaders.points.playerId)}></Scorer>
          </Tab>
          <Tab eventKey="assists" title="Assists">
            <Scorer property="assists" player={this.props.leaders.assists} teamName={this.props.leaders.teamFullName} stats={this.getStats(this.props.leaders.assists.playerId)}></Scorer>
          </Tab>

          <Tab eventKey="rebounds" title="Rebounds">
            <Scorer property="rebounds" player={this.props.leaders.rebounds} teamName={this.props.leaders.teamFullName} stats={this.getStats(this.props.leaders.rebounds.playerId)}></Scorer>
          </Tab>
        </Tabs>
      </Tab.Pane>
    );
  }
}
