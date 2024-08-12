// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "local-event-finder-f35bd.firebaseapp.com",
  projectId: "local-event-finder-f35bd",
  storageBucket: "local-event-finder-f35bd.appspot.com",
  messagingSenderId: "197501102660",
  appId: "1:197501102660:web:8419232c4e30c01530aa11"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);