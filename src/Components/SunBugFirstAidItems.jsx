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
          <h4 className="number">{this.props.firstAidKitTotal}</h4>
          <button
            id="firstAidKitButton"
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add First Aid Kit
          </button>
          <button
            id="firstAidKitButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove FirstAidKit
          </button>

          <h4>Alcohol Wipes</h4>
          <h4 className="number">{this.props.alcoholWipesTotal}</h4>
          <button
            id="alcoholWipesButton"
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Alcohol Wipes
          </button>
          <button
            id="alcoholWipesButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Alcohol Wipes
          </button>
          <h4>Sun Screen</h4>
          <h4 className="number">{this.props.sunScreenTotal}</h4>
          <button
            id="sunScreenButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Sun Screen
          </button>
          <button
            id="sunScreenButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Sun Screen
          </button>
          <h4>Sun Glasses</h4>
          <h4 className="number">{this.props.sunGlassesTotal}</h4>
          <button
            id="sunGlassesButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Sun Glasses
          </button>
          <button
            id="sunGlassesButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Sun Glasses
          </button>
          <h4>Bug Spray</h4>
          <h4 className="number">{this.props.bugSprayTotal}</h4>
          <button
            id="bugSprayButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Bug Spray
          </button>
          <button
            id="bugSprayButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Bug Spray
          </button>
          <h4>Bear Spray</h4>
          <h4 className="number">{this.props.bearSprayTotal}</h4>
          <button
            id="bearSprayButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Bear Spray
          </button>
          <button
            id="bearSprayButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Bear Spray
          </button>
          <h4>Air Horn</h4>
          <h4 className="number">{this.props.airHornTotal}</h4>
          <button
            id="airHornButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Air Horn
          </button>
          <button
            id="airHornButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Air Horn
          </button>

          <h4>Bandana</h4>
          <h4 className="number">{this.props.bandanaTotal}</h4>
          <button
            id="bandanaButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Bandana
          </button>
          <button
            id="bandanaButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Bandana
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default SunBugFirstAidItems;
