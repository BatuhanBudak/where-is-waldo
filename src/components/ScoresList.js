import React, { useState, useEffect } from "react";
import useFirebase from "../hooks/useFirebase";
// import useHighScoreMenu from "../hooks/useHighScoreMenu";

export default function ScoresList({ gameWon }) {
  const [scores, setScores] = useState();
  // const { isHighScore } = useHighScoreMenu();
  const { getHighScoresFromDb } = useFirebase();

  useEffect(() => {
    async function getHighScores() {
      const scores = await getHighScoresFromDb();
      setScores(scores.docs.map(score => ({...score.data(), id: score.id})));
    }

    if (gameWon) {
      getHighScores();
    }
  }, [gameWon]);
  const scoresList = scores.docs.map((score) => {
    return <li key={score.id}>{score.name} {score.score}</li>;
  });

  return (
    <section>
      <h3>High Scores</h3>
      <ol>{scoresList}</ol>
    </section>
  );
}
