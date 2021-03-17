import React from "react";
import { connect } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
  deleteProductFromCart,
} from "./../../Redux/Cart/CartActions";

const ProductCard = ({
  addProductToCart,
  removeProductFromCart,
  deleteProductFromCart,
  ...product
}) => {
  var { title, cost } = product;
  return (
    <div>
      <h3>
        {title}-{`$${cost}`}-
        <button onClick={() => addProductToCart(product)}>Add to cart</button>
        <button onClick={() => removeProductFromCart(product.id)}>
          Remove from cart
        </button>
        <button onClick={() => deleteProductFromCart(product.id)}>
          Delete from cart
        </button>
      </h3>
    </div>
  );
};

var actions = {
  addProductToCart,
  removeProductFromCart,
  deleteProductFromCart,
};

export default connect(null, actions)(ProductCard);
