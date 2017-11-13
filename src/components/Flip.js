import React, { Component } from 'react';
import { connect } from 'react-redux';
import { flipCard } from '../actions';

class Flip extends Component {
  render() {
    return (
      <button onClick={this.props.flipCard} className="Flip">
        Flip Over
        </button>
    );
  }
}

const mapActionsToProps = {
  flipCard: flipCard
};

export default connect(null, mapActionsToProps)(Flip);