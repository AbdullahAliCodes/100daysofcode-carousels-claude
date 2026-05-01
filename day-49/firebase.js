import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4DatOvzsh7N3b-IpSDY8aJmdOGGiOVgw",
  authDomain: "clone-react-ebdf9.firebaseapp.com",
  projectId: "clone-react-ebdf9",
  storageBucket: "clone-react-ebdf9.firebasestorage.app",
  messagingSenderId: "58125856993",
  appId: "1:58125856993:web:56eb7b21b17657d44d47a0",
  measurementId: "G-RFK3N7YMQP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
