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
  MissionFailQuestion,
} from "../styledComponents/endDialogueStyles";

export default function EndDialogue() {
  const { time } = useContext(TimeContext);
  const [state, dispatch] = useContext(GameControllerContext);
  const { showHighScoreScreen, toggleHighScoreScreen, isHighScore } =
    useHighScoreMenu();

  const restartButton = (
    <RestartButton onClick={() => dispatch({ type: "restartGame" })}>
      restart
    </RestartButton>
  );

  if (state.gameWon && isHighScore) {
    return (
      <DialogueWrapper>
        <MissonStatusLabel gameWon={state.gameWon}>
          Misson Complete!
        </MissonStatusLabel>
        <ScoreForm
          toggleHighScoreScreen={toggleHighScoreScreen}
          showHighScoreScreen={showHighScoreScreen}
        />
        <ScoresList
          gameWon={state.gameWon}
          showHighScoreScreen={showHighScoreScreen}
        />
        {restartButton}
      </DialogueWrapper>
    );
  } else if (state.gameWon && !isHighScore) {
    return (
      <DialogueWrapper>
        <MissonStatusLabel gameWon={state.gameWon}>
          Misson Complete!
        </MissonStatusLabel>
        <ScoresList
          gameWon={state.gameWon}
          showHighScoreScreen={showHighScoreScreen}
        />
        <MissionFailTitles>Your score: {formatTime(time)}</MissionFailTitles>
        {restartButton}
      </DialogueWrapper>
    );
  } else if (!state.gameWon) {
    return (
      <DialogueWrapper>
        <MissonStatusLabel gameWon={state.gameWon}>
          Misson Fail
        </MissonStatusLabel>
        <MissionFailTitles>Your score: lol you suck </MissionFailTitles>
        <MissionFailQuestion>Try again?</MissionFailQuestion>
        {restartButton}
      </DialogueWrapper>
    );
  }
}
