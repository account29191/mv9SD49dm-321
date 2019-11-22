import React, { Component } from "react";
import "./App.css";
import Title from "./Components/Title";
import TotalNumberOfItems from "./Components/TotalNumberOfItems";
import Reset from "./Components/Reset";
import CampsiteItems from "./Components/CampsiteItems";
import KitchenItems from "./Components/KitchenItems";
import HygieneItems from "./Components/HygieneItems";
import SunBugFirstAidItems from "./Components/SunBugFirstAidItems";
import Form from "./Components/Form";
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
    bandanaTotal: 0,
    sunBugFirstAidItemsTotal: 0
  };
  handleReset = () => {
    console.log("ok");
    this.setState({
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
    });
  };
  handleDecrement = event => {
    this.campsiteTotalDecrement(event);
    this.sunBugFirstAidTotalDecrement(event);
    this.kitchenTotalDecrement(event);
    this.hygieneTotalDecrement(event);
  };

  handleIncrementTotal = event => {
    this.addToGrandTotal();
    this.addToCampsiteTotal(event);
    this.addToKitchenTotal(event);
    this.addToHygieneTotal(event);

    this.sunBugFirstAidTotal(event);
  };
  hygieneTotalDecrement(event) {
    if (
      event.target.id === "toiletPaperButton" &&
      this.state.toiletPaperTotal >= 1
    ) {
      this.setState(prevState => ({
        toiletPaperTotal: prevState.toiletPaperTotal - 1
      }));
      this.setState({ toiletPaperTotal: this.state.toiletPaperTotal - 1 });
      this.setState({
        hygieneItemsTotal: this.state.hygieneItemsTotal - 1
      });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "handSanitizerButton" &&
      this.state.handSanitizerTotal >= 1
    ) {
      this.setState(prevState => ({
        handSanitizerTotal: prevState.handSanitizerTotal - 1
      }));
      this.setState({ handSanitizerTotal: this.state.handSanitizerTotal - 1 });
      this.setState({
        hygieneItemsTotal: this.state.hygieneItemsTotal - 1
      });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "toothbrushButton" &&
      this.state.toothbrushTotal >= 1
    ) {
      this.setState(prevState => ({
        toothbrushTotal: prevState.toothbrushTotal - 1
      }));
      this.setState({ toothbrushTotal: this.state.toothbrushTotal - 1 });
      this.setState({
        hygieneItemsTotal: this.state.hygieneItemsTotal - 1
      });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "toothpasteButton" &&
      this.state.toothpasteTotal >= 1
    ) {
      this.setState(prevState => ({
        toothpasteTotal: prevState.toothpasteTotal - 1
      }));
      this.setState({ toothpasteTotal: this.state.toothpasteTotal - 1 });
      this.setState({
        hygieneItemsTotal: this.state.hygieneItemsTotal - 1
      });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "towelButton" &&
      this.state.towelTotal >= 1
    ) {
      this.setState(prevState => ({
        towelTotal: prevState.towelTotal - 1
      }));
      this.setState({ towelTotal: this.state.towelTotal - 1 });
      this.setState({
        hygieneItemsTotal: this.state.hygieneItemsTotal - 1
      });
      this.setState({ total: this.state.total - 1 });
    } else if (event.target.id === "soapButton" && this.state.soapTotal >= 1) {
      this.setState(prevState => ({
        soapTotal: prevState.soapTotal - 1
      }));
      this.setState({ soapTotal: this.state.soapTotal - 1 });
      this.setState({
        hygieneItemsTotal: this.state.hygieneItemsTotal - 1
      });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "shampooButton" &&
      this.state.shampooTotal >= 1
    ) {
      this.setState(prevState => ({
        shampooTotal: prevState.shampooTotal - 1
      }));
      this.setState({ shampooTotal: this.state.shampooTotal - 1 });
      this.setState({
        hygieneItemsTotal: this.state.hygieneItemsTotal - 1
      });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "flossButton" &&
      this.state.flossTotal >= 1
    ) {
      this.setState(prevState => ({
        flossTotal: prevState.flossTotal - 1
      }));
      this.setState({ flossTotal: this.state.flossTotal - 1 });
      this.setState({
        hygieneItemsTotal: this.state.hygieneItemsTotal - 1
      });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "deodorantButton" &&
      this.state.deodorantTotal >= 1
    ) {
      this.setState(prevState => ({
        deodorantTotal: prevState.deodorantTotal - 1
      }));
      this.setState({ deodorantTotal: this.state.deodorantTotal - 1 });
      this.setState({
        hygieneItemsTotal: this.state.hygieneItemsTotal - 1
      });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "lipBalmButton" &&
      this.state.lipBalmTotal >= 1
    ) {
      this.setState(prevState => ({
        lipBalmTotal: prevState.lipBalmTotal - 1
      }));
      this.setState({ lipBalmTotal: this.state.lipBalmTotal - 1 });
      this.setState({
        hygieneItemsTotal: this.state.hygieneItemsTotal - 1
      });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "razorButton" &&
      this.state.razorTotal >= 1
    ) {
      this.setState(prevState => ({
        razorTotal: prevState.razorTotal - 1
      }));
      this.setState({ razorTotal: this.state.razorTotal - 1 });
      this.setState({
        hygieneItemsTotal: this.state.hygieneItemsTotal - 1
      });
      this.setState({ total: this.state.total - 1 });
    } else if (event.target.id === "combButton" && this.state.combTotal >= 1) {
      this.setState(prevState => ({
        combTotal: prevState.combTotal - 1
      }));
      this.setState({ combTotal: this.state.combTotal - 1 });
      this.setState({
        hygieneItemsTotal: this.state.hygieneItemsTotal - 1
      });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "mirrorButton" &&
      this.state.mirrorTotal >= 1
    ) {
      this.setState(prevState => ({
        mirrorTotal: prevState.mirrorTotal - 1
      }));
      this.setState({ mirrorTotal: this.state.mirrorTotal - 1 });
      this.setState({
        hygieneItemsTotal: this.state.hygieneItemsTotal - 1
      });
      this.setState({ total: this.state.total - 1 });
    }
  }

  sunBugFirstAidTotalDecrement(event) {
    if (
      event.target.id === "firstAidKitButton" &&
      this.state.firstAidKitTotal >= 1
    ) {
      this.setState(prevState => ({
        firstAidKitTotal: prevState.firstAidKitTotal - 1
      }));
      this.setState({ firstAidKitTotal: this.state.firstAidKitTotal - 1 });
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal - 1
      });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "alcoholWipesButton" &&
      this.state.alcoholWipesTotal >= 1
    ) {
      this.setState(prevState => ({
        alcoholWipesTotal: prevState.alcoholWipesTotal - 1
      }));
      this.setState({ alcoholWipesTotal: this.state.alcoholWipesTotal - 1 });
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal - 1
      });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "sunScreenButton" &&
      this.state.sunScreenTotal >= 1
    ) {
      this.setState(prevState => ({
        sunScreenTotal: prevState.sunScreenTotal - 1
      }));
      this.setState({ sunScreenTotal: this.state.sunScreenTotal - 1 });
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal - 1
      });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "sunGlassesButton" &&
      this.state.sunGlassesTotal >= 1
    ) {
      this.setState(prevState => ({
        sunGlassesTotal: prevState.sunGlassesTotal - 1
      }));
      this.setState({ sunGlassesTotal: this.state.sunGlassesTotal - 1 });
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal - 1
      });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "bugSprayButton" &&
      this.state.bugSprayTotal >= 1
    ) {
      this.setState(prevState => ({
        bugSprayTotal: prevState.bugSprayTotal - 1
      }));
      this.setState({ bugSprayTotal: this.state.bugSprayTotal - 1 });
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal - 1
      });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "bearSprayButton" &&
      this.state.bearSprayTotal >= 1
    ) {
      this.setState(prevState => ({
        bearSprayTotal: prevState.bearSprayTotal - 1
      }));
      this.setState({ bearSprayTotal: this.state.bearSprayTotal - 1 });
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal - 1
      });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "airHornButton" &&
      this.state.airHornTotal >= 1
    ) {
      this.setState(prevState => ({
        airHornTotal: prevState.airHornTotal - 1
      }));
      this.setState({ airHornTotal: this.state.airHornTotal - 1 });
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal - 1
      });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "bandanaButton" &&
      this.state.bandanaTotal >= 1
    ) {
      this.setState(prevState => ({
        bandanaTotal: prevState.bandanaTotal - 1
      }));
      this.setState({ bandanaTotal: this.state.bandanaTotal - 1 });
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal - 1
      });
      this.setState({ total: this.state.total - 1 });
    }
  }

  kitchenTotalDecrement(event) {
    if (event.target.id === "stoveButton" && this.state.stoveTotal >= 1) {
      this.setState(prevState => ({ stoveTotal: prevState.stoveTotal - 1 }));
      this.setState({ stoveTotal: this.state.stoveTotal - 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "matchesButton" &&
      this.state.matchesTotal >= 1
    ) {
      this.setState(prevState => ({
        matchesTotal: prevState.matchesTotal - 1
      }));
      this.setState({ matchesTotal: this.state.matchesTotal - 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "lighterButton" &&
      this.state.lighterTotal >= 1
    ) {
      this.setState(prevState => ({
        lighterTotal: prevState.lighterTotal - 1
      }));
      this.setState({ lighterTotal: this.state.lighterTotal - 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "cookingPotButton" &&
      this.state.cookingPotTotal >= 1
    ) {
      this.setState(prevState => ({
        cookingPotTotal: prevState.cookingPotTotal - 1
      }));
      this.setState({ cookingPotTotal: this.state.cookingPotTotal - 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "fryingPanButton" &&
      this.state.fryingPanTotal >= 1
    ) {
      this.setState(prevState => ({
        fryingPanTotal: prevState.fryingPanTotal - 1
      }));
      this.setState({ fryingPanTotal: this.state.fryingPanTotal - 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "eatingUtensilsButton" &&
      this.state.eatingUtensilsTotal >= 1
    ) {
      this.setState(prevState => ({
        eatingUtensilsTotal: prevState.eatingUtensilsTotal - 1
      }));
      this.setState({
        eatingUtensilsTotal: this.state.eatingUtensilsTotal - 1
      });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "cookingUtensilsButton" &&
      this.state.cookingUtensilsTotal >= 1
    ) {
      this.setState(prevState => ({
        cookingUtensilsTotal: prevState.cookingUtensilsTotal - 1
      }));
      this.setState({
        cookingUtensilsTotal: this.state.cookingUtensilsTotal - 1
      });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "bottleOpenerButton" &&
      this.state.bottleOpenerTotal >= 1
    ) {
      this.setState(prevState => ({
        bottleOpenerTotal: prevState.bottleOpenerTotal - 1
      }));
      this.setState({ bottleOpenerTotal: this.state.bottleOpenerTotal - 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "canOpenerButton" &&
      this.state.canOpenerTotal >= 1
    ) {
      this.setState(prevState => ({
        canOpenerTotal: prevState.canOpenerTotal - 1
      }));
      this.setState({ canOpenerTotal: this.state.canOpenerTotal - 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "corkscrewButton" &&
      this.state.corkscrewTotal >= 1
    ) {
      this.setState(prevState => ({
        corkscrewTotal: prevState.corkscrewTotal - 1
      }));
      this.setState({ corkscrewTotal: this.state.corkscrewTotal - 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "sharpKnifeButton" &&
      this.state.sharpKnifeTotal >= 1
    ) {
      this.setState(prevState => ({
        sharpKnifeTotal: prevState.sharpKnifeTotal - 1
      }));
      this.setState({ sharpKnifeTotal: this.state.sharpKnifeTotal - 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "platesButton" &&
      this.state.platesTotal >= 1
    ) {
      this.setState(prevState => ({
        platesTotal: prevState.platesTotal - 1
      }));
      this.setState({ platesTotal: this.state.platesTotal - 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "bowlsButton" &&
      this.state.bowlsTotal >= 1
    ) {
      this.setState(prevState => ({
        bowlsTotal: prevState.bowlsTotal - 1
      }));
      this.setState({ bowlsTotal: this.state.bowlsTotal - 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "coffeMugsButton" &&
      this.state.coffeMugsTotal >= 1
    ) {
      this.setState(prevState => ({
        coffeMugsTotal: prevState.coffeMugsTotal - 1
      }));
      this.setState({ coffeMugsTotal: this.state.coffeMugsTotal - 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (event.target.id === "cupsButton" && this.state.cupsTotal >= 1) {
      this.setState(prevState => ({
        cupsTotal: prevState.cupsTotal - 1
      }));
      this.setState({ cupsTotal: this.state.cupsTotal - 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "cuttingBoardsButton" &&
      this.state.cuttingBoardsTotal >= 1
    ) {
      this.setState(prevState => ({
        cuttingBoardsTotal: prevState.cuttingBoardsTotal - 1
      }));
      this.setState({ cuttingBoardsTotal: this.state.cuttingBoardsTotal - 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "coolerButton" &&
      this.state.coolerTotal >= 1
    ) {
      this.setState(prevState => ({
        coolerTotal: prevState.coolerTotal - 1
      }));
      this.setState({ coolerTotal: this.state.coolerTotal - 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "dishwashBinsButton" &&
      this.state.dishwashBinsTotal >= 1
    ) {
      this.setState(prevState => ({
        dishwashBinsTotal: prevState.dishwashBinsTotal - 1
      }));
      this.setState({ dishwashBinsTotal: this.state.dishwashBinsTotal - 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "spongeButton" &&
      this.state.spongeTotal >= 1
    ) {
      this.setState(prevState => ({
        spongeTotal: prevState.spongeTotal - 1
      }));
      this.setState({ spongeTotal: this.state.spongeTotal - 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "trashBagsButton" &&
      this.state.trashBagsTotal >= 1
    ) {
      this.setState(prevState => ({
        trashBagsTotal: prevState.trashBagsTotal - 1
      }));
      this.setState({ trashBagsTotal: this.state.trashBagsTotal - 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "dishTowelButton" &&
      this.state.dishTowelTotal >= 1
    ) {
      this.setState(prevState => ({
        dishTowelTotal: prevState.dishTowelTotal - 1
      }));
      this.setState({ dishTowelTotal: this.state.dishTowelTotal - 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    }
  }

  campsiteTotalDecrement(event) {
    if (event.target.id === "tentButton" && this.state.tentTotal >= 1) {
      this.setState(prevState => ({ tentTotal: prevState.tentTotal - 1 }));
      this.setState({ tentTotal: this.state.tentTotal - 1 });
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "sleepingBagButton" &&
      this.state.sleepingBagTotal >= 1
    ) {
      this.setState(prevState => ({
        sleepingBagTotal: prevState.sleepingBagTotal - 1
      }));
      this.setState({ sleepingBagTotal: this.state.sleepingBagTotal - 1 });
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "sleepingPadButton" &&
      this.state.sleepingPadTotal >= 1
    ) {
      this.setState(prevState => ({
        sleepingPadTotal: prevState.sleepingPadTotal - 1
      }));
      this.setState({ sleepingPadTotal: this.state.sleepingPadTotal - 1 });
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "campingPillowButton" &&
      this.state.campingPillowTotal >= 1
    ) {
      this.setState(prevState => ({
        campingPillowTotal: prevState.campingPillowTotal - 1
      }));
      this.setState({ campingPillowTotal: this.state.campingPillowTotal - 1 });
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "flashLightButton" &&
      this.state.flashLightTotal >= 1
    ) {
      this.setState(prevState => ({
        flashLightTotal: prevState.flashLightTotal - 1
      }));
      this.setState({ flashLightTotal: this.state.flashLightTotal - 1 });
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "campingChairButton" &&
      this.state.campingChairTotal >= 1
    ) {
      this.setState(prevState => ({
        campingChairTotal: prevState.campingChairTotal - 1
      }));
      this.setState({ campingChairTotal: this.state.campingChairTotal - 1 });
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    } else if (
      event.target.id === "lanternButton" &&
      this.state.lanternTotal >= 1
    ) {
      this.setState(prevState => ({
        lanternTotal: prevState.lanternTotal - 1
      }));
      this.setState({ lanternTotal: this.state.lanternTotal - 1 });
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal - 1 });
      this.setState({ total: this.state.total - 1 });
    }
  }

  sunBugFirstAidTotal(event) {
    if (event.target.id === "firstAidKitButton") {
      this.setState({ firstAidKitTotal: this.state.firstAidKitTotal + 1 });
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal + 1
      });
    } else if (event.target.id === "alcoholWipesButton") {
      this.setState({ alcoholWipesTotal: this.state.alcoholWipesTotal + 1 });
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal + 1
      });
    } else if (event.target.id === "sunScreenButton") {
      this.setState({ sunScreenTotal: this.state.sunScreenTotal + 1 });
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal + 1
      });
    } else if (event.target.id === "sunGlassesButton") {
      this.setState({ sunGlassesTotal: this.state.sunGlassesTotal + 1 });
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal + 1
      });
    } else if (event.target.id === "bugSprayButton") {
      this.setState({ bugSprayTotal: this.state.bugSprayTotal + 1 });
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal + 1
      });
    } else if (event.target.id === "bearSprayButton") {
      this.setState({
        bearSprayTotal: this.state.bearSprayTotal + 1
      });
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal + 1
      });
    } else if (event.target.id === "airHornButton") {
      this.setState({
        airHornTotal: this.state.airHornTotal + 1
      });
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal + 1
      });
    } else if (event.target.id === "bandanaButton") {
      this.setState({
        bandanaTotal: this.state.bandanaTotal + 1
      });
      this.setState({
        sunBugFirstAidItemsTotal: this.state.sunBugFirstAidItemsTotal + 1
      });
    }
  }

  addToHygieneTotal(event) {
    if (event.target.id === "toiletPaperButton") {
      this.setState({ toiletPaperTotal: this.state.toiletPaperTotal + 1 });
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "handSanitizerButton") {
      this.setState({ handSanitizerTotal: this.state.handSanitizerTotal + 1 });
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "toothbrushButton") {
      this.setState({ toothbrushTotal: this.state.toothbrushTotal + 1 });
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "toothpasteButton") {
      this.setState({ toothpasteTotal: this.state.toothpasteTotal + 1 });
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "towelButton") {
      this.setState({ towelTotal: this.state.towelTotal + 1 });
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "soapButton") {
      this.setState({
        soapTotal: this.state.soapTotal + 1
      });
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "shampooButton") {
      this.setState({
        shampooTotal: this.state.shampooTotal + 1
      });
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "flossButton") {
      this.setState({ flossTotal: this.state.flossTotal + 1 });
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "deodorantButton") {
      this.setState({ deodorantTotal: this.state.deodorantTotal + 1 });
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "lipBalmButton") {
      this.setState({ lipBalmTotal: this.state.lipBalmTotal + 1 });
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "razorButton") {
      this.setState({ razorTotal: this.state.razorTotal + 1 });
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "combButton") {
      this.setState({ combTotal: this.state.combTotal + 1 });
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    } else if (event.target.id === "mirrorButton") {
      this.setState({ mirrorTotal: this.state.mirrorTotal + 1 });
      this.setState({ hygieneItemsTotal: this.state.hygieneItemsTotal + 1 });
    }
  }

  addToKitchenTotal(event) {
    if (event.target.id === "stoveButton") {
      this.setState({ stoveTotal: this.state.stoveTotal + 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "matchesButton") {
      this.setState({ matchesTotal: this.state.matchesTotal + 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "lighterButton") {
      this.setState({ lighterTotal: this.state.lighterTotal + 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "cookingPotButton") {
      this.setState({ cookingPotTotal: this.state.cookingPotTotal + 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "fryingPanButton") {
      this.setState({ fryingPanTotal: this.state.fryingPanTotal + 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "eatingUtensilsButton") {
      this.setState({
        eatingUtensilsTotal: this.state.eatingUtensilsTotal + 1
      });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "cookingUtensilsButton") {
      this.setState({
        cookingUtensilsTotal: this.state.cookingUtensilsTotal + 1
      });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "bottleOpenerButton") {
      this.setState({ bottleOpenerTotal: this.state.bottleOpenerTotal + 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "canOpenerButton") {
      this.setState({ canOpenerTotal: this.state.canOpenerTotal + 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "corkscrewButton") {
      this.setState({ corkscrewTotal: this.state.corkscrewTotal + 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "sharpKnifeButton") {
      this.setState({ sharpKnifeTotal: this.state.sharpKnifeTotal + 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "platesButton") {
      this.setState({ platesTotal: this.state.platesTotal + 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "bowlsButton") {
      this.setState({ bowlsTotal: this.state.bowlsTotal + 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "coffeeMugsButton") {
      this.setState({ coffeeMugsTotal: this.state.coffeeMugsTotal + 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "cupsButton") {
      this.setState({ cupsTotal: this.state.cupsTotal + 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "cuttingBoardButton") {
      this.setState({ cuttingBoardTotal: this.state.cuttingBoardTotal + 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "coolerButton") {
      this.setState({ coolerTotal: this.state.coolerTotal + 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "dishwashBinButton") {
      this.setState({ dishwashBinTotal: this.state.dishwashBinTotal + 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "spongeButton") {
      this.setState({ spongeTotal: this.state.spongeTotal + 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "trashBagsButton") {
      this.setState({ trashBagsTotal: this.state.trashBagsTotal + 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    } else if (event.target.id === "dishTowelButton") {
      this.setState({ dishTowelTotal: this.state.dishTowelTotal + 1 });
      this.setState({ kitchenItemsTotal: this.state.kitchenItemsTotal + 1 });
    }
  }

  addToGrandTotal() {
    this.setState({ total: this.state.total + 1 });
  }

  addToCampsiteTotal(event) {
    if (event.target.id === "tentButton") {
      this.setState({ tentTotal: this.state.tentTotal + 1 });
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "sleepingBagButton") {
      this.setState({ sleepingBagTotal: this.state.sleepingBagTotal + 1 });
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "sleepingPadButton") {
      this.setState({ sleepingPadTotal: this.state.sleepingPadTotal + 1 });
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "campingPillowButton") {
      this.setState({ campingPillowTotal: this.state.campingPillowTotal + 1 });
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "flashLightButton") {
      this.setState({ flashLightTotal: this.state.flashLightTotal + 1 });
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "campingChairButton") {
      this.setState({ campingChairTotal: this.state.campingChairTotal + 1 });
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    } else if (event.target.id === "lanternButton") {
      this.setState({ lanternTotal: this.state.lanternTotal + 1 });
      this.setState({ campsiteItemsTotal: this.state.campsiteItemsTotal + 1 });
    }
  }

  render() {
    return (
      <div>
        <Title />
        <TotalNumberOfItems numberTotal={this.state.total} />
        <Reset resetButton={this.handleReset} />
        <Form />
        <CampsiteItems
          onHandleIncrementTotal={this.handleIncrementTotal}
          onHandleDecrementTotal={this.handleDecrement}
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
          onHandleDecrementTotal={this.handleDecrement}
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
          onHandleDecrementTotal={this.handleDecrement}
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
          onHandleDecrementTotal={this.handleDecrement}
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
