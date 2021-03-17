import { firestore, serverTimestamp, storage } from "../../Firebase/Firebase";
import { v4 as uuid } from "uuid";
import { CLEAR_PRODUCTS, SET_PRODUCTS } from "./productConstants";

//for Admin Stuff

export var setProducts = (productObj) => async () => {
  try {
    //steps of uploading files
    // step1- send file to storage and get download url

    var imageRef = storage.child(`products/img-${uuid()}`);
    var fileListner = imageRef.put(productObj.coverPhoto);
    // 1. event type ---> 'state_changed'
    // 2. observer, called any time the state changes
    // 2. callback ---> Error observer, called on failure
    // 3. callback ---> ompletion observer, called on successful completion

    fileListner.on(
      "state_changed",
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error);
      },
      async () => {
        var downloadURL = await imageRef.getDownloadURL();
        //2- modify productObj with coverPhoto url and createdAt
        productObj.coverPhoto = downloadURL;
        productObj.createdAt = serverTimestamp();
        productObj.cost = parseFloat(productObj.cost);
        productObj.quantity = parseInt(productObj.quantity);

        //3- create doc in firestore

        await firestore.collection("products").add(productObj);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export var fetchProducts = () => async (dispatch) => {
  var query = await firestore.collection("products").get();
  var products = [];
  query.docs.forEach((doc) => {
    products.push({...doc.data(),id:doc.id});
  });

  dispatch({
    type: SET_PRODUCTS,
    payload:{
      products
    }
  })
};

export var categoryProducts = (category) => async (dispatch) =>{
  try {
    var query = await firestore.collection("products").where("category","==",category).get();
    var products = [];
    query.docs.forEach((doc) => {
      products.push({...doc.data(),id:doc.id});
    });
   
    dispatch({
      type: SET_PRODUCTS,
      payload:{
        products
      }
    })
    
  } catch (error) {
    console.log(error)
    
  }
}

export var fetchSpecificProducts =(productId) =>async (dispatch) =>{

  var query = await firestore.collection("products").doc(productId).get()
  var product = query.data()
  console.log(product)
}



export var clearProducts = () => async (dispatch) =>{
  try {
    
    dispatch({
      type: CLEAR_PRODUCTS
    })

  } catch (error) {
    console.log(error)
  }
}

