// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1Cm-CRf5CX8EI9ELSJT2iuvtOFbxrCHs",
    authDomain: "project1-d38a9.firebaseapp.com",
    projectId: "project1-d38a9",
    storageBucket: "project1-d38a9.appspot.com",
    messagingSenderId: "250272875870",
    appId: "1:250272875870:web:a08bf0ea8f7ae3016b3bcf",
    measurementId: "G-QZ6LWNM588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);