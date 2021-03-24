const functions = require("firebase-functions");

//auth triggers

exports.userCreated = functions.auth.user().onCreate((user)=>{
    console.log(user)
    console.log('user sucessfully added');
    return Promise.resolve;
    //send user a welcome email
})

exports.userDeleted = functions.auth.user().onDelete((user)=>{
    console.log(user)
    console.log('user sucessfully deleted');
    return Promise.resolve;
    //send user a welcome email
})

//firestore triggers

exports.createOrders = functions.firestore.document("orders/{docId}").onCreate((snap,context)=>{
    console.log(snap)
    console.log(context)
    console.log('order created sucessfully')
    return Promise.resolve
})
exports.updateOrders = functions.firestore.document("orders/{docId}").onUpdate((snap,context)=>{
    console.log(snap.before.data())
    console.log(snap.after.data())
    console.log(context)
    console.log('order updated sucessfully')
    return Promise.resolve
})

exports.deleteOrders = functions.firestore.document("orders/{docId}").onDelete((snap,context)=>{
    console.log(snap.data())
    console.log('order deleted sucessfully')
    return Promise.resolve
})

//HTTPS triggers (for making an API)

exports.sayHello = functions.https.onRequest((req,res)=>{
    res.status(200).json({
        msg: 'hello'
    })
    return Promise.resolve
})

exports.printMyName = functions.https.onRequest((req,res)=>{
    var data = req.body;
    res.status(200).json({
        msg: `hello ${data.name}`
    })
    return Promise.resolve

})

