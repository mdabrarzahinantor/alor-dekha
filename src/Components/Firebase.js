import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJpXgB9i2o4I0YRjPpBDxsywi8AtBYwjY",
  authDomain: "alor-dekha.firebaseapp.com",
  projectId: "alor-dekha",
  storageBucket: "alor-dekha.appspot.com",
  messagingSenderId: "654709415862",
  appId: "1:654709415862:web:e25bf451e9f22730faab17",
  measurementId: "G-C97WY49YFS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export const storage = firebaseApp.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
