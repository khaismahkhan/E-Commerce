import React from 'react'
import CartList from '../CartList/CartList'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {generateOrder} from '../../Redux/Order/orderActions'

const Cart = ({generateOrder}) => {
    return (
        <div>
            <h1>Cart</h1>
            <CartList/>
            <button onClick={generateOrder} >CHECKOUT</button>
        </div>
    )
}

var actions ={
    generateOrder
}

export default connect(null,actions)(Cart)
