// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  orderBy
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIlnHF457xaik5FArYG5nsFBrtaRJN90M",
  authDomain: "fluent-ish.firebaseapp.com",
  projectId: "fluent-ish",
  storageBucket: "fluent-ish.appspot.com",
  messagingSenderId: "888969012297",
  appId: "1:888969012297:web:16f9e902c45b4e12f64b98",
  measurementId: "G-JRLBHEYLFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export default app;
