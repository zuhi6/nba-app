import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Scores from './components/Scores';
import { Row, Col, Container } from 'react-bootstrap';
import DateComponent from './components/DateComponent';
import './App.css';



class App extends Component {

  
  handleNavBar = (eventKey) => {
    console.log(eventKey);
  }

  handleDateChange = (day) => {
    if(!this.scores) {
      return null;
    }
    this.scores.updateDate(day);
  }
  render() {
    return (
      <div>

        <Navigation onSelect={this.handleNavBar}></Navigation>
        <Container fluid='true'>
          <Row style={{ width: '100%' }}>
            <Col xs lg="2">
              <DateComponent notifyParent={this.handleDateChange}></DateComponent>
            </Col>
            <Col lg='10'>
              <Scores ref={instance => { this.scores = instance; }}></Scores>
            </Col>
          </Row>
        </Container>


      </div>
    );
  }
}

export default App;
