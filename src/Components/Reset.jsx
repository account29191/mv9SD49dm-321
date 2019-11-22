import React, { Component } from "react";

class Reset extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <button className="button" onClick={this.props.resetButton}>
          Reset Totals
        </button>
      </React.Fragment>
    );
  }
}

export default Reset;
