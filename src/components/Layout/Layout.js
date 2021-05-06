/** @format */

import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import style from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedraw from "../Navigation/Sidedraw/Sidedraw";

class Layout extends Component {
  state = {
    showSlide: true,
  };

  showSlideHandle = () => {
    this.setState({ showSlide: false });
  };

  SidedrawToggleHandle = () => {
    let showSlide = this.state.showSlide;

    this.setState({ showSlide: !showSlide });
    // this.setState((prevState) => {
    //   return { showSlide: !prevState.showSlide };
    // });
  };
  render() {
    return (
      <Aux>
        <Toolbar SidedrawToggleclicked={this.SidedrawToggleHandle} />
        <Sidedraw open={this.state.showSlide} closed={this.showSlideHandle} />
        <main className={style.container}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
