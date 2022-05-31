import React, { useState, useEffect } from "react";
import useFirebase from "../hooks/useFirebase";
import { formatTime } from "../utils/FormatTime";
import styled from "styled-components";

export default function ScoresList({ gameWon, showHighScoreScreen }) {
  const [scores, setScores] = useState([]);
  const [hasCheckedScore, setHasCheckedScore] = useState(false);
  const { getHighScoresFromDb } = useFirebase();

  useEffect(() => {
    async function getHighScores() {
      const scores = await getHighScoresFromDb();
      setScores(
        scores.docs.map((score) => ({ ...score.data(), id: score.id }))
      );
      setHasCheckedScore(true);
    }

    if (gameWon && !hasCheckedScore && !showHighScoreScreen) {
      getHighScores();
    }
  }, [gameWon, getHighScoresFromDb, hasCheckedScore, showHighScoreScreen]);

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

const StyledSection = styled.section`
  margin-block: 0.5rem;
  color: white;
  width: 100%;
`;
const HighScoreLabel = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  border-bottom: 1px solid;
  padding-bottom: 0.6rem;
  color: gold;
`;
const ScoresOList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-size: 1.2rem;
  list-style: none;
  width: inherit;
  color: white;
`;
const ScoreListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;
const ScoreSpan = styled.span`
  color: lime;
`;
