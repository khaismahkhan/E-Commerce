import { firestore, serverTimestamp, storage } from "../../Firebase/Firebase";
import { v4 as uuid } from "uuid";

export var setProducts = (productObj) => async () => {
  try {
    console.log(productObj);
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
          var downloadURL = await imageRef.getDownloadURL()
          //2- modify productObj with coverPhoto url and createdAt
        productObj.coverPhoto = downloadURL
        productObj.createdAt = serverTimestamp()
        productObj.cost = parseFloat(productObj.cost)
        productObj.quantity = parseInt(productObj.quantity) 

        await firestore.collection("products").add(productObj)
      }

      

    );

    


    //3- create doc in firestore
  } catch (error) {
    console.log(error);
  }
};
