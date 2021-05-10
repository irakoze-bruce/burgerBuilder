/** @format */

import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: {
      cheese: 1,
      salad: 2,
      bacon: 1,
      meat: 2,
    },
  };

  checkoutCancelHandle = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandle = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancel={this.checkoutCancelHandle}
          checkoutContinue={this.checkoutContinueHandle}
        />

        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
  }
}

export default Checkout;
