import history from "../../Components/History/History";
import { firestore, serverTimestamp } from "../../Firebase/Firebase";
import { loadStripe } from "@stripe/stripe-js";

//  stripe public key link
const stripePromise = loadStripe(
  "pk_test_51IZ1NxE5iW0uiggkd6oJb70V5xjJ3r2Gyy2Oi0i9CXAXDARG170D1wXebTexE6JMm7EU1AmpiQSpVYQr1XJ9JYFR00Akmip2w9"
);

export var generateOrder = () => async (dispatch, getState) => {
  try {
    var { auth } = getState();
    if (auth) {
      var orderInfo = {
        orderedBy: auth.uid,
        createdAt: serverTimestamp(),
        orderStatus: "pending",
      };
      console.log(orderInfo);
      var order = await firestore.collection("orders").add(orderInfo);
      history.push(`/checkout/${order.id}`);
    }
  } catch (error) {
    console.log(error);
  }
};

export var processOrder = ({ orderId, cart, shippingInfo }) => async (
  dispatch
) => {
  orderId = "5tkhqDMROs0E7f7YLkoF";
  try {
    //stripe initialize
    const stripe = await stripePromise;
    // update order
    await firestore
      .collection("/orders")
      .doc(orderId)
      .update({ shippingInfo, cart });

    //call to stripe checkout session
    var query = await fetch(
      "http://localhost:5001/e-commerce-c55cf/us-central1/generateCheckoutSession",
      {
        method: "POST",
        body: JSON.stringify({ orderId }),
      }
    );
    var {
      data: { session },
    } = await query.json();

    //redirect to stripe checkout page
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  } catch (error) {
    console.log(error);
  }
};
