import {
  auth,
  serverTimestamp,
  firestore,
  googleAuthProvider,
} from "../../Firebase/Firebase";
import { REMOVE_USER, SET_USER } from "./authConstants";
import firebase from "./../../Firebase/Firebase";

export var setUser = (user) => ({
  type: SET_USER,
  payload: {
    user,
  },
});

export var removeUser = () => ({
  type: REMOVE_USER,
});

export var signup = ({ email, password, fullName }) => async (dispatch) => {
  try {
    var {
      user: { uid },
    } = await auth.createUserWithEmailAndPassword(email, password);
    var userInfo = {
      fullName,
      email,
      createdAt: serverTimestamp(),
    };
    await firestore.collection("users").doc(uid).set(userInfo);
  } catch (error) {
    console.log(error);
  }
};

export var signin = ({ email, password }) => async (dispatch) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);

    // var fetchUserInfo = await firestore.collection("users").doc(uid).get();
    // var { email: userEmail, fullName } = fetchUserInfo.data();

    // var userData = {
    //   fullName,
    //   email: userEmail,
    //   uid,
    // };

    // dispatch(setUser(userData));
  } catch (error) {
    console.log(error);
  }
};

export var signout = () => async (dispatch) => {
  //delete from backend
  await auth.signOut();

  //delete from frontend

  // dispatch(removeUser())
};

export var googleSignin = () => async (dispatch) => {
  try {
    var {
      user: { uid, displayName, email },
      additionalUserInfo: { isNewUser },
    } = await auth.signInWithPopup(googleAuthProvider);
    if (isNewUser) {
      // if user sign in first time
      var userInfo = {
        fullName: displayName,
        email,
        createdAt: serverTimestamp(),
      };

      await firestore.collection("users").doc(uid).set(userInfo);
    }
    // this step is mendatory for set data in app

    // var userData = {
    //   fullName:displayName,
    //   email,
    //   uid,
    // };

    // dispatch(setUser(userData));
  } catch (error) {
    console.log(error);
  }
};

export var checkUserStatus = () => async (dispatch) => {
  try {
    firebase.auth().onAuthStateChanged(async function(user) {
      if (user) {
        var { uid } = user;
        // User is signed in.
        var query = await firestore.collection("users").doc(uid).get();
        console.log(query.data())
        // var {email, fullName} = query.data();

        // var userData = {
        //   fullName,
        //   email,
        //   uid,
        // };

        // dispatch(setUser(userData));
      } else {
        // No user is signed in.
        //delete from frontend

        dispatch(removeUser());
      }
    });
  } catch (error) {
    console.log(error);
  }
};
