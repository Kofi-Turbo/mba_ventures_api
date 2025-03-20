import { getDatabase, ref, push, set, get, child, remove, update } from 'firebase/database';
import { db } from "../config/firebaseConfig.js"; // Ensure db is from Realtime Database

const getAllLyrics = async () => {
  try {
    const lyricsRef = ref(db, "lyrics"); // Reference to "lyrics" in Realtime DB
    const snapshot = await get(lyricsRef);

    if (!snapshot.exists()) {
      return []; // Return empty array if no lyrics found
    }

    const data = snapshot.val();
    return Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
  } catch (error) {
    throw new Error("Error fetching lyrics: " + error.message);
  }
};

const addLyrics = async (author, lyrics) => {
  try {
    if (!author || !lyrics) throw new Error("Author and lyrics are required.");

    const lyricsRef = ref(db, "lyrics"); // Reference to "lyrics" in Realtime DB
    const newLyricsRef = push(lyricsRef); // Create new entry
    await set(newLyricsRef, {
      author,
      lyrics,
      timestamp: new Date().toISOString(), // Use ISO format for timestamp
    });

    return { id: newLyricsRef.key, author, lyrics };
  } catch (error) {
    throw new Error("Error adding lyrics: " + error.message);
  }
};

const deleteLyrics = async (id) => {
  try {
    const lyricRef = ref(db, `lyrics/${id}`);
    await remove(lyricRef);
  } catch (error) {
    throw new Error("Error deleting lyrics: " + error.message);
  }
};

const updateLyrics = async (id, author, lyrics) => {
  try {
    if (!id || !author || !lyrics) throw new Error("ID, author, and lyrics are required.");

    const lyricRef = ref(db, `lyrics/${id}`);
    await update(lyricRef, { author, lyrics });

    return { id, author, lyrics };
  } catch (error) {
    throw new Error("Error updating lyrics: " + error.message);
  }
};

export { getAllLyrics, addLyrics, deleteLyrics, updateLyrics };
