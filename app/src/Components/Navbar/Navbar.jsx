import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo flex">
          <Link to="/">
        <h1>logo</h1>
          </Link>
      </div>
      <div className="category flex">
          <Link to="/categories">
        <h2>Categories</h2>
          </Link>
      </div>
      <div className="auth flex">
          <Link to="/authentication">
        <h2>Authentication</h2>
          </Link>
      </div>
    </div>
  );
};

export default Navbar;
