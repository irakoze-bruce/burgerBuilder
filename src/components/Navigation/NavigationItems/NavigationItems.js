/** @format */

import React from "react";
import style from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

function NavigationItems(props) {
  return (
    <div className={style.NavigationItems}>
      <NavigationItem link='/' exact>
        burgerBuilder
      </NavigationItem>
      <NavigationItem link='/orders'>Orders</NavigationItem>
    </div>
  );
}

export default NavigationItems;
