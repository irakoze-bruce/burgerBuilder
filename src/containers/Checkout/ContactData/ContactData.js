/** @format */

import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import style from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    name: "Bruce",
    email: "irabruce20@gmail.com",
    address: {
      street: "",
      postscose: "",
    },
  };

  render() {
    return (
      <div className={style.ContactData}>
        <h4>Enter your Contact Data</h4>

        <input className={style.Input} name='name' placeholder='Name'></input>
        <input className={style.Input} name='email' placeholder='Email'></input>
        <input
          className={style.Input}
          name='street'
          placeholder='Street'
        ></input>
        <input className={style.Input} name='posts' placeholder='Post'></input>

        <Button btnType='Success'>Order</Button>
      </div>
    );
  }
}

export default ContactData;
