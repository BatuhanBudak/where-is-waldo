import { useContext, useEffect, useState } from "react";
import { GameControllerContext } from "../components/context/GameControllerProvider";
import { TimeContext } from "../components/context/TimeContextProvider";
import useFirebase from "./useFirebase";

export default function useHighScoreMenu() {
  const [showHighScoreScreen, setShowHighScoreScreen] = useState(false);
  const [isHighScore, setIsHighScore] = useState(false);
  const [hasCheckedScore, setHasCheckedScore] = useState(false);
  const [state] = useContext(GameControllerContext);
  const { time } = useContext(TimeContext);
  const { checkForHighScore } = useFirebase();

  function toggleHighScoreScreen() {
    setShowHighScoreScreen((prev) => !prev);
  }

  function handleScoreStatus(status) {
    setIsHighScore(status);
    setShowHighScoreScreen(status);
  }
  useEffect(() => {
    async function checkForScore(time) {
      const scoreStatus = await checkForHighScore(state.imageList.id, time);
      handleScoreStatus(scoreStatus);
    }
    if (state.isGameOver && !hasCheckedScore) {
      checkForScore(time);
      setHasCheckedScore(true);
    }
  }, [
    state.isGameOver,
    checkForHighScore,
    time,
    hasCheckedScore,
    state.imageList.id,
  ]);

  return { showHighScoreScreen, toggleHighScoreScreen, isHighScore };
}
