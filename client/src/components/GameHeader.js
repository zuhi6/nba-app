import React, { Component } from 'react'
import TeamLogoAndName from './TeamLogoAndName';
import {Container, Row, Col } from 'react-bootstrap';

export default class GameHeader extends Component {




  formatResult = (hTeam, vTeam) => {
    return (hTeam > vTeam ? <h4>{hTeam} : <span style={{color:'grey',fontSize:'95%'}}>{vTeam}</span></h4> : 
    <h4><span style={{color:'grey',fontSize:'95%'}}>{hTeam}</span> : {vTeam}</h4>)
    
  }

  render() {
    return (
      <div>
        {this.props.gameInfo &&
          <Container>
            <Row className="show-grid align-items-center">
              <Col md={4}>
                  <TeamLogoAndName reversed='true' logo={this.props.gameInfo.hTeam.logo} name={this.props.gameInfo.hTeam.fullName} shortName={this.props.gameInfo.hTeam.shortName}></TeamLogoAndName>
              </Col>
              <Col md={4}>
                  {this.formatResult(this.props.gameInfo.hTeam.score.points, this.props.gameInfo.vTeam.score.points)}
              </Col>
              <Col md={4}>
                  <TeamLogoAndName reversed='false' logo={this.props.gameInfo.vTeam.logo} name={this.props.gameInfo.vTeam.fullName} shortName={this.props.gameInfo.vTeam.shortName}></TeamLogoAndName>
              </Col>
            </Row>

              <Row className="show-grid">

              </Row>
          </Container>
        }
      </div>
    )
  }
}
