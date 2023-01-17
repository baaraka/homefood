import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDL7OPjg1UTF0jDLwGgSLocW2IzCSuEV8U",
  authDomain: "newslatter-1d9a1.firebaseapp.com",
  projectId: "newslatter-1d9a1",
  storageBucket: "newslatter-1d9a1.appspot.com",
  messagingSenderId: "86157307858",
  appId: "1:86157307858:web:2a906fc9c5e6074372620b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
