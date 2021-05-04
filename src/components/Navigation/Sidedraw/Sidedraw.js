/** @format */

import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import style from "./Sidedraw.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

function Sidedraw(props) {
  let attachedStyle = [style.SideDrawer, style.Close];
  if (props.open) {
    attachedStyle = [style.SideDrawer, style.Open];
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedStyle.join(" ")}>
        <div className={style.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
}

export default Sidedraw;
