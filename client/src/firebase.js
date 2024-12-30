// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-market-27dd2.firebaseapp.com",
  projectId: "estate-market-27dd2",
  storageBucket: "estate-market-27dd2.firebasestorage.app",
  messagingSenderId: "250273265164",
  appId: "1:250273265164:web:7a6f664ce7077ce0952029"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);