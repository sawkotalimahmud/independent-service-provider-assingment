// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT4GSAclar-ZoLYKXnbmf_B1hMtKWVMYo",
  authDomain: "assignment-10-35553.firebaseapp.com",
  projectId: "assignment-10-35553",
  storageBucket: "assignment-10-35553.appspot.com",
  messagingSenderId: "694957499462",
  appId: "1:694957499462:web:c5d91921d4ea945af81647"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;