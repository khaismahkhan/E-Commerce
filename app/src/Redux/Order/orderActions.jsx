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

export var updateOrderInfo = ({orderId,cart,shippingInfo})=> async (dispatch) =>{
    try {
        await firestore.collection("/orders").doc(orderId).update({shippingInfo,cart})
    } catch (error) {
        console.log(error)
    }
}