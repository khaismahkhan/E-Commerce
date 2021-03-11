import React, { useState } from "react";
import { connect } from "react-redux";
import {signin} from "../../../Redux/auth/authActions"

var SigninForm = ({signin}) => {
  
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  var handleFormSubmit = (e) => {
    e.preventDefault();
    var credentials ={
        email,password
    }
    signin(credentials)
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

var action ={
    signin
}

export default connect(null,action)(SigninForm);
