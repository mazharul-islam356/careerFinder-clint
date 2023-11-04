// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjCNnPyalzIxjhJkSde7CKLW5Wn3U1IQ8",
  authDomain: "assingmnet-11.firebaseapp.com",
  projectId: "assingmnet-11",
  storageBucket: "assingmnet-11.appspot.com",
  messagingSenderId: "951829933527",
  appId: "1:951829933527:web:2ecbbe66879665f1e76f92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;