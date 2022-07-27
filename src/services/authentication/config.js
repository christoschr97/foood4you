import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// // Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyATSo7cEh1LZ0Vs4bt3aEO-U90x8VZxkng",
  authDomain: "map-to-meal.firebaseapp.com",
  projectId: "map-to-meal",
  storageBucket: "map-to-meal.appspot.com",
  messagingSenderId: "568610497735",
  appId: "1:568610497735:web:a08e89f7ff148596778ae2",
  measurementId: "G-68N7ZJRPDM",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth();
