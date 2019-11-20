import React, { Component } from "react";

class TotalNumberOfItems extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="totalNumberOfItemsTitle">
          <h3>Total Number of Items: {this.props.numberTotal}</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default TotalNumberOfItems;
