// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUm3UxEL92lPzL06LuutCgcUly4A7pDxQ",
  authDomain: "react-news-auth-d8ec7.firebaseapp.com",
  projectId: "react-news-auth-d8ec7",
  storageBucket: "react-news-auth-d8ec7.appspot.com",
  messagingSenderId: "146255845826",
  appId: "1:146255845826:web:9e19e42ad428f991e89e5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;