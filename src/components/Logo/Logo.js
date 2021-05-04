/** @format */

import React from "react";
import burgerLogo from "../../assets/image/burgerLogo.png";
import style from "./Logo.module.css";

function Logo(props) {
  return (
    <div className={style.Logo} style={{ height: props.height }}>
      <img src={burgerLogo} alt='Myburger' />
    </div>
  );
}

export default Logo;
