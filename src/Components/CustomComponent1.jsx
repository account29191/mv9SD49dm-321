import React, { Component } from "react";
import Form from "./Form";
class CustomComponent1 extends Component {
  state = {};
  render() {
    return (
      <div>
        <h4>{this.props.newItem1}</h4>
      </div>
    );
  }
}

export default CustomComponent1;
