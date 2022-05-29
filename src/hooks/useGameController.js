import { useEffect, useState } from "react";
import imagesData from "../imagesData";
import useToggle from "./useToggle";
import useTimer from "./useTimer";

export default function useGameController() {
    const [isGameOver, setIsGameOver] = useToggle(false);
    const [imageList, setImageList] = useState(imagesData[0]);
    const [modalOpen, toggleModalOpen] = useToggle(true);
    const [modalMode, setModalMode] = useState("start");
    const [isGameStarted, setisGameStarted] = useToggle(false);
    const [foundItemsCount, setFoundItemsCount] = useState(0);
    const [gameWon, setGameWon] = useState("");
    let time, setTime;

  const startGame = () => {
    toggleModalOpen();
    setisGameStarted(true);
    setIsGameOver(false);
  };
  const restartGame = () => {
    setIsGameOver(false);
    setModalMode("start");
    setFoundItemsCount(0);
    setImageList(imagesData[0]);
    // restartTime();
  };

  useEffect(() => {
   
    async function endGame() {
      setIsGameOver(true);
      setisGameStarted(false);
      setModalMode("end");
      toggleModalOpen();
    }
    if (foundItemsCount === 3 && !isGameOver ) {
      endGame();
    }
  }, [foundItemsCount]);

  return {
    imageList,
    setImageList,
    modalOpen,
    modalMode,
    isGameOver,
    foundItemsCount,
    setFoundItemsCount,
    startGame,
    gameWon,
    isGameStarted,
  };
}
