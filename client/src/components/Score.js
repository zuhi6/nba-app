import React, { Component } from 'react'
import moment from 'moment';
import { Button } from 'react-bootstrap';
import TeamLogoAndName from './TeamLogoAndName';

export default class Score extends Component {

    render() {
        return (
            <tr>
                <td>{moment(this.props.score.startTimeUTC).format("dddd, MMM DD, HH:mm")}</td>
                <td>
                    <TeamLogoAndName logo={this.props.score.hTeam.logo} name={this.props.score.hTeam.fullName}></TeamLogoAndName>
                </td>
                <td><h5>{this.props.score.hTeam.score.points} : {this.props.score.vTeam.score.points}</h5></td>
                <td>
                    <TeamLogoAndName logo={this.props.score.vTeam.logo} name={this.props.score.vTeam.fullName}></TeamLogoAndName>
                </td>
                <td>{this.props.score.arena}</td>
                <td><Button variant="info" onClick={() => this.props.showDetail(this.props.score.gameId)}>Info</Button></td>
            </tr>

        )
    }
}
