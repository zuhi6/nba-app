import React, { Component } from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import TeamScorers from './TeamScorers';

export default class TopScorers extends Component {
  render() {
    return (
      <div>
        <h4>Leaders</h4>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    {this.props.leaders.hLeaders.teamShortName}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    {this.props.leaders.vLeaders.teamShortName}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <TeamScorers eventKey='first' leaders={this.props.leaders.hLeaders} stats={this.props.leaders.stats}></TeamScorers>
                <TeamScorers eventKey='second' leaders={this.props.leaders.vLeaders} stats={this.props.leaders.stats}></TeamScorers>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}
