/** @format */

import React from "react";
import style from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

let controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

function BuildControls(props) {
  return (
    <div className={style.BuildControls}>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.addIngredient(ctrl.type)}
          removed={() => props.removeIngredient(ctrl.type)}
        />
      ))}
    </div>
  );
}

export default BuildControls;
