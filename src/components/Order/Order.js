/** @format */

import React from "react";
import style from "./Order.module.css";

function Order(props) {
  return (
    <div className={style.Order}>
      <p>Ingredients:salad 1</p>
      <p>
        price: <strong>5000Fbu</strong>
      </p>
    </div>
  );
}

export default Order;
