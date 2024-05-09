// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvkGOyk23GTqL1DgzO65swqd8XrMqd9jg",
    authDomain: "corporate-ticket-portal.firebaseapp.com",
    projectId: "corporate-ticket-portal",
    storageBucket: "corporate-ticket-portal.appspot.com",
    messagingSenderId: "1027496698887",
    appId: "1:1027496698887:web:92ac49f84b975b497376a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }