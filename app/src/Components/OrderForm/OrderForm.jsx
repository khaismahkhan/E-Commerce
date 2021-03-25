import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {updateOrderInfo} from "../../Redux/Order/orderActions"

const OrderForm = ({user,updateOrderInfo,cart, match:{params:{orderId}}}) => {

  var [fullName, setFullName] = useState("");
  var [email, setEmail] = useState("");
  var [phone, setPhone] = useState("");
  var [address, setAddress] = useState("");

  useEffect(()=>{
    //CDM
    var {email,fullName} = user
    setEmail(email ? email : "")
    setFullName(fullName ? fullName : "")
  },[])

  var handleFormSubmit = (e) => {
    e.preventDefault();
    var shippingInfo = {
      fullName,
      email,
      phone,
      address,
    };
    updateOrderInfo({cart, shippingInfo, orderId})
  };

  return (
    <div>
        <h1>ORDER FORM</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter your Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        /> <br/>
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

var mapState =(state) =>({
    user : state.auth,
    cart : state.cart
})

var actions = {
  updateOrderInfo
}

export default connect(mapState,actions)(withRouter(OrderForm));
