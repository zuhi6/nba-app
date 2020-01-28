import React, { Component } from "react";
import moment from "moment";
import { Button } from "react-bootstrap";
import TeamLogoAndName from "./TeamLogoAndName";

export default class Score extends Component {
  formatResult = (hTeam, vTeam) => {
    console.log(hTeam, vTeam);
    if (hTeam === '' || vTeam === '') {
      return <h5>TBD</h5>;
    }
    return +hTeam > +vTeam ? (
      <h5>
        {hTeam} :{" "}
        <span style={{ color: "grey", fontSize: "95%" }}>{vTeam}</span>
      </h5>
    ) : (
      <h5>
        <span style={{ color: "grey", fontSize: "95%" }}>{hTeam}</span> :{" "}
        {vTeam}
      </h5>
    );
  };

  render() {
    return (
      <tr>
        <td>
          {moment(this.props.score.startTimeUTC).format("dddd, MMM DD, HH:mm")}
        </td>
        <td>
          <TeamLogoAndName
            reversed="true"
            shortName={this.props.score.hTeam.shortName}
            name={this.props.score.hTeam.nickName}
          ></TeamLogoAndName>
        </td>
        <td>
          {this.formatResult(
            this.props.score.hTeam.score.points,
            this.props.score.vTeam.score.points
          )}
        </td>
        <td>
          <TeamLogoAndName
            reversed="false"
            shortName={this.props.score.vTeam.shortName}
            name={this.props.score.vTeam.nickName}
          ></TeamLogoAndName>
        </td>
        <td>{this.props.score.arena}</td>
        <td>
          <Button
            variant="info"
            onClick={() => this.props.showDetail(this.props.score.gameId)}
          >
            Info
          </Button>
        </td>
      </tr>
    );
  }
}
