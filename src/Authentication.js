// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTxgmplvDAvN2qLMlWB5UYFZCD2Bl8ZLE",
  authDomain: "dragon-news-paper-project.firebaseapp.com",
  projectId: "dragon-news-paper-project",
  storageBucket: "dragon-news-paper-project.appspot.com",
  messagingSenderId: "769228294972",
  appId: "1:769228294972:web:bde74c7f0c446ad56b6c39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;