import { doc,getDoc, query,  limit, orderBy  } from "firebase/firestore/lite";
import { db   } from "../firebase/firebaseConfig";

export default function useFirebase() {

  
  
  async function getCoordsForCharacter(id) {
    const collectionRef =  doc(db, "coordinates",`${id}`);
    const coordsSnapshot = await getDoc(collectionRef);
    const coordsObj = coordsSnapshot.data();
    return coordsObj;
     
  }
  async function getHighScoresFromDb(){
    const collectionRef =  doc(db, "scores")
    const q = query(collectionRef, orderBy("score", "desc"), limit(10));
    const scoresSnapshot = await getDoc(q);
    scoresSnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    // const coordsObj = coordsSnapshot.data();
    return scoresSnapshot;
  }
  async function checkForHighScore(score){
    const scoresSnapshot = getHighScoresFromDb();
    return scoresSnapshot.some(scoreItem => score > scoreItem);
  }
  async function submitScore(){
    //TODO will write new high score to database
  }
  

  return {getCoordsForCharacter, checkForHighScore, submitScore, getHighScoresFromDb};
}
