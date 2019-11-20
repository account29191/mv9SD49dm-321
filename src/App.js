import React, { Component } from "react";
import "./App.css";
import Title from "./Components/Title";
import TotalNumberOfItems from "./Components/TotalNumberOfItems";
import CampsiteItems from "./Components/CampsiteItems";
import KitchenItems from "./Components/KitchenItems";

class App extends Component {
  state = {
    total: 0,
    tentTotal: 0,
    sleepingBagTotal: 0,
    sleepingPadTotal: 0,
    campingPillowTotal: 0,
    flashLightTotal: 0,
    campingChairTotal: 0,
    lanternTotal: 0,
    campsiteItemsTotal: 0,

    stoveTotal: 0,
    matchesTotal: 0,
    lighterTotal: 0,
    cookingPotTotal: 0,
    fryingPanTotal: 0,
    eatingUtensilsTotal: 0,
    cookingUtensilsTotal: 0,
    bottleOpenerTotal: 0,
    canOpenerTotal: 0,
    corkscrewTotal: 0,
    sharpKnifeTotal: 0,
    platesTotal: 0,
    bowlsTotal: 0,
    coffeeMugsTotal: 0,
    cupsTotal: 0,
    cuttingBoardTotal: 0,
    coolerTotal: 0,
    dishwashBinTotal: 0,
    spongeTotal: 0,
    trashBagsTotal: 0,
    dishTowelTotal: 0,
    kitchenItemsTotal: 0
  };

  handleIncrementTotal = event => {
    this.addToGrandTotal();
    this.addToCampsiteTotal(event);

    this.addToKitchenTotal(event);
  };

  addToKitchenTotal(event) {
    console.log("clicked");
    if (event.target.id === "stoveButton") {
      this.setState({ stoveTotal: this.state.stoveTotal + 1 });
      console.log(this.state.stoveTotal + 1);
      console.log("stove");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "matchesButton") {
      this.setState({ matchesTotal: this.state.matchesTotal + 1 });
      console.log(this.state.matchesTotal + 1);
      console.log("matches");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "lighterButton") {
      this.setState({ lighterTotal: this.state.lighterTotal + 1 });
      console.log(this.state.lighterTotal + 1);
      console.log("lighter");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "cookingPotButton") {
      this.setState({ cookingPotTotal: this.state.cookingPotTotal + 1 });
      console.log(this.state.cookingPotTotal + 1);
      console.log("cookingPot");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "fryingPanButton") {
      this.setState({ fryingPanTotal: this.state.fryingPanTotal + 1 });
      console.log(this.state.fryingPanTotal + 1);
      console.log("fryingPan");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "eatingUtensilsButton") {
      this.setState({
        eatingUtensilsTotal: this.state.eatingUtensilsTotal + 1
      });
      console.log(this.state.eatingUtensilsTotal + 1);
      console.log("eatingUtensils");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "cookingUtensilsButton") {
      this.setState({
        cookingUtensilsTotal: this.state.cookingUtensilsTotal + 1
      });
      console.log(this.state.cookingUtensilsTotal + 1);
      console.log("cookingUtensils");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "bottleOpenerButton") {
      this.setState({ bottleOpenerTotal: this.state.bottleOpenerTotal + 1 });
      console.log(this.state.bottleOpenerTotal + 1);
      console.log("bottleOpener");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "canOpenerButton") {
      this.setState({ canOpenerTotal: this.state.canOpenerTotal + 1 });
      console.log(this.state.canOpenerTotal + 1);
      console.log("canOpener");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "corkscrewButton") {
      this.setState({ corkscrewTotal: this.state.corkscrewTotal + 1 });
      console.log(this.state.corkscrewTotal + 1);
      console.log("corkscrew");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "sharpKnifeButton") {
      this.setState({ sharpKnifeTotal: this.state.sharpKnifeTotal + 1 });
      console.log(this.state.sharpKnifeTotal + 1);
      console.log("sharpKnife");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "platesButton") {
      this.setState({ platesTotal: this.state.platesTotal + 1 });
      console.log(this.state.platesTotal + 1);
      console.log("plates");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "bowlsButton") {
      this.setState({ bowlsTotal: this.state.bowlsTotal + 1 });
      console.log(this.state.bowlsTotal + 1);
      console.log("bowls");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "coffeeMugsButton") {
      this.setState({ coffeeMugsTotal: this.state.coffeeMugsTotal + 1 });
      console.log(this.state.coffeeMugsTotal + 1);
      console.log("coffeeMugs");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "cupsButton") {
      this.setState({ cupsTotal: this.state.cupsTotal + 1 });
      console.log(this.state.cupsTotal + 1);
      console.log("cups");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "cuttingBoardButton") {
      this.setState({ cuttingBoardTotal: this.state.cuttingBoardTotal + 1 });
      console.log(this.state.cuttingBoardTotal + 1);
      console.log("cuttingBoard");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "coolerButton") {
      this.setState({ coolerTotal: this.state.coolerTotal + 1 });
      console.log(this.state.coolerTotal + 1);
      console.log("cooler");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "dishwashBinButton") {
      this.setState({ dishwashBinTotal: this.state.dishwashBinTotal + 1 });
      console.log(this.state.dishwashBinTotal + 1);
      console.log("dishwashBin");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "spongeButton") {
      this.setState({ spongeTotal: this.state.spongeTotal + 1 });
      console.log(this.state.spongeTotal + 1);
      console.log("sponge");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "trashBagsButton") {
      this.setState({ trashBagsTotal: this.state.trashBagsTotal + 1 });
      console.log(this.state.trashBagsTotal + 1);
      console.log("trashBags");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "dishTowelButton") {
      this.setState({ dishTowelTotal: this.state.dishTowelTotal + 1 });
      console.log(this.state.dishTowelTotal + 1);
      console.log("dishTowel");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    }
  }

