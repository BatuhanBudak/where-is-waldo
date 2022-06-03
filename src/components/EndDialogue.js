import React, { useContext } from "react";
import ScoreForm from "./ScoreForm";
import ScoresList from "./ScoresList";
import { TimeContext } from "./context/TimeContextProvider";
import { GameControllerContext } from "./context/GameControllerProvider";
import { formatTime } from "../utils/FormatTime";
import useHighScoreMenu from "../hooks/useHighScoreMenu";
import {
  DialogueWrapper,
  MissonStatusLabel,
  MissionFailTitles,
  RestartButton,
  MissionFailQuestion
} from "../styledComponents/endDialogueStyles";

export default function EndDialogue() {
  const { time } = useContext(TimeContext);
  const { gameWon, restartGame } = useContext(GameControllerContext);
  const { showHighScoreScreen, toggleHighScoreScreen, isHighScore } =
    useHighScoreMenu();

  if (gameWon && isHighScore) {
    return (
      <DialogueWrapper>
        <MissonStatusLabel gameWon={gameWon}>
          Misson Complete!
        </MissonStatusLabel>
        <ScoreForm
          toggleHighScoreScreen={toggleHighScoreScreen}
          showHighScoreScreen={showHighScoreScreen}
        />
        <ScoresList
          gameWon={gameWon}
          showHighScoreScreen={showHighScoreScreen}
        />
        <RestartButton onClick={restartGame}>
          restart
        </RestartButton>
      </DialogueWrapper>
    );
  } else if (gameWon && !isHighScore) {
    return (
      <DialogueWrapper>
        <MissonStatusLabel gameWon={gameWon}>
          Misson Complete!
        </MissonStatusLabel>
        <ScoresList
          gameWon={gameWon}
          showHighScoreScreen={showHighScoreScreen}
        />
        <MissionFailTitles>Your score: {formatTime(time)}</MissionFailTitles>
        <RestartButton onClick={restartGame}>
          restart
        </RestartButton>
      </DialogueWrapper>
    );
  } else if (!gameWon) {
    return (
      <DialogueWrapper>
        <MissonStatusLabel gameWon={gameWon}>Misson Fail</MissonStatusLabel>
        <MissionFailTitles>Your score: {formatTime(time)}</MissionFailTitles>
        <MissionFailQuestion>Try again?</MissionFailQuestion>
        <RestartButton onClick={restartGame}>
          restart
        </RestartButton>
      </DialogueWrapper>
    );
  }
}
