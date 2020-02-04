import React, { Component } from "react";
import { Spinner, Media, Container, Row, Col } from "react-bootstrap";
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
              style={{"border-radius": "20%","border":"1px solid black","box-shadow": "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)"}}
              src={this.state.playerPhotoUrl}
              alt="Generic placeholder"
            />
            <Media.Body>
            <h5>{this.props.player.name}</h5>
              <Container>
                <Row className="justify-content-md-center">
                  <Col xs lg="8">
                    <p>{this.props.player[this.props.property]}</p>
                    
                  </Col>
                  <Col xs lg="8">
                  <p>{this.props.property}</p>
                    
                  </Col>
               

                </Row>
              
              </Container>
            
            </Media.Body>
          </Media>
        )}
      </div>
    );
  }
}
