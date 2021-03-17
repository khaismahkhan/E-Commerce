import React from "react";
import { connect } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
  deleteProductFromCart,
} from "../../Redux/Cart/CartActions";

const CheckoutListItem = ({ addProductToCart,removeProductFromCart,deleteProductFromCart, ...CheckoutListItem }) => {
  var { title, cost, quantity,id } = CheckoutListItem;
  return (
    <div>
      <h1>
        {title} - {cost} -
        <button onClick={() => deleteProductFromCart(id)}>X</button>
      </h1>
      <h2>
        <button onClick={() => addProductToCart(CheckoutListItem)}>+</button> {quantity}
        <button onClick={() => removeProductFromCart(id)}>-</button>
      </h2>
      ------------------------------------------------------------------------------

    </div>

  );
};

var actions = {
  addProductToCart,
  removeProductFromCart,
  deleteProductFromCart,
};

export default connect(null, actions)(CheckoutListItem);
