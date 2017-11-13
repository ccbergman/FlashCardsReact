import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shuffleCards } from '../actions';

class Shuffle extends Component {
  render() {
    return (
        <button onClick={this.props.shuffleCards} className="Shuffle">
        Shuffle
        </button>
    );
  }
}

const mapActionsToProps = {
  shuffleCards
};

export default connect(null, mapActionsToProps)(Shuffle);