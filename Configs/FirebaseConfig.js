// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb9YpJ7BHrasH7OGTwp7HZ_c9ntIjOMts",
  authDomain: "travelizer-ead2a.firebaseapp.com",
  projectId: "travelizer-ead2a",
  storageBucket: "travelizer-ead2a.firebasestorage.app",
  messagingSenderId: "946935689693",
  appId: "1:946935689693:web:5396eac254576237010634"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);