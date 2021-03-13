import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Authentication from "./Pages/Home/Authentication/Authentication";
import Categories from "./Pages/Home/categories/categories";
import CategoryProduct from "./Pages/Home/category-product/Category-product";
import Checkout from "./Pages/Home/Checkout/Checkout";
import { connect } from "react-redux";
import { useEffect } from "react";
import { checkUserStatus } from "./Redux/auth/authActions";
import Test from "./Components/Test/Test";

function App({ checkUserStatus }) {
  useEffect(() => {
    checkUserStatus();
  }, [checkUserStatus]);
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Authentication" component={Authentication} />
        <Route path="/Categories" component={Categories} />
        <Route path="/categoryProduct" component={CategoryProduct} />
        <Route path="/Checkout" component={Checkout} />
        <Route path="/test" component={Test}/>
      </Switch>
    </div>
  );
}

var actions = {
  checkUserStatus,
};

export default connect(null, actions)(App);
