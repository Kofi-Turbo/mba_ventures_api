import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = process.env.fireBaseConfig;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };