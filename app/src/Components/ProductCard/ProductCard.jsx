import React from "react";
import { connect } from "react-redux";
import {
  addProductToCart,
} from "./../../Redux/Cart/CartActions";
import {Link} from 'react-router-dom'

const ProductCard = ({
  addProductToCart,
  ...product
}) => {
  var { title, cost,id } = product;
  return (
    <div>
      <h3>
        <Link to={`/products/${id}`}>{title}</Link> -{`$${cost}`}-
        <button onClick={() => addProductToCart(product)}>Add to cart</button>
        
      </h3>
    </div>
  );
};

var actions = {
  addProductToCart,
};

export default connect(null, actions)(ProductCard);
