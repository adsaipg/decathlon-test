import React, { useState, useEffect } from "react";
import Login from "../Login/login";
import Cart from "../Cart/cart";
import "./header.css";
import { useHistory } from "react-router-dom";

const Header = props => {
  const { showCart } = props;
  const history = useHistory();
  return (
    <div className="topheader">
      <div className={"logo"} onClick={() => history.replace("/")}>
        Decathlon
      </div>
      <div className={"cart"}>{showCart && <Cart />}</div>
      <div className={"login"}>
        <Login />
      </div>
    </div>
  );
};
export default Header;
