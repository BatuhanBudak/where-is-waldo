import { useContext, useEffect, useState } from "react";
import  { GameControllerContext } from "../components/GameControllerProvider";
import useFirebase from "./useFirebase";

export default function useHighScoreMenu() {
  const [showHighScoreScreen, setShowHighScoreScreen] = useState(false);
  const { isGameOver } = useContext(GameControllerContext);
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
  }, [isGameOver, checkForHighScore]);

  return { showHighScoreScreen, setShowHighScoreScreen, isHighScore };
}
