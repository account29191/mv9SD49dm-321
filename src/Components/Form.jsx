import React, { Component } from "react";
import CustomComponent1 from "./CustomComponent1";
import CustomComponent2 from "./CustomComponent2";
import CustomComponent3 from "./CustomComponent3";
import CustomComponent4 from "./CustomComponent4";
import CustomComponent5 from "./CustomComponent5";
import CustomComponent6 from "./CustomComponent6";
import CustomComponent7 from "./CustomComponent7";
import CustomComponent8 from "./CustomComponent8";
import CustomComponent9 from "./CustomComponent9";
import CustomComponent10 from "./CustomComponent10";
import CustomComponent11 from "./CustomComponent11";
import CustomComponent12 from "./CustomComponent12";
class Form extends Component {
  state = {
    addedItem: "",
    addedItem1: "",
    addedItem2: "",
    addedItem3: "",
    addedItem4: "",
    addedItem5: "",
    addedItem6: "",
    addedItem7: "",
    addedItem8: "",
    addedItem9: "",
    addedItem10: "",
    addedItem11: "",
    addedItem12: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submitted");
  };

  handleChange = e => {
    const newItem = this.state;
    newItem.addedItem = e.currentTarget.value;
    this.setState({ newItem });
  };

  handleClick = () => {
    if (this.state.addedItem1 === "") {
      this.state.addedItem1 = this.state.addedItem;
    } else if (this.state.addedItem2 === "") {
      this.state.addedItem2 = this.state.addedItem;
    } else if (this.state.addedItem3 === "") {
      this.state.addedItem3 = this.state.addedItem;
    } else if (this.state.addedItem4 === "") {
      this.state.addedItem4 = this.state.addedItem;
    } else if (this.state.addedItem5 === "") {
      this.state.addedItem5 = this.state.addedItem;
    } else if (this.state.addedItem6 === "") {
      this.state.addedItem6 = this.state.addedItem;
    } else if (this.state.addedItem7 === "") {
      this.state.addedItem7 = this.state.addedItem;
    } else if (this.state.addedItem8 === "") {
      this.state.addedItem8 = this.state.addedItem;
    } else if (this.state.addedItem9 === "") {
      this.state.addedItem9 = this.state.addedItem;
    } else if (this.state.addedItem10 === "") {
      this.state.addedItem10 = this.state.addedItem;
    } else if (this.state.addedItem11 === "") {
      this.state.addedItem11 = this.state.addedItem;
    } else if (this.state.addedItem12 === "") {
      this.state.addedItem12 = this.state.addedItem;
    }

    this.setState({ addedItem: "" });
  };

  render() {
    return (
      <React.Fragment>
        <h3>Add Item</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="formGroup">
            <label htmlFor="addItemHere"></label>
            <input
              value={this.state.addedItem}
              onChange={this.handleChange}
              autoFocus
              ref={this.addItemHere}
              id="addItemHere"
              type="text"
              className="formControl"
            />
          </div>
          <button onClick={this.handleClick} className="button">
            Add to List
          </button>
          <div className="newField">{this.state.addedItem}</div>
          <div className="customComponents">
            <CustomComponent1 newItem1={this.state.addedItem1} />
            <CustomComponent2 newItem2={this.state.addedItem2} />
            <CustomComponent3 newItem3={this.state.addedItem3} />
            <CustomComponent4 newItem4={this.state.addedItem4} />
            <CustomComponent5 newItem5={this.state.addedItem5} />
            <CustomComponent6 newItem6={this.state.addedItem6} />
            <CustomComponent7 newItem7={this.state.addedItem7} />
            <CustomComponent8 newItem8={this.state.addedItem8} />
            <CustomComponent9 newItem9={this.state.addedItem9} />
            <CustomComponent10 newItem10={this.state.addedItem10} />
            <CustomComponent11 newItem11={this.state.addedItem11} />
            <CustomComponent12 newItem12={this.state.addedItem12} />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
