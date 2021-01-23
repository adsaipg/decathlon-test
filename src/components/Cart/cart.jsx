import React, { useState, useEffect } from "react";
import "./cart.css";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const Cart = props => {
  const history = useHistory();
  return (
    <div className={"cartButn"}>
      <span
        className={"cartText"}
        onClick={() => {
          if (props.state.login) {
            history.push("/cart");
          } else {
            alert("Login Required:Click on login");
          }
        }}
      >
        Cart
      </span>
      <div className={"cartCount"}>
        {props.state.items && props.state.items.length}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps, null)(Cart);
