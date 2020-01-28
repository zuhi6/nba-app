import React, { Component } from "react";
import { Spinner, Media } from "react-bootstrap";
import axios from "axios";

export default class Scorer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerPhotoUrl: null
    };
  }
  componentWillMount = () => {
    axios
      .get(
        `http://localhost:5000/photo?playerName=${this.props.player.name}&teamName=${this.props.teamName}`
      )
      .then(res => {
        this.setState({ playerPhotoUrl: res.data });
      });
  };

  render() {
    return (
      <div>
        {!this.state.playerPhotoUrl && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        {this.state.playerPhotoUrl && (
          <Media>
            <img
              width={254}
              height={182}
              className="mr-3"
              src={this.state.playerPhotoUrl}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>{this.props.player.name}</h5>
              <h6>{this.props.player[this.props.property]}</h6>
              <h4>{this.props.stats.fga}</h4>
            </Media.Body>
          </Media>
        )}
      </div>
    );
  }
}
