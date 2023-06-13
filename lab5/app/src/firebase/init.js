
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAojPqcDe3Gos_6Xb6eoZtGRzxUYVm-Tow",
  authDomain: "piwo-to-do.firebaseapp.com",
  projectId: "piwo-to-do",
  storageBucket: "piwo-to-do.appspot.com",
  messagingSenderId: "129234850276",
  appId: "1:129234850276:web:c151eead58c3995d6cb7f1",
  measurementId: "G-E4ZZL1796Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);