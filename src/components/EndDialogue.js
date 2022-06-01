import React, { useContext } from "react";
import ScoreForm from "./ScoreForm";
import ScoresList from "./ScoresList";
import { TimeContext } from "./TimeContextProvider";
import { GameControllerContext } from "./GameControllerProvider";
import { formatTime } from "../utils/FormatTime";
import useHighScoreMenu from "../hooks/useHighScoreMenu";
import {
  DialogueWrapper,
  MissonStatusLabel,
  MissionFailTitles,
  RestartButton,
} from "../styledComponents/endDialogueStyles";

export default function EndDialogue() {
  const { time } = useContext(TimeContext);
  const { gameWon } = useContext(GameControllerContext);
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
        <RestartButton onClick={() => window.location.reload()}>
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
        <RestartButton onClick={() => window.location.reload()}>
          restart
        </RestartButton>
      </DialogueWrapper>
    );
  } else if (!gameWon) {
    return (
      <DialogueWrapper>
        <MissonStatusLabel gameWon={gameWon}>Misson Fail</MissonStatusLabel>
        <MissionFailTitles>Your score: {formatTime(time)}</MissionFailTitles>
        <MissionFailTitles>Try again?</MissionFailTitles>
        <RestartButton onClick={() => window.location.reload()}>
          restart
        </RestartButton>
      </DialogueWrapper>
    );
  }
}
