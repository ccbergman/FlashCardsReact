import React, { Component } from 'react';
import { connect } from 'react-redux';
import { prevCard } from '../actions';

class Prev extends Component {
  render() {
    return (
      <button onClick={this.props.prevCard} disabled={this.props.disabled} className="Prev">
        Previous
        </button>
    );
  }
}

function maptStateToProps(state) {
  return {
    disabled: state.currentCardIndex <= 0
  };
}

const mapActionsToProps = {
  prevCard
};

export default connect(maptStateToProps, mapActionsToProps)(Prev);