import React, { Component } from "react";
import "./App.css";
import Title from "./Components/Title";
import TotalNumberOfItems from "./Components/TotalNumberOfItems";
import CampsiteItems from "./Components/CampsiteItems";
import KitchenItems from "./Components/KitchenItems";
import HygieneItems from "./Components/HygieneItems";
import SunBugFirstAidItems from "./Components/SunBugFirstAidItems";

class App extends Component {
  state = {
    //Campsite Items
    total: 0,
    tentTotal: 0,
    sleepingBagTotal: 0,
    sleepingPadTotal: 0,
    campingPillowTotal: 0,
    flashLightTotal: 0,
    campingChairTotal: 0,
    lanternTotal: 0,
    campsiteItemsTotal: 0,
    //Kitchen Items
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
    kitchenItemsTotal: 0,
    //Hygiene Items
    toiletPaperTotal: 0,
    handSanitizerTotal: 0,
    toothbrushTotal: 0,
    toothpasteTotal: 0,
    towelTotal: 0,
    soapTotal: 0,
    shampooTotal: 0,
    flossTotal: 0,
    deodorantTotal: 0,
    lipBalmTotal: 0,
    razorTotal: 0,
    combTotal: 0,
    mirrorTotal: 0,
    hygieneItemsTotal: 0,
    //Sun Bug and First Aid Items
    firstAidKitTotal: 0,
    alcoholWipesTotal: 0,
    sunScreenTotal: 0,
    sunGlassesTotal: 0,
    bugSprayTotal: 0,
    bearSprayTotal: 0,
    airHornTotal: 0,
    sunBugFirstAidItemsTotal: 0
  };

  handleIncrementTotal = event => {
    this.addToGrandTotal();
    this.addToCampsiteTotal(event);
    this.addToKitchenTotal(event);
    this.addToHygieneTotal(event);

    this.sunBugFirstAidTotal(event);
  };

