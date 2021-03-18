import React, { useState, useeffect, useEffect } from "react";
import { connect } from "react-redux";

const OrderForm = ({user}) => {
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
    console.log(shippingInfo)
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
    user : state.auth
})

export default connect(mapState)(OrderForm);
