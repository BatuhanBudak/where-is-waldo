import React, { useEffect } from "react";
import useFirebase from "../hooks/useFirebase";

export default function ScoresList({ isHighScore, gameWon }) {

const {getHighScoresFromDb} = useFirebase();

async function getHighScores(){

  const scores = await getHighScoresFromDb();
}
useEffect(() => {
  if(isHighScore, gameWon){
    getHighScores();
  }
})
  // const scoresList = scores.map((score) => {
  //   return (
  //     <li>
  //       {score.name} {score.score}
  //     </li>
  //   );
  // });

  return (
    <section>
      <h3>High Scores</h3>
      {/* <ol>{scoresList}</ol> */}
    </section>
  );
}
