/** @format */

import React from "react";
import Aux from "../../hoc/Aux";
import style from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
function Layout(props) {
  return (
    <Aux>
      <Toolbar />
      <main className={style.container}>{props.children}</main>
    </Aux>
  );
}

export default Layout;
