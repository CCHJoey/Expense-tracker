// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCllLT0FP4amSjXbuDZlE0kiswZjspe8ak",
  authDomain: "pantry-tracker-5e0e5.firebaseapp.com",
  projectId: "pantry-tracker-5e0e5",
  storageBucket: "pantry-tracker-5e0e5.appspot.com",
  messagingSenderId: "643925576416",
  appId: "1:643925576416:web:36219d33b999a5a4061e85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)