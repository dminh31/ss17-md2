// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_KEY_FIREBASE,
    authDomain: "project-md2-92993.firebaseapp.com",
    projectId: "project-md2-92993",
    storageBucket: "project-md2-92993.appspot.com",
    messagingSenderId: "722993643471",
    appId: "1:722993643471:web:4cc233cc8b755d86f1dcba",
    measurementId: "G-6NXQ4NJ9TV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)

const analytics = getAnalytics(app);