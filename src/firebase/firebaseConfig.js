import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDylarFJ7CyNw2p8ZEtk3BU1x0BZ1gD9GI",
  authDomain: "where-is-waldo-e29a9.firebaseapp.com",
  projectId: "where-is-waldo-e29a9",
  storageBucket: "where-is-waldo-e29a9.appspot.com",
  messagingSenderId: "1032231044384",
  appId: "1:1032231044384:web:aeabf29e045eb945e10345"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


