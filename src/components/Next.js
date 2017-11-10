import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nextCard } from '../actions';


class Next extends Component {
  render() {
    return (
      <button onClick={this.props.nextCard} disabled={this.props.disabled} className="Next">
        Next Card
        </button>
    );
  }
}

function maptStateToProps(state) {
  return {
    disabled: state.currentCardIndex >= state.cards.length -1
  };
}

const mapActionsToProps = {
  nextCard: nextCard
};

export default connect(maptStateToProps, mapActionsToProps)(Next);