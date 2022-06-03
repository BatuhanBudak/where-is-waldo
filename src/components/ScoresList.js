import React, { useState, useEffect, useContext } from "react";
import useFirebase from "../hooks/useFirebase";
import { formatTime } from "../utils/FormatTime";
import { GameControllerContext } from "./context/GameControllerProvider";
import {
  StyledSection,
  HighScoreLabel,
  ScoresOList,
  ScoreListItem,
  ScoreSpan,
} from "../styledComponents/ScoreListStyles";

export default function ScoresList({ gameWon, showHighScoreScreen }) {
  const [scores, setScores] = useState([]);
  const [hasCheckedScore, setHasCheckedScore] = useState(false);
  const { getHighScoresFromDb } = useFirebase();
  const {imageList} = useContext(GameControllerContext);

  useEffect(() => {
    async function getHighScores() {
      const scores = await getHighScoresFromDb(imageList.id);
      setScores(
        scores.docs.map((score) => ({ ...score.data(), id: score.id }))
      );
      setHasCheckedScore(true);
    }

    if (gameWon && !hasCheckedScore && !showHighScoreScreen) {
      getHighScores();
    }
  }, [gameWon, getHighScoresFromDb, hasCheckedScore, showHighScoreScreen, imageList.id]);

  const scoresList = scores.map((score, i) => {
    return (
      <ScoreListItem key={score.id}>
        {i + 1}- {score.name} <ScoreSpan>{formatTime(score.score)}</ScoreSpan>
      </ScoreListItem>
    );
  });

  return (
    !showHighScoreScreen && (
      <StyledSection>
        <HighScoreLabel>High Scores</HighScoreLabel>
        <ScoresOList>{scoresList}</ScoresOList>
      </StyledSection>
    )
  );
}
