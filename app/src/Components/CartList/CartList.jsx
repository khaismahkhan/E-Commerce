import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../CartItem/CartItem' 

const CartList = ({cart}) => {
    return (
        <div>
            <h1>Cart List</h1>
            {cart.map((cartItem)=> <CartItem key={cartItem.id} {...cartItem}/> ) }
        </div>
    )
}
var mapState =(state)=>({
    cart : state.cart
})

export default connect(mapState)(CartList)
