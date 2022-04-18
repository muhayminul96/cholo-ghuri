// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyD5IwSIYWHxDsAktUrjBKiMkR1idNCNPuQ",

  authDomain: "cholo-ghuri-4f174.firebaseapp.com",

  projectId: "cholo-ghuri-4f174",

  storageBucket: "cholo-ghuri-4f174.appspot.com",

  messagingSenderId: "257728546934",

  appId: "1:257728546934:web:3e370968b1927ca6a9b757"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;