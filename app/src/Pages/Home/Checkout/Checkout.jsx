import React,{useState} from 'react'
import { connect } from 'react-redux'
import CheckoutList from '../../../Components/CheckoutList/CheckoutList'
import OrderForm from '../../../Components/OrderForm/OrderForm'
import { totalAmount } from '../../../Utility/checkoutUtility'

const Checkout = ({total}) => {
    var [shownshippingInfo , setShownShippingInfo] = useState(false)

    return (
        <div>
            <h1>checkout</h1>
            <CheckoutList/>
            <h3>Total Amount - {total}</h3>
            {shownshippingInfo && <OrderForm/>}
            <button onClick={()=> setShownShippingInfo(!shownshippingInfo)}>Proceed & Pay</button>
        </div>
    )
}
var mapState = (state) => ({
 total : totalAmount(state.cart)
})


export default connect(mapState)(Checkout)
