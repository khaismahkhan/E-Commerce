import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyBPNQH7G3daQk5EAXE2gpZ3L2tjZYi4RKk",
    authDomain: "e-commerce-c55cf.firebaseapp.com",
    projectId: "e-commerce-c55cf",
    storageBucket: "e-commerce-c55cf.appspot.com",
    messagingSenderId: "617649240048",
    appId: "1:617649240048:web:0cbb6aba17c04a583e8f35"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export var auth = firebase.auth()
  export var firestore = firebase.firestore()
  export var googleAuthProvider = new firebase.auth.GoogleAuthProvider()
  export var serverTimestamp =()=> firebase.firestore.FieldValue.serverTimestamp()
  export var storage = firebase.storage().ref()

  export default firebase