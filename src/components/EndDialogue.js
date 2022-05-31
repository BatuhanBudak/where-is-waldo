import React, { useContext } from "react";
import styled from "styled-components";
import ScoreForm from "./ScoreForm";
import ScoresList from "./ScoresList";
import { TimeContext } from "./TimeContextProvider";
import { GameControllerContext } from "./GameControllerProvider";
import { formatTime } from "../utils/FormatTime";
import useHighScoreMenu from "../hooks/useHighScoreMenu";

export default function EndDialogue() {
  const { time } = useContext(TimeContext);
  const { gameWon,} = useContext(GameControllerContext);
  const { showHighScoreScreen, toggleHighScoreScreen, isHighScore } =
    useHighScoreMenu();

  if (gameWon && isHighScore) {
    return (
      <DialogueWrapper>
        <MissonStatusLabel gameWon={gameWon}>Misson Complete!</MissonStatusLabel>
        <ScoreForm
          toggleHighScoreScreen={toggleHighScoreScreen}
          showHighScoreScreen={showHighScoreScreen}
        />
        <ScoresList gameWon={gameWon} showHighScoreScreen={showHighScoreScreen} />
        <RestartButton>restart</RestartButton>
      </DialogueWrapper>
    );
  } else if (gameWon && !isHighScore) {
    return(
      <DialogueWrapper>
      <MissonStatusLabel gameWon={gameWon}>Misson Complete!</MissonStatusLabel>
      <ScoresList gameWon={gameWon} showHighScoreScreen={showHighScoreScreen}  />
    <RestartButton>restart</RestartButton>
    </DialogueWrapper>
    );
  } else if (!gameWon) {
    return(
      <DialogueWrapper>
      <MissonStatusLabel gameWon={gameWon}>Misson Fail</MissonStatusLabel>
      <h3>Your score: {formatTime(time)}</h3>
      <h3>Try again?</h3>
      <RestartButton>restart</RestartButton>
    </DialogueWrapper>
    )
  }
}

const DialogueWrapper = styled.div`
  display: flex;
  max-width: 45rem;
  max-height: 35rem;
  min-height: 300px;
  padding: 3rem;
  border-radius: 20px;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: .2rem;
  background: linear-gradient(to bottom, #232526,#414345);
  font-family: "Oswald", sans-serif;
`;
const MissonStatusLabel = styled.h2`
font-weight: 500;
  letter-spacing: 2px;
  font-size: 2rem;
  color: ${(gameWon) => gameWon ? "limegreen" : "red"};
`

const RestartButton = styled.button`
  font-family: inherit;
  cursor: pointer;
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 0.3em 1.25em;
  border: none;
  color: #fff;
  background: linear-gradient(to right, #ed213a, #93291e);
  transition: transform 0.3s ease;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  width: 100%;
`;
