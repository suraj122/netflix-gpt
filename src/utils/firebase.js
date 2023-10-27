// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3bFYsbSmUf2ULsvyM6EgH6eAbp5JJLgc",
  authDomain: "netflixgpt-679b6.firebaseapp.com",
  projectId: "netflixgpt-679b6",
  storageBucket: "netflixgpt-679b6.appspot.com",
  messagingSenderId: "1092727645146",
  appId: "1:1092727645146:web:fd16b71278a9126ebbd6e3",
  measurementId: "G-Q5B3Y63G9M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth();
