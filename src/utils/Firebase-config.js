// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//firebase cofig
const firebaseConfig = {
  apiKey: "AIzaSyA3tPL92O2OYk2RSde8gZgFwxq75eIzoNg",
  authDomain: "netflix-gpt-3c6ad.firebaseapp.com",
  projectId: "netflix-gpt-3c6ad",
  storageBucket: "netflix-gpt-3c6ad.firebasestorage.app",
  messagingSenderId: "745620430968",
  appId: "1:745620430968:web:8707446de5d25973194d8d",
  measurementId: "G-HKE01Y4EHN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
