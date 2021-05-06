/** @format */

import React from "react";
import style from "./DrawerToggle.module.css";

function DrawerToggle(props) {
  return (
    <div onClick={props.clicked} className={style.DrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default DrawerToggle;
