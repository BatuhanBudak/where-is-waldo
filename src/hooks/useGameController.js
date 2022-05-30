import { useEffect, useState } from "react";
import imagesData from "../imagesData";
import useToggle from "./useToggle";
import useTimer from "./useTimer";

export default function useGameController() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [imageList, setImageList] = useState(imagesData[0]);
  const [modalOpen, toggleModalOpen] = useState(true);
  const [modalMode, setModalMode] = useState("start");
  const [isGameStarted, setisGameStarted] = useState(false);
  const [foundItemsCount, setFoundItemsCount] = useState(0);

  const { restartTime, setGameWon} = useTimer(isGameOver, isGameStarted);

  const startGame = () => {
    toggleModalOpen();
    setisGameStarted(true);
    setIsGameOver(false);
  };
  const restartGame = () => {
    setGameWon("");
    setIsGameOver(false);
    setModalMode("start");
    setFoundItemsCount(0);
    restartTime();
    setImageList(imagesData[0]);
  };

  useEffect(() => {
    async function endGame() {
      // isGameWon();
      setIsGameOver(true);
      setisGameStarted(false);
      setModalMode("end");
      toggleModalOpen();
    }
    if (foundItemsCount === 3 && !isGameOver && isGameStarted) {
      endGame();
    }
  }, [foundItemsCount, isGameOver, isGameStarted]);

  return {
    imageList,
    setImageList,
    modalOpen,
    modalMode,
    isGameOver,
    foundItemsCount,
    setFoundItemsCount,
    startGame,
    isGameStarted,
  };
}
