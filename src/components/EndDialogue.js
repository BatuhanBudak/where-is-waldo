import React, { useState } from "react";
import styled from "styled-components";
import useGameController from "../hooks/useGameController";
import useHighScoreMenu from "../hooks/useHighScoreMenu";
import ScoreInput from "./ScoreForm";
import ScoresList from "./ScoresList";
export default function EndDialogue() {
  const { gameWon } = useGameController();
  const { showHighScoreScreen, setShowHighScoreScreen } = useHighScoreMenu();

  //TODO highscore component
  //GAME WON VEYA LOST TIME'A GORE
  if (gameWon) {
    return (
      <DialogueWrapper>
        <h2>Misson Complete!</h2>
        <ScoreInput
          showHighScoreScreen={showHighScoreScreen}
          setShowHighScoreScreen={setShowHighScoreScreen}
        />
        <ScoresList gameWon={gameWon} />
      </DialogueWrapper>
    );
  }
}
const DialogueWrapper = styled.div`
  display: flex;
  width: 45rem;
  height: 32rem;
  border-radius: 20px;
`;
const HighScoresWrapper = styled.div`
  display: grid;
`;
