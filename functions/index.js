const functions = require("firebase-functions");
const stripe = require("stripe")(
  "sk_test_51IZ1NxE5iW0uiggkj0sMCHc5lNG3NVMpMnauL8p4wMFn4YxqiTr6tuztB0Ub0i7IJNYU0VUGgnO8jGnPexYDwJby00QZMxjY3N"
);

const admin = require("firebase-admin");

admin.initializeApp();

const firestore = admin.firestore();

//auth triggers

exports.userCreated = functions.auth.user().onCreate((user) => {
  console.log(user);
  console.log("user sucessfully added");
  return Promise.resolve;
  //send user a welcome email
});

exports.userDeleted = functions.auth.user().onDelete((user) => {
  console.log(user);
  console.log("user sucessfully deleted");
  return Promise.resolve;
  //send user a welcome email
});

//firestore triggers

exports.createOrders = functions.firestore
  .document("orders/{docId}")
  .onCreate((snap, context) => {
    console.log(snap);
    console.log(context);
    console.log("order created sucessfully");
    return Promise.resolve;
  });
exports.updateOrders = functions.firestore
  .document("orders/{docId}")
  .onUpdate((snap, context) => {
    console.log(snap.before.data());
    console.log(snap.after.data());
    console.log(context);
    console.log("order updated sucessfully");
    return Promise.resolve;
  });

exports.deleteOrders = functions.firestore
  .document("orders/{docId}")
  .onDelete((snap, context) => {
    console.log(snap.data());
    console.log("order deleted sucessfully");
    return Promise.resolve;
  });

//HTTPS triggers (for making an API)

exports.sayHello = functions.https.onRequest((req, res) => {
  res.status(200).json({
    msg: "hello",
  });
  return Promise.resolve;
});

exports.printMyName = functions.https.onRequest((req, res) => {
  var data = req.body;
  res.status(200).json({
    msg: `hello ${data.name}`,
  });
  return Promise.resolve;
});

var shapeCartItem = (cart) => {
  return cart.map(({ coverPhoto, title, cost, quantity }) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: title,
        images: [coverPhoto],
      },
      unit_amount: cost * 100, //cents
    },
    quantity: quantity,
  }));
};

exports.generateCheckoutSession = functions.https.onRequest(
  async (req, res) => {
    try {
      var { orderId } = req.body;
      //fetch order
      var query = await firestore.collection("orders").doc(orderId).get();
      var order = query.data();

      //shape cart items
      var line_items = shapeCartItem(order.cart);

      //generate stripe sessions with that amount

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `https://webicamp.com`,
        cancel_url: `https://webicamp.com`,
      });
      //send session to the frontend

      res.status(200).json({
        data: {
          session,
        },
      });
    } catch (error) {
      res.status(401).json({
        error,
      });
    }
  }
);
