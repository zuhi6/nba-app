import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Scores from './components/Scores';
import './App.css';



class App extends Component {

  handleNavBar = (eventKey) => {
    console.log(eventKey);
  }

  render() {
    return (
      <div>
        <Navigation onSelect={this.handleNavBar}></Navigation>
        <Scores></Scores>
        
      </div>
    );
  }
}

export default App;
