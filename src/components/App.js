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
      <Card/>
      <Prev/>
      <Flip/>
      <Shuffle/>
      <Next/>
      </div>
    );
  }
}

export default App;
