import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import useGameController from "./useGameController";
import useFirebase from "./useFirebase";

export default function useHighScoreMenu() {
  const [showHighScoreScreen, setShowHighScoreScreen] = useState(false);
  const { isGameOver } = useGameController();
  const { checkForHighScore } = useFirebase();
  const [isHighScore, setIsHighScore] = useState(false);

  function handleScoreStatus(status) {
    setIsHighScore(status);
    setShowHighScoreScreen(status);
  }
  useEffect(() => {
    async function checkForScore() {
      const scoreStatus = await checkForHighScore();
      handleScoreStatus(scoreStatus);
    }
    if (isGameOver) {
      checkForScore();
    }
  }, [isGameOver]);

  return { showHighScoreScreen, setShowHighScoreScreen, isHighScore };
}
