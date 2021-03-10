import './App.css';
import {Switch , Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Authentication from './Pages/Home/Authentication/Authentication';
import Categories from './Pages/Home/categories/categories';
import CategoryProduct from './Pages/Home/category-product/Category-product';
import Checkout from './Pages/Home/Checkout/Checkout';

function App() {
  return (
    <div>
<Switch>
  <Route path = "/" component={Home} exact/>
  <Route path = "/Authentication" component={Authentication}/>
  <Route path = "/Categories" component={Categories}/>
  <Route path = "/categoryProduct" component={CategoryProduct}/>
  <Route path = "/Checkout" component={Checkout}/>
</Switch>

      
    </div>
  );
}

export default App;
