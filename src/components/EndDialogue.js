import React, { useState } from "react";
import styled from "styled-components";
import useGameController from "../hooks/useGameController";
import ScoreInput from "./ScoreForm";
import ScoresList from "./ScoresList";
export default function EndDialogue() {
  const { gameWon } = useGameController();

  //TODO highscore component
  //GAME WON VEYA LOST TIME'A GORE
  if (gameWon) {
    return (
      <DialogueWrapper>
        <h2>Misson Complete!</h2>
        <ScoreInput
         
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
