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
                    <TeamLogoAndName reversed='true' shortName={this.props.score.hTeam.shortName} name={this.props.score.hTeam.nickName}></TeamLogoAndName>
                </td>
                <td><h5>{this.props.score.hTeam.score.points} : {this.props.score.vTeam.score.points}</h5></td>
                <td>
                    <TeamLogoAndName reversed='false' shortName={this.props.score.vTeam.shortName} name={this.props.score.vTeam.nickName}></TeamLogoAndName>
                </td>
                <td>{this.props.score.arena}</td>
                <td><Button variant="info" onClick={() => this.props.showDetail(this.props.score.gameId)}>Info</Button></td>
            </tr>

        )
    }
}
