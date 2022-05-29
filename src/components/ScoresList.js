import React, { useState, useEffect } from "react";
import useFirebase from "../hooks/useFirebase";
import useHighScoreMenu from "../hooks/useHighScoreMenu";

export default function ScoresList({ gameWon }) {
  const [scores, setScores] = useState();
  const { isHighScore } = useHighScoreMenu();
  const { getHighScoresFromDb } = useFirebase();

  useEffect(() => {
    async function getHighScores() {
      const scores = await getHighScoresFromDb();
      setScores(scores);
    }

    if (gameWon) {
      getHighScores();
    }
  }, [gameWon]);
  const scoresList = scores.map((score) => {
    return <li>{score}</li>;
  });

  return (
    <section>
      <h3>High Scores</h3>
      <ol>{scoresList}</ol>
    </section>
  );
}
