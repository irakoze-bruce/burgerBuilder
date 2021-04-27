/** @format */

import React from "react";
import stylclass from "./Modal.module.css";

function Modal(props) {
  return (
    <div
      className={stylclass.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translate(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  );
}

export default Modal;
