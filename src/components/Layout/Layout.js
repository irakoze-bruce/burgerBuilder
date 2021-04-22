/** @format */

import React from "react";
import Aux from "../../hoc/Aux";
import style from "./Layout.module.css";
function Layout(props) {
  return (
    <Aux>
      <div>toolbar sidedraw backdrop</div>
      <main className={style.container}>{props.children}</main>
    </Aux>
  );
}

export default Layout;
