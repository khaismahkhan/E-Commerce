import React, { useState } from "react";
import { connect } from "react-redux";
import {signup} from '../../Redux/auth/authActions'

var SignupForm = ({signup}) => {
  var [fullName, setFullName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  var handleFormSubmit = (e) => {
    e.preventDefault();
    var credentials ={
        fullName,
        email,
        password
    }
    signup(credentials)
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
        />
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
    signup
}

export default connect(null,action)(SignupForm);
