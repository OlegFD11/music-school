// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKUWv_Iw-N7AUc7NChSnWHBaiBFaPt3kk",
  authDomain: "react-quiz-logol.firebaseapp.com",
  databaseURL: "https://react-quiz-logol-default-rtdb.firebaseio.com",
  projectId: "react-quiz-logol",
  storageBucket: "react-quiz-logol.appspot.com",
  messagingSenderId: "1037436650260",
  appId: "1:1037436650260:web:6257bd378b7a6d8efeb801",
  measurementId: "G-Y52RGTMW7G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
