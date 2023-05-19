// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.TOY_LAND_APIKEY,
  authDomain: import.meta.env.TOY_LAND_AUTHDOMAIN,
  projectId: import.meta.env.TOY_LAND_PROJECTID,
  storageBucket: import.meta.env.TOY_LAND_STORAGEBUCKET,
  messagingSenderId: import.meta.env.TOY_LAND_MESSAGINGSENDERID,
  appId: import.meta.env.TOY_LAND_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
