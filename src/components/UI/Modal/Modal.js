/** @format */

import React from "react";
import stylclass from "./Modal.module.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

function Modal(props) {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.clicked} />
      <div
        className={stylclass.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translate(-100vh )",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
}

export default Modal;
