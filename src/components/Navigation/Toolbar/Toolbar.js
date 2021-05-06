/** @format */

import React from "react";
import style from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../Sidedraw/DrawerToggle/DrawerToggle";

const Toolbar = (props) => (
  <header className={style.Toolbar}>
    <DrawerToggle clicked={props.SidedrawToggleclicked} />
    <div className={style.Logo}>
      <Logo />
    </div>
    <nav className={style.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
