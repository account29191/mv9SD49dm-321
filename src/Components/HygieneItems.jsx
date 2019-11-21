import React, { Component } from "react";

class HygieneItems extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="hygieneItemsTitleDiv">
          <h2>Hygiene tems</h2>
          <h5>Hygiene Items Total {this.props.hygieneItemsTotal}</h5>
        </div>
        <div className="hygieneItemsDiv">
          <h4>Toilet Paper</h4>
          <h4>{this.props.toiletPaperTotal}</h4>
          <button
            id="toiletPaperButton"
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Toilet Paper
          </button>

          <h4>Hand Sanitizer</h4>
          <h4>{this.props.handSanitizerTotal}</h4>
          <button
            id="handSanitizerButton"
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Hand Sanitizer
          </button>
          <h4>Toothbrush</h4>
          <h4>{this.props.toothbrushTotal}</h4>
          <button
            id="toothbrushButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Toothbrush
          </button>
          <h4>Toothpaste</h4>
          <h4>{this.props.toothpasteTotal}</h4>
          <button
            id="toothpasteButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Toothpaste
          </button>
          <h4>Towel</h4>
          <h4>{this.props.towelTotal}</h4>
          <button
            id="towelButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Towel
          </button>
          <h4>Soap</h4>
          <h4>{this.props.soapTotal}</h4>
          <button
            id="soapButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Soap
          </button>
          <h4>Shampoo</h4>
          <h4>{this.props.shampooTotal}</h4>
          <button
            id="shampooButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Shampoo
          </button>

          <h4>Floss</h4>
          <h4>{this.props.flossTotal}</h4>
          <button
            id="flossButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Floss
          </button>

          <h4>Deodorant</h4>
          <h4>{this.props.deodorantTotal}</h4>
          <button
            id="deodorantButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Deodorant
          </button>

          <h4>Lip Balm</h4>
          <h4>{this.props.lipBalmTotal}</h4>
          <button
            id="lipBalmButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Lip Balm
          </button>

          <h4>Razor</h4>
          <h4>{this.props.razorTotal}</h4>
          <button
            id="razorButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Razor
          </button>

          <h4>Comb</h4>
          <h4>{this.props.combTotal}</h4>
          <button
            id="combButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Comb
          </button>

          <h4>Mirror</h4>
          <h4>{this.props.mirrorTotal}</h4>
          <button
            id="mirrorButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Mirror
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default HygieneItems;
