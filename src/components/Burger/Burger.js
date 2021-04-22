/** @format */

import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";
import style from "./Burger.module.css";

function Burger(props) {
  let transformIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformIngredients.length === 0) {
    transformIngredients = <p>start adding ingredients!</p>;
  }
  return (
    <div className={style.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
}

export default Burger;
