/** @format */

import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

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
      <p>
        <strong>Total Price: {props.price}$</strong>
      </p>
      <p>continue to checkout?</p>
      <Button btnType='Danger' clicked={props.cancelled}>
        Cancel
      </Button>
      <Button btnType='Success' clicked={props.continued}>
        Continue
      </Button>
    </Aux>
  );
}

export default OrderSummary;
