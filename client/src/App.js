import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Scores from './components/Scores';
import { Row, Col, Container} from 'react-bootstrap';
import DateComponent from './components/DateComponent';
import './App.css';



class App extends Component {

  handleNavBar = (eventKey) => {
    console.log(eventKey);
  }

  render() {
    return (
      <div>

        <Navigation onSelect={this.handleNavBar}></Navigation>
        <Container fluid='true'>
          <Row style={{width:'100%'}}>
            <Col xs lg="2">
              <DateComponent></DateComponent>
            </Col>
            <Col lg='10'>
              <Scores></Scores>
            </Col>
          </Row>
        </Container>
        
        
      </div>
    );
  }
}

export default App;
