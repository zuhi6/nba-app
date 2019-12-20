import React, { Component } from 'react';
import {Media} from 'react-bootstrap';

export default class TeamLogoAndName extends Component {

    
    render() {
        const image = (<img
            width={64}
            height={64}
            className="mr-3"
            src={require(`../images/${this.props.shortName}.png`)}
            alt="Generic placeholder"
        />);
        return (
            
            <Media>
                {this.props.reversed === 'false' && image}                
                <Media.Body>
                    <h5>{this.props.name}</h5>
                </Media.Body>
                {this.props.reversed === 'true' && image}
            </Media>
        )
    }
}
