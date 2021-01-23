import React, { useState, useEffect } from "react";
import { credentials } from "../../data";
import { connect } from "react-redux";
import { addItemInCart } from "../../actions/action";
import "./Items.css";
import data from "../../data";

const Items = props => {

  const addItems = element => {
    const items = props.state.items;
    props.addItemInCart([...items, element]);
  };

  const removeItem = element => {
    let arr = props.state.items.filter(el => {
      if (el.id !== element.id) return el;
    });
    props.addItemInCart(arr);
  };
  return (
    <div className={"allcards"}>
      {data.map(element => (
        <div className={"card"} key={element.id}>
          <div>
            <img className={"image"} src={element.img_url} alt="loading...."></img>
          </div>
          <div className="details">
            <div className={"name"}>
              {element.name}
              <span
                className={"delete"}
                onClick={() => {
                  removeItem(element);
                }}
              >
                Delete
              </span>
            </div>
            <div className={"Itemprice"}>${element.price}</div>
            <div className={"add"}>
              <button
                disabled={props.state.items.find(el=>el.id === element.id)}
                onClick={() => addItems(element)}
              >
                +Add to cart
              </button>
              <span className={"itemD"}>{element.discount}% Off</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = { addItemInCart };
export default connect(mapStateToProps, mapDispatchToProps)(Items);
