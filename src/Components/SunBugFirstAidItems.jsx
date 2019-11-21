import React, { Component } from "react";

class SunBugFirstAidItems extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="sunBugFirstAidItemsTitleDiv">
          <h2>Sun, Bug and First Aid Items</h2>
          <h5>
            Sun, Bug and First Aid Items Total{" "}
            {this.props.sunBugFirstAidItemsTotal}
          </h5>
        </div>
        <div className="sunBugFirstAidItemsDiv">
          <h4>First Aid Kit</h4>
          <h4>{this.props.firstAidKitTotal}</h4>
          <button
            id="firstAidKitButton"
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add First Aid Kit
          </button>

          <h4>Alcohol Wipes</h4>
          <h4>{this.props.alcoholWipesTotal}</h4>
          <button
            id="alcoholWipesButton"
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Alcohol Wipes
          </button>
          <h4>Sun Screen</h4>
          <h4>{this.props.sunScreenTotal}</h4>
          <button
            id="sunScreenButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Sun Screen
          </button>
          <h4>Sun Glasses</h4>
          <h4>{this.props.sunGlassesTotal}</h4>
          <button
            id="sunGlassesButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Sun Glasses
          </button>
          <h4>Bug Spray</h4>
          <h4>{this.props.bugSprayTotal}</h4>
          <button
            id="bugSprayButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Bug Spray
          </button>
          <h4>Bear Spray</h4>
          <h4>{this.props.bearSprayTotal}</h4>
          <button
            id="bearSprayButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Bear Spray
          </button>
          <h4>Air Horn</h4>
          <h4>{this.props.airHornTotal}</h4>
          <button
            id="airHornButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Air Horn
          </button>

          <h4>Bandana</h4>
          <h4>{this.props.bandanaTotal}</h4>
          <button
            id="bandanaButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Bandana
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default SunBugFirstAidItems;
