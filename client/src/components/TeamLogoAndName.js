import React, { Component } from 'react';
import {Media} from 'react-bootstrap';

export default class TeamLogoAndName extends Component {
    render() {
        return (
            <Media>
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src={this.props.logo}
                    alt="Generic placeholder"
                />
                <Media.Body>
                    <h5>{this.props.name}</h5>
                </Media.Body>
            </Media>
        )
    }
}
