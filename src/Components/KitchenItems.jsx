import React, { Component } from "react";

class KitchenItems extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="kitchenItemsTitleDiv">
          <h2>Kitchen Items</h2>
          <h5>Kitchen Items Total {this.props.kitchenItemsTotal}</h5>
        </div>
        <div className="kitchenItemsDiv">
          <h4>Stove</h4>
          <h4>{this.props.stoveTotal}</h4>
          <button
            id="stoveButton"
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Stove
          </button>
          <button
            id="stoveButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Stove
          </button>

          <h4>Matches</h4>
          <h4>{this.props.matchesTotal}</h4>
          <button
            id="matchesButton"
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Matches
          </button>
          <button
            id="matchesButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Matches
          </button>
          <h4>Lighter</h4>
          <h4>{this.props.lighterTotal}</h4>
          <button
            id="lighterButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Lighter
          </button>
          <button
            id="lighterButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Lighter
          </button>
          <h4>Cooking Pot</h4>
          <h4>{this.props.cookingPotTotal}</h4>
          <button
            id="cookingPotButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Cooking Pot
          </button>
          <button
            id="cookingPotButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Cooking Pot
          </button>
          <h4>Frying Pan</h4>
          <h4>{this.props.fryingPanTotal}</h4>
          <button
            id="fryingPanButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Frying Pan
          </button>
          <button
            id="fryingPanButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Frying Pan
          </button>
          <h4>Eating Utensils</h4>
          <h4>{this.props.eatingUtensilsTotal}</h4>
          <button
            id="eatingUtensilsButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Eating Utensils
          </button>
          <button
            id="eatingUtensilsButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Eating Utensils
          </button>
          <h4>Cooking Utensils</h4>
          <h4>{this.props.cookingUtensilsTotal}</h4>
          <button
            id="cookingUtensilsButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Cooking Utensils
          </button>
          <button
            id="cookingUtensilsButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Cooking Utensils
          </button>

          <h4>Bottle Opener</h4>
          <h4>{this.props.bottleOpenerTotal}</h4>
          <button
            id="bottleOpenerButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Bottle Opener
          </button>
          <button
            id="bottleOpenerButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Bottle Opener
          </button>

          <h4>Can Opener</h4>
          <h4>{this.props.canOpenerTotal}</h4>
          <button
            id="canOpenerButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Can Opener
          </button>
          <button
            id="canOpenerButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Can Opener
          </button>

          <h4>Corkscrew</h4>
          <h4>{this.props.corkscrewTotal}</h4>
          <button
            id="corkscrewButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Corkscrew
          </button>
          <button
            id="corkscrewButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Corkscrew
          </button>

          <h4>Sharp Knife</h4>
          <h4>{this.props.sharpKnifeTotal}</h4>
          <button
            id="sharpKnifeButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Sharp Knife
          </button>
          <button
            id="sharpKnifeButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Sharp Knife
          </button>

          <h4>Plates</h4>
          <h4>{this.props.platesTotal}</h4>
          <button
            id="platesButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Plates
          </button>
          <button
            id="platesButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Plates
          </button>

          <h4>Bowls</h4>
          <h4>{this.props.bowlsTotal}</h4>
          <button
            id="bowlsButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Bowls
          </button>
          <button
            id="bowlsButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Bowls
          </button>

          <h4>Coffee Mugs</h4>
          <h4>{this.props.coffeeMugsTotal}</h4>
          <button
            id="coffeeMugsButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Coffee Mugs
          </button>
          <button
            id="coffeeMugButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Coffee Mug
          </button>
          <h4>Cups</h4>
          <h4>{this.props.cupsTotal}</h4>
          <button
            id="cupsButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Cups
          </button>
          <button
            id="cupsButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Cup
          </button>

          <h4>Cutting Board</h4>
          <h4>{this.props.cuttingBoardTotal}</h4>
          <button
            id="cuttingBoardButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Cutting Board
          </button>
          <button
            id="cuttingBoardButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Cutting Board
          </button>

          <h4>Cooler</h4>
          <h4>{this.props.coolerTotal}</h4>
          <button
            id="coolerButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Cooler
          </button>
          <button
            id="coolerButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Cooler
          </button>

          <h4>Dishwash Bin</h4>
          <h4>{this.props.dishwashBinTotal}</h4>
          <button
            id="dishwashBinButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Dishwash Bin
          </button>
          <button
            id="dishwashBinButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Dishwash Bin
          </button>

          <h4>Sponge</h4>
          <h4>{this.props.spongeTotal}</h4>
          <button
            id="spongeButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Sponge
          </button>
          <button
            id="spongeButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Sponge
          </button>
          <h4>Trash Bags</h4>
          <h4>{this.props.trashBagsTotal}</h4>
          <button
            id="trashBagsButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Trash Bags
          </button>
          <button
            id="trashBagsButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Trash Bags
          </button>

          <h4>Dish Towel</h4>
          <h4>{this.props.dishTowelTotal}</h4>
          <button
            id="dishtowelButton"
            value={this.props.value}
            className="button"
            onClick={this.props.onHandleIncrementTotal}
          >
            Add Dish Towel
          </button>
          <button
            id="dishTowelButton"
            className="button"
            onClick={this.props.onHandleDecrementTotal}
          >
            Remove Dish Towel
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default KitchenItems;
