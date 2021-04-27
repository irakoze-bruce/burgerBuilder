/** @format */

import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
    totalPrice: 5,
    purchasable: false,
    purchasing: false,
  };

  updatePurchasable = (ingredients) => {
    let sum = Object.keys(ingredients)
      .map((igkey) => {
        return ingredients[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  };

  addIngredientHandle = (type) => {
    let oldIngredient = this.state.ingredients[type];
    let newIngredient = oldIngredient + 1;
    let updateIngredient = { ...this.state.ingredients };
    updateIngredient[type] = newIngredient;

    let oldPrice = this.state.totalPrice;
    let newPrice = INGREDIENTS_PRICE[type];
    let updatePrice = oldPrice + newPrice;

    this.setState({ ingredients: updateIngredient, totalPrice: updatePrice });
    this.updatePurchasable(updateIngredient);
  };

  removeIngredientHandle = (type) => {
    let oldIngredient = this.state.ingredients[type];

    if (oldIngredient <= 0) {
      return;
    }

    let newIngredient = oldIngredient - 1;
    let updateIngredient = { ...this.state.ingredients };
    updateIngredient[type] = newIngredient;

    let oldPrice = this.state.totalPrice;
    let newPrice = INGREDIENTS_PRICE[type];
    let updatePrice = oldPrice - newPrice;

    this.setState({ ingredients: updateIngredient, totalPrice: updatePrice });
    this.updatePurchasable(updateIngredient);
  };

  purchasingHandle = () => {
    this.setState({ purchasing: true });
  };

  render() {
    let disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandle}
          removeIngredient={this.removeIngredientHandle}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          ordered={this.purchasingHandle}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
