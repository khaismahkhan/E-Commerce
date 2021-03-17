import {combineReducers} from 'redux'
import authReducer from './auth/authReducer'
import cartReducer from './Cart/CartReducer'
import productReducer from './products/productReducer'

var rootReducer = combineReducers({
    auth : authReducer,
    products : productReducer,
    cart : cartReducer
})

export default rootReducer