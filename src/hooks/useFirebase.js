import { doc,getDoc } from "firebase/firestore/lite";
import { db } from "../firebase/firebaseConfig";

export default function useFirebase() {

  
  
  async function getCoordsForCharacter(id) {
    const collectionRef =  doc(db, "coordinates",`${id}`);
    const coordsSnapshot = await getDoc(collectionRef);
    const coordsObj = coordsSnapshot.data();
    return coordsObj;
     
  }
  async function getHighScoresFromDb(){
    
  }
  async function checkForHighScore(){
    // getHighScoresFromDb()
  }
  async function submitScore(){

  }
  

  return {getCoordsForCharacter, checkForHighScore, submitScore};
}
