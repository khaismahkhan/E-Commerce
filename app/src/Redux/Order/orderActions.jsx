import history from "../../Components/History/History";
import { firestore, serverTimestamp } from "../../Firebase/Firebase";

export var generateOrder = () => async (dispatch, getState) => {
  try {
    var { auth} = getState();
    if (auth) {
      var orderInfo = {
        orderedBy: auth.uid,
        createdAt: serverTimestamp(),
        orderStatus: "pending",
      };
      console.log(orderInfo)
      var order = await firestore.collection("orders").add(orderInfo);
      history.push(`/checkout/${order.id}`);
    }
  } catch (error) {
    console.log(error);
  }
};

export var processOrder = ({orderId,cart,shippingInfo})=> async (dispatch) =>{
    try {
        // update order
        await firestore.collection("/orders").doc(orderId).update({shippingInfo,cart})

        //call to stripe checkout session
        

        //redirect to stripe checkout page


    } catch (error) {
        console.log(error)
    }
}