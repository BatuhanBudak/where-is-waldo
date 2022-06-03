import {
  doc,
  getDoc,
  getDocs,
  query,
  limit,
  orderBy,
  addDoc,
  collection,
} from "firebase/firestore/lite";
import { db } from "../firebase/firebaseConfig";

export default function useFirebase() {
  async function getCoordsForCharacter(id) {
    const collectionRef = doc(db, "coordinates", `${id}`);
    const coordsSnapshot = await getDoc(collectionRef);
    const coordsObj = coordsSnapshot.data();
    return coordsObj;
  }
  async function getHighScoresFromDb(collectionID) {
    const collectionRef = collection(db, `${collectionID}`);
    const q = query(collectionRef, orderBy("score", "asce"), limit(10));
    const scoresSnapshot = await getDocs(q);
    return scoresSnapshot;
  }
  async function checkForHighScore(collectionID, score) {
    const scoresSnapshot = await getHighScoresFromDb(collectionID);
    if (scoresSnapshot.docs.length < 10) return true;
    return scoresSnapshot.docs.some(
      (scoreItem) => scoreItem.data().score > score
    );
  }
  async function submitScore(name, score, collectionID) {
    const collectionRef = collection(db, `${collectionID}`);
    await addDoc(collectionRef, { name: name, score: Number(score) });
  }

  return {
    getCoordsForCharacter,
    checkForHighScore,
    submitScore,
    getHighScoresFromDb,
  };
}
