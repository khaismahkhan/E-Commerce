import {combineReducers} from 'redux'
import authReducer from './auth/authReducer'
import cartReducer from './Cart/CartReducer'
import productReducer from './products/productReducer'
import storage from 'redux-persist/lib/storage' 
import { persistReducer } from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage,
    whiteList:['auth']
  }

var rootReducer = combineReducers({
    auth : authReducer,
    products : productReducer,
    cart : cartReducer
})

export default persistReducer(persistConfig,rootReducer)