// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCa8SSZPhyUhvXG98lrbXa0FwpRpiDcc_A",
   authDomain: "coffee-store-fe2c4.firebaseapp.com",
   projectId: "coffee-store-fe2c4",
   storageBucket: "coffee-store-fe2c4.firebasestorage.app",
   messagingSenderId: "950478402509",
   appId: "1:950478402509:web:9499ebf88bfb2224654a84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
