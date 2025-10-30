import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import App from './App.jsx'
import { CartProvider } from "./components/CartContext";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_BEHsjPc_fBSKNIdC9_mJnzRlmkzNQXA",
  authDomain: "wintekashowroom.firebaseapp.com",
  projectId: "wintekashowroom",
  storageBucket: "wintekashowroom.firebasestorage.app",
  messagingSenderId: "301640903522",
  appId: "1:301640903522:web:ff001bbc6825502ac71a3b",
  measurementId: "G-3W66V9QCQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


createRoot(document.getElementById('root')).render(
  <CartProvider>
  <App />
</CartProvider>
  
)