  sunBugFirstAidTotal(event) {
    if (event.target.id === "firstAidKitButton") {
      this.setState({ firstAidKitTotal: this.state.firstAidKitTotal + 1 });
      console.log(this.state.firstAidKitTotal + 1);
      console.log("firstAidKit");
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal + 1
      });
    } else if (event.target.id === "alcoholWipesButton") {
      this.setState({ alcoholWipesTotal: this.state.alcoholWipesTotal + 1 });
      console.log(this.state.alcoholWipesTotal + 1);
      console.log("alcoholWipes");
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal + 1
      });
    } else if (event.target.id === "sunScreenButton") {
      this.setState({ sunScreenTotal: this.state.sunScreenTotal + 1 });
      console.log(this.state.sunScreenTotal + 1);
      console.log("sunScreen");
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal + 1
      });
    } else if (event.target.id === "sunGlassesButton") {
      this.setState({ sunGlassesTotal: this.state.sunGlassesTotal + 1 });
      console.log(this.state.sunGlassesTotal + 1);
      console.log("sunGlasses");
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal + 1
      });
    } else if (event.target.id === "bugSprayButton") {
      this.setState({ bugSprayTotal: this.state.bugSprayTotal + 1 });
      console.log(this.state.bugSprayTotal + 1);
      console.log("bugSpray");
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal + 1
      });
    } else if (event.target.id === "bearSprayButton") {
      this.setState({
        bearSprayTotal: this.state.bearSprayTotal + 1
      });
      console.log(this.state.bearSprayTotal + 1);
      console.log("bearSpray");
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal + 1
      });
    } else if (event.target.id === "airHornButton") {
      this.setState({
        airHornTotal: this.state.airHornTotal + 1
      });
      console.log(this.state.airHornTotal + 1);
      console.log("airHorn");
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal + 1
      });
    } else if (event.target.id === "bandanaButton") {
      this.setState({
        bandanaTotal: this.state.bandanaTotal + 1
      });
      console.log(this.state.bandanaTotal + 1);
      console.log("bandana");
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal + 1
      });
    }
  }

  addToHygieneTotal(event) {
    if (event.target.id === "toiletPaperButton") {
      this.setState({ toiletPaperTotal: this.state.toiletPaperTotal + 1 });
      console.log(this.state.toiletPaperTotal + 1);
      console.log("toiletPaper");
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "handSanitizerButton") {
      this.setState({ handSanitizerTotal: this.state.handSanitizerTotal + 1 });
      console.log(this.state.handSanitizerTotal + 1);
      console.log("handSanitizer");
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "toothbrushButton") {
      this.setState({ toothbrushTotal: this.state.toothbrushTotal + 1 });
      console.log(this.state.toothbrushTotal + 1);
      console.log("toothbrush");
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "toothpasteButton") {
      this.setState({ toothpasteTotal: this.state.toothpasteTotal + 1 });
      console.log(this.state.toothpasteTotal + 1);
      console.log("toothpaste");
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "towelButton") {
      this.setState({ towelTotal: this.state.towelTotal + 1 });
      console.log(this.state.towelTotal + 1);
      console.log("towel");
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "soapButton") {
      this.setState({
        soapTotal: this.state.soapTotal + 1
      });
      console.log(this.state.soapTotal + 1);
      console.log("soap");
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "shampooButton") {
      this.setState({
        shampooTotal: this.state.shampooTotal + 1
      });
      console.log(this.state.shampooTotal + 1);
      console.log("shampoo");
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "flossButton") {
      this.setState({ flossTotal: this.state.flossTotal + 1 });
      console.log(this.state.flossTotal + 1);
      console.log("floss");
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "deodorantButton") {
      this.setState({ deodorantTotal: this.state.deodorantTotal + 1 });
      console.log(this.state.deodorantTotal + 1);
      console.log("deodorant");
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "lipBalmButton") {
      this.setState({ lipBalmTotal: this.state.lipBalmTotal + 1 });
      console.log(this.state.lipBalmTotal + 1);
      console.log("lipBalm");
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "razorButton") {
      this.setState({ razorTotal: this.state.razorTotal + 1 });
      console.log(this.state.razorTotal + 1);
      console.log("razor");
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "combButton") {
      this.setState({ combTotal: this.state.combTotal + 1 });
      console.log(this.state.combTotal + 1);
      console.log("comb");
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "mirrorButton") {
      this.setState({ mirrorTotal: this.state.mirrorTotal + 1 });
      console.log(this.state.mirrorTotal + 1);
      console.log("mirror");
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    }
  }

  addToKitchenTotal(event) {
    console.log("clicked");
    if (event.target.id === "stoveButton") {
      this.setState({ stoveTotal: this.state.stoveTotal + 1 });
      console.log(this.state.stoveTotal + 1);
      console.log("stove");
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "matchesButton") {
      this.setState({ matchesTotal: this.state.matchesTotal + 1 });
      console.log(this.state.matchesTotal + 1);
      console.log("matches");
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "lighterButton") {
      this.setState({ lighterTotal: this.state.lighterTotal + 1 });
      console.log(this.state.lighterTotal + 1);
      console.log("lighter");
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "cookingPotButton") {
      this.setState({ cookingPotTotal: this.state.cookingPotTotal + 1 });
      console.log(this.state.cookingPotTotal + 1);
      console.log("cookingPot");
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "fryingPanButton") {
      this.setState({ fryingPanTotal: this.state.fryingPanTotal + 1 });
      console.log(this.state.fryingPanTotal + 1);
      console.log("fryingPan");
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "eatingUtensilsButton") {
      this.setState({
        eatingUtensilsTotal: this.state.eatingUtensilsTotal + 1
      });
      console.log(this.state.eatingUtensilsTotal + 1);
      console.log("eatingUtensils");
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "cookingUtensilsButton") {
      this.setState({
        cookingUtensilsTotal: this.state.cookingUtensilsTotal + 1
      });
      console.log(this.state.cookingUtensilsTotal + 1);
      console.log("cookingUtensils");
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "bottleOpenerButton") {
      this.setState({ bottleOpenerTotal: this.state.bottleOpenerTotal + 1 });
      console.log(this.state.bottleOpenerTotal + 1);
      console.log("bottleOpener");
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "canOpenerButton") {
      this.setState({ canOpenerTotal: this.state.canOpenerTotal + 1 });
      console.log(this.state.canOpenerTotal + 1);
      console.log("canOpener");
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "corkscrewButton") {
      this.setState({ corkscrewTotal: this.state.corkscrewTotal + 1 });
      console.log(this.state.corkscrewTotal + 1);
      console.log("corkscrew");
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "sharpKnifeButton") {
      this.setState({ sharpKnifeTotal: this.state.sharpKnifeTotal + 1 });
      console.log(this.state.sharpKnifeTotal + 1);
      console.log("sharpKnife");
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "platesButton") {
      this.setState({ platesTotal: this.state.platesTotal + 1 });
      console.log(this.state.platesTotal + 1);
      console.log("plates");
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "bowlsButton") {
      this.setState({ bowlsTotal: this.state.bowlsTotal + 1 });
      console.log(this.state.bowlsTotal + 1);
      console.log("bowls");
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "coffeeMugsButton") {
      this.setState({ coffeeMugsTotal: this.state.coffeeMugsTotal + 1 });
      console.log(this.state.coffeeMugsTotal + 1);
      console.log("coffeeMugs");
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "cupsButton") {
      this.setState({ cupsTotal: this.state.cupsTotal + 1 });
      console.log(this.state.cupsTotal + 1);
      console.log("cups");
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "cuttingBoardButton") {
      this.setState({ cuttingBoardTotal: this.state.cuttingBoardTotal + 1 });
      console.log(this.state.cuttingBoardTotal + 1);
      console.log("cuttingBoard");
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "coolerButton") {
      this.setState({ coolerTotal: this.state.coolerTotal + 1 });
      console.log(this.state.coolerTotal + 1);
      console.log("cooler");
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "dishwashBinButton") {
      this.setState({ dishwashBinTotal: this.state.dishwashBinTotal + 1 });
      console.log(this.state.dishwashBinTotal + 1);
      console.log("dishwashBin");
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "spongeButton") {
      this.setState({ spongeTotal: this.state.spongeTotal + 1 });
      console.log(this.state.spongeTotal + 1);
      console.log("sponge");
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "trashBagsButton") {
      this.setState({ trashBagsTotal: this.state.trashBagsTotal + 1 });
      console.log(this.state.trashBagsTotal + 1);
      console.log("trashBags");
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "dishTowelButton") {
      this.setState({ dishTowelTotal: this.state.dishTowelTotal + 1 });
      console.log(this.state.dishTowelTotal + 1);
      console.log("dishTowel");
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
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
        <HygieneItems
          onHandleIncrementTotal={this.handleIncrementTotal}
          hygieneItemsTotal={this.state.hygieneItemsTotal}
          toiletPaperTotal={this.state.toiletPaperTotal}
          handSanitizerTotal={this.state.handSanitizerTotal}
          toothbrushTotal={this.state.toothbrushTotal}
          toothpasteTotal={this.state.toothpasteTotal}
          towelTotal={this.state.towelTotal}
          soapTotal={this.state.soapTotal}
          shampooTotal={this.state.shampooTotal}
          flossTotal={this.state.flossTotal}
          deodorantTotal={this.state.deodorantTotal}
          lipBalmTotal={this.state.lipBalmTotal}
          razorTotal={this.state.razorTotal}
          combTotal={this.state.combTotal}
          mirrorTotal={this.state.mirrorTotal}
        />

        <SunBugFirstAidItems
          onHandleIncrementTotal={this.handleIncrementTotal}
          sunBugFirstAidItemsTotal={this.state.sunBugFirstAidItemsTotal}
          firstAidKitTotal={this.state.firstAidKitTotal}
          alcoholWipesTotal={this.state.alcoholWipesTotal}
          sunScreenTotal={this.state.sunScreenTotal}
          sunGlassesTotal={this.state.sunGlassesTotal}
          bugSprayTotal={this.state.bugSprayTotal}
          bearSprayTotal={this.state.bearSprayTotal}
          airHornTotal={this.state.airHornTotal}
          bandanaTotal={this.state.bandanaTotal}
        />
      </div>
    );
  }
}

export default App;
