// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2MqE0n4VmWzgZR6CfOuUuYCnRvVa740Y",
  authDomain: "netfilxgtp.firebaseapp.com",
  projectId: "netfilxgtp",
  storageBucket: "netfilxgtp.firebasestorage.app",
  messagingSenderId: "5756271205",
  appId: "1:5756271205:web:1df8dc8edfbbc4453de48c",
  measurementId: "G-L38V6B9DGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
