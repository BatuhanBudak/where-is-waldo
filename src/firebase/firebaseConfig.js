import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import {
  setPersistence,
  getAuth,
  browserSessionPersistence,
  signInAnonymously,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDylarFJ7CyNw2p8ZEtk3BU1x0BZ1gD9GI",
  authDomain: "where-is-waldo-e29a9.firebaseapp.com",
  projectId: "where-is-waldo-e29a9",
  storageBucket: "where-is-waldo-e29a9.appspot.com",
  messagingSenderId: "1032231044384",
  appId: "1:1032231044384:web:aeabf29e045eb945e10345",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth();

setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return signInAnonymously(auth);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + "==>" + errorMessage);
  });

onAuthStateChanged(auth, (user) => {
  if (user) {
    //isAnonymous

    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(uid);
    // ...
  } else {
    // User is signed out
    // ...
  }
});
