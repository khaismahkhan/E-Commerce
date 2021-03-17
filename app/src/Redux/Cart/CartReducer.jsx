import { addtionOfProductInCart,RemovalOfProductFromCart } from "../../Utility/product";
import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART, REMOVE_PRODUCT_FROM_CART } from "./CartConstants";

var initialState =[]

var cartReducer=(state=initialState,actions)=>{
    var {type,payload} =actions;
    switch (type) {
        case ADD_PRODUCT_TO_CART:
            return addtionOfProductInCart(state,payload.product)
        case REMOVE_PRODUCT_FROM_CART:
            return RemovalOfProductFromCart(state,payload.productId)
        case DELETE_PRODUCT_FROM_CART:
            return state.filter((product) => product.id !== payload.productId);
        default:
            return state;
    }
}
export default cartReducer