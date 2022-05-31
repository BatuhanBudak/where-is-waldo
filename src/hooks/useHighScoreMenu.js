import { useContext, useEffect, useState } from "react";
import { GameControllerContext } from "../components/GameControllerProvider";
import { TimeContext } from "../components/TimeContextProvider";
import useFirebase from "./useFirebase";

export default function useHighScoreMenu() {
  const [showHighScoreScreen, setShowHighScoreScreen] = useState(false);
  const [isHighScore, setIsHighScore] = useState(false);
  const [hasCheckedScore, setHasCheckedScore] = useState(false);
  const { isGameOver } = useContext(GameControllerContext);
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
      const scoreStatus = await checkForHighScore(time);
      handleScoreStatus(scoreStatus);
    }
    if (isGameOver && !hasCheckedScore) {
      checkForScore(time);
      setHasCheckedScore(true);
    }
  }, [isGameOver, checkForHighScore, time, hasCheckedScore]);

  return { showHighScoreScreen, toggleHighScoreScreen, isHighScore };
}
