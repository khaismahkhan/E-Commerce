import { setProducts } from "./productActions";
import { SET_PRODUCTS } from "./productConstants";

var initialState = []

var productReducer=(state=initialState, actions)=>{
var {type, payload} = actions;
switch (type) {
    case SET_PRODUCTS:
        return [...payload.products]
    default:
        return state
}
}

export default productReducer