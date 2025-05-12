// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzDt7gPKxehgfYF1vQDIWnnG4zL2MGWNQ",
  authDomain: "paidkaro-app.firebaseapp.com",
  projectId: "paidkaro-app",
  storageBucket: "paidkaro-app.firebasestorage.app",
  messagingSenderId: "409603203481",
  appId: "1:409603203481:web:b4e80ae4b68bb536a1f308"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)