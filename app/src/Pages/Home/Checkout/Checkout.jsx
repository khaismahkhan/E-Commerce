import React from 'react'
import { connect } from 'react-redux'
import CheckoutList from '../../../Components/CheckoutList/CheckoutList'
import { totalAmount } from '../../../Utility/checkoutUtility'

const Checkout = ({total}) => {
    return (
        <div>
            <h1>checkout</h1>
            <CheckoutList/>
            <h3>Total Amount - {total}</h3>
            <button>Pay Now {total}</button>
        </div>
    )
}
var mapState = (state) => ({
 total : totalAmount(state.cart)
})


export default connect(mapState)(Checkout)