  addToGrandTotal() {
    this.setState({ total: this.state.total + 1 });
    console.log(this.state.total + 1);
  }

  addToCampsiteTotal(event) {
    if (event.target.id === "tentButton") {
      this.setState({ tentTotal: this.state.tentTotal + 1 });
      console.log(this.state.tentTotal + 1);
      console.log("tent");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "sleepingBagButton") {
      this.setState({ sleepingBagTotal: this.state.sleepingBagTotal + 1 });
      console.log(this.state.sleepingBagTotal + 1);
      console.log("sleepingBag");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "sleepingPadButton") {
      this.setState({ sleepingPadTotal: this.state.sleepingPadTotal + 1 });
      console.log(this.state.sleepingPadTotal + 1);
      console.log("sleepingPad");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "campingPillowButton") {
      this.setState({ campingPillowTotal: this.state.campingPillowTotal + 1 });
      console.log(this.state.campingPillowTotal + 1);
      console.log("campingPillow");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "flashLightButton") {
      this.setState({ flashLightTotal: this.state.flashLightTotal + 1 });
      console.log(this.state.flashLightTotal + 1);
      console.log("flashLight");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "campingChairButton") {
      this.setState({ campingChairTotal: this.state.campingChairTotal + 1 });
      console.log(this.state.campingChairTotal + 1);
      console.log("campingChair");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "lanternButton") {
      this.setState({ lanternTotal: this.state.lanternTotal + 1 });
      console.log(this.state.lanternTotal + 1);
      console.log("lantern");
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    }
  }

  render() {
    return (
      <div>
        <Title />
        <TotalNumberOfItems numberTotal={this.state.total} />
        <CampsiteItems
          onHandleIncrementTotal={this.handleIncrementTotal}
          campsiteItemsTotal={this.state.campsiteItemsTotal}
          tentTotal={this.state.tentTotal}
          sleepingBagTotal={this.state.sleepingBagTotal}
          sleepingPadTotal={this.state.sleepingPadTotal}
          campingPillowTotal={this.state.campingPillowTotal}
          flashLightTotal={this.state.flashLightTotal}
          campingChairTotal={this.state.campingChairTotal}
          lanternTotal={this.state.lanternTotal}
          tentItems={this.state.tentTotal}
        />
        <KitchenItems
          onHandleIncrementTotal={this.handleIncrementTotal}
          kitchenItemsTotal={this.state.kitchenItemsTotal}
          stoveTotal={this.state.stoveTotal}
          matchesTotal={this.state.matchesTotal}
          lighterTotal={this.state.lighterTotal}
          cookingPotTotal={this.state.cookingPotTotal}
          fryingPanTotal={this.state.fryingPanTotal}
          eatingUtensilsTotal={this.state.eatingUtensilsTotal}
          cookingUtensilsTotal={this.state.cookingUtensilsTotal}
          bottleOpenerTotal={this.state.bottleOpenerTotal}
          canOpenerTotal={this.state.canOpenerTotal}
          corkscrewTotal={this.state.corkscrewTotal}
          sharpKnifeTotal={this.state.sharpKnifeTotal}
          platesTotal={this.state.platesTotal}
          bowlsTotal={this.state.bowlsTotal}
          coffeeMugsTotal={this.state.coffeeMugsTotal}
          cupsTotal={this.state.cupsTotal}
          cuttingBoardTotal={this.state.cuttingBoardTotal}
          coolerTotal={this.state.coolerTotal}
          dishwashBinTotal={this.state.dishwashBinTotal}
          spongeTotal={this.state.spongeTotal}
          trashBagsTotal={this.state.trashBagsTotal}
          dishTowelTotal={this.state.dishTowelTotal}
        />
      </div>
    );
  }
}

export default App;
