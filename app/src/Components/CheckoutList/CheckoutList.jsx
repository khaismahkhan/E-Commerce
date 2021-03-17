import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../CartItem/CartItem' 
import CheckoutListItem from '../CheckoutListItem/CheckoutListItem'

const CheckoutList = ({cart}) => {
    return (
        <div>
            <h1>CheckoutList</h1>
            {cart.map((cartItem)=> <CheckoutListItem key={cartItem.id} {...cartItem}/> ) }
        </div>
    )
}
var mapState =(state)=>({
    cart : state.cart
})

export default connect(mapState) (CheckoutList)
