import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCyV-_zk6kJJOYC-FQOR1RxO9WuvHRhuDY",
    authDomain: "chisquarextask0.firebaseapp.com",
    projectId: "chisquarextask0",
    storageBucket: "chisquarextask0.firebasestorage.app",
    messagingSenderId: "236908613962",
    appId: "1:236908613962:web:cf7c2e2a0df7d1d38ff1b3",
    measurementId: "G-0EQS8C3HS4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
