import history from "../../Components/History/History"
import { firestore, serverTimestamp } from "../../Firebase/Firebase"

export var generateOrder = () => async (dispatch, getState)=>{
    try {
        var {auth, cart} = getState()
        var orderInfo ={
            ...auth,
            products: cart,
            createdAt: serverTimestamp(),
            orderStatus : "pending"
        }

        var order = await firestore.collection("orders").add(orderInfo)
       history.push(`/checkout/${order.id}`)
        
    } catch (error) {
        console.log(error)
    }
}