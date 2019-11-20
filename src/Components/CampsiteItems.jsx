import React, { Component } from "react";

class Items extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="campsiteItemsTitleDiv">
          <h2>Campsite Items</h2>
          <h5>Campsite Items Total {this.props.campsiteItemsTotal}</h5>
        </div>
        <div className="campsiteItemsDiv">
          <h4>Tent</h4>
          <h4>{this.props.tentTotal}</h4>
          <button
            id="tentButton"
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Tent
          </button>

          <h4>Sleeping bag</h4>
          <h4>{this.props.sleepingBagTotal}</h4>
          <button
            id="sleepingBagButton"
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Sleeping bag
          </button>
          <h4>Sleeping Pad</h4>
          <h4>{this.props.sleepingPadTotal}</h4>
          <button
            id="sleepingPadButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Sleeping Pad
          </button>
          <h4>Camping Pillow</h4>
          <h4>{this.props.campingPillowTotal}</h4>
          <button
            id="campingPillowButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Camping Pillow
          </button>
          <h4>Flashlight</h4>
          <h4>{this.props.flashLightTotal}</h4>
          <button
            id="flashLightButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Flashlight
          </button>
          <h4>Camping Chair</h4>
          <h4>{this.props.campingChairTotal}</h4>
          <button
            id="campingChairButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Camping Chair
          </button>
          <h4>Lantern</h4>
          <h4>{this.props.lanternTotal}</h4>
          <button
            id="lanternButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Lantern
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Items;
