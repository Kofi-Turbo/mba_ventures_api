import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Parse the Firebase configuration from the environment variable
const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
