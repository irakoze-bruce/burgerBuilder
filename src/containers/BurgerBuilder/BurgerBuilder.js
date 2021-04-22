/** @format */

import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

let INGREDIENTS_PRICE = {
  salad: 1,
  cheese: 2.4,
  bacon: 2,
  meat: 3,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0,
    },
    price: 5,
  };

  addIngredientHandle = (type) => {
    let oldIngredient = this.state.ingredients[type];
    let newIngredient = oldIngredient + 1;
    let updateIngredient = { ...this.state.ingredients };
    updateIngredient[type] = newIngredient;

    let oldPrice = this.state.price;
    let newPrice = INGREDIENTS_PRICE;
    let updatePrice = oldPrice + newPrice;

    this.setState({ ingredients: updateIngredient, price: updatePrice });
  };

  removeIngredientHandle = (type) => {
    let oldIngredient = this.state.ingredients[type];
    let newIngredient = oldIngredient - 1;
    let updateIngredient = { ...this.state.ingredients };
    updateIngredient[type] = newIngredient;

    let oldPrice = this.state.price;
    let newPrice = INGREDIENTS_PRICE;
    let updatePrice = oldPrice - newPrice;

    this.setState({ ingredients: updateIngredient, price: updatePrice });
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandle}
          removeIngredient={this.removeIngredientHandle}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
