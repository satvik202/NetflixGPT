// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALdLp7hOcZ8QjXrAfY0NruBG2kbxYdxTs",
  authDomain: "netflixgpt-2b170.firebaseapp.com",
  projectId: "netflixgpt-2b170",
  storageBucket: "netflixgpt-2b170.appspot.com",
  messagingSenderId: "563716122075",
  appId: "1:563716122075:web:722440586f12d86976f3fe",
  measurementId: "G-JWLZ7WJCLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();