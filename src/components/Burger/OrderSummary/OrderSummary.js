/** @format */

import React from "react";
import Aux from "../../../hoc/Aux";

function OrderSummary(props) {
  let ingredientSummary = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <span> {igkey}</span>:{props.ingredients[igkey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>your Order</h3>
      <p>A delicious Burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>continue to checkout?</p>
    </Aux>
  );
}

export default OrderSummary;
