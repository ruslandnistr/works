// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBG6kiyCVtd3f8habjpHfWupGumlJUXCKA",
  authDomain: "product-f26ac.firebaseapp.com",
  databaseURL: "https://product-f26ac-default-rtdb.firebaseio.com",
  projectId: "product-f26ac",
  storageBucket: "product-f26ac.appspot.com",
  messagingSenderId: "433513712235",
  appId: "1:433513712235:web:ab3ad131030cf3cc44ff2e"
};

// Initialize Firebase
export const db = initializeApp(firebaseConfig);
