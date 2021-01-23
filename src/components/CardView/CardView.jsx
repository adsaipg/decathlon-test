import React, { useState, useEffect } from "react";
import "./CardView.css";
import { addItemInCart } from "../../actions/action";
import Header from "../Header/header";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function CardView(props) {
  const [avialItems, setAvailItems] = useState([]);
  const [totalPrice, setPrice] = useState(0);
  const [discount, setDis] = useState(0);
  const history = useHistory();
  useEffect(() => {
    props.state.items && setAvailItems(props.state.items);
  }, [props.state.items]);

  useEffect(() => {
    setPrice(getTotalPrice());
    setDis(averageDisc());
  });

  const onRemoveItem = item => {
    const it = avialItems.filter(allItems => allItems.id !== item.id);
    setAvailItems(it);
    props.addItemInCart(it);
  };
  const replaceItem = (item, val) => {
    const it = avialItems.filter(allItem => {
      if (allItem.id === item.id) {
        allItem.qty = (item.qty || 1) + val;
      }
      return avialItems;
    });
    setAvailItems(it);
  };
  const increaseQty = item => {
    return replaceItem(item, 1);
  };
  const decreaseQty = item => {
    return replaceItem(item, -1);
  };
  const getTotalPrice = () => {
    let sum = 0;
    avialItems.forEach(el => {
      sum = sum + Number(el.price);
      if (el.qty) {
        sum = sum * el.qty;
      }
    });
    return sum;
  };
  const averageDisc = () => {
    let dis = 0;
    avialItems.forEach(el => {
      dis = dis + Number(el.discount);
    });
    return dis / avialItems.length;
  };
  return (
    <div className="shop">
      <Header />
      <div className="order">
        <div className="cart">
          <div className="header"> Order Summary</div>
          <div className="line" />
          <div className="table">
            <div className="tableHead">
              <div className="items"> Items</div>
              <div className="Qty">Qty</div>
              <div className="price">Price</div>
            </div>
            <div className="line" />
            <div>
              {avialItems &&
                avialItems.length > 0 &&
                avialItems.map((item, k) => (
                  <div className="tableData" key={item.id || k}>
                    <div className="data1">
                      <img src={item.img_url} alt="" />
                      <span className="dataItems">{item.name}</span>
                      <span
                        className="close"
                        onClick={() => {
                          onRemoveItem(item);
                        }}
                      >
                        X
                      </span>
                    </div>
                    <div className="data2">
                      <span
                        className="plusminus"
                        onClick={() => {
                          increaseQty(item);
                        }}
                      >
                        +
                      </span>
                      {item.qty || 1}
                      <span
                        className="plusminus"
                        onClick={() => decreaseQty(item)}
                      >
                        -
                      </span>
                    </div>
                    <div className="data3">${item.price}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="cardDetails">
          <div className="cardHead">Total</div>
          <div className="details">
            <div>Total Items: {avialItems.length}</div>
            <div>Total Price: ${totalPrice.toFixed(2)}</div>
            <div>Average Discount: {discount.toFixed(2)}%</div>
            <div className="finalAmount">
              Payble Amount: ${(totalPrice - (discount * totalPrice) / 100).toFixed(2)}
            </div>
          </div>
          <button className={"checkout"} onClick={()=>{props.addItemInCart([]);history.replace('/');}}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { state };
};
const mapDispatchToProps = { addItemInCart };
export default connect(mapStateToProps, mapDispatchToProps)(CardView);
