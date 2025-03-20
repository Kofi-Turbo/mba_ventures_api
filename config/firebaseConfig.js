import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAezayMemxxN9SeT00f7eAjmwIJnRfyLBQ",
  authDomain: "mba-ventures-80390.firebaseapp.com",
  projectId: "mba-ventures-80390",
  storageBucket: "mba-ventures-80390.firebasestorage.app",
  messagingSenderId: "902709668201",
  appId: "1:902709668201:web:0cd3a271f5c015023df5f8",
  measurementId: "G-PJXMDGQTFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };