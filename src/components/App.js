import React, { Component } from 'react';
import Card from './Card';
import Flip from './Flip';
import Next from './Next';
import Prev from './Prev';
import Shuffle from './Shuffle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Facebook Front-End Flashcards</h1>
        <div className="CardDirectionals">
          <Prev />
          <Card />
          <Next />
        </div>
        <div className="CardControls">
          <Flip />
          <Shuffle />
        </div>
      </div>
    );
  }
}

export default App;