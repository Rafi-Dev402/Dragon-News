// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfqAQCjXQnJfjoWwq1iIX6lonNuPKYsUg",
  authDomain: "dragon-news-cdfb7.firebaseapp.com",
  projectId: "dragon-news-cdfb7",
  storageBucket: "dragon-news-cdfb7.firebasestorage.app",
  messagingSenderId: "1078255469675",
  appId: "1:1078255469675:web:c7fe418491b1d77325dd2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);