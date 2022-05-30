import { useEffect, useState, createContext } from "react";
import imagesData from "../imagesData";
import useToggle from "../hooks/useToggle";
// import useTimer from "./useTimer";

let GameControllerContext = createContext();

function GameControllerProvider({ children }) {
  const [isGameOver, setIsGameOver] = useState(false);
  const [imageList, setImageList] = useState(imagesData[0]);
  const [modalOpen, toggleModalOpen] = useToggle(true);
  const [modalMode, setModalMode] = useState("start");
  const [isGameStarted, setisGameStarted] = useState(false);
  const [foundItemsCount, setFoundItemsCount] = useState(0);

  const startGame = () => {
    toggleModalOpen();
    setisGameStarted(true);
    setIsGameOver(false);
    // startTimer(isGameOver, isGameStarted);
    setModalMode("start");
  };
  const restartGame = () => {
    // setGameWon(false);
    setIsGameOver(false);
    setisGameStarted(false);
    setModalMode("start");
    setFoundItemsCount(0);
    // restartTime();
    setImageList(imagesData[0]);
  };
  const toggleCharacterFound = (id) => {
    setImageList((image) => {
      const newItemList = image.itemList.map((item) => {
        if (item.id === id) {
          return { ...item, found: true };
        } else {
          return item;
        }
      });
      return { ...image, itemList: newItemList };
    });
  };

  useEffect(() => {
    async function endGame() {
      setIsGameOver(true);
      setisGameStarted(false);
      toggleModalOpen();
      setModalMode("end");
    }
    if (foundItemsCount === 3 && !isGameOver && isGameStarted) {
      endGame();
    }
  }, [foundItemsCount, isGameOver, isGameStarted, toggleModalOpen]);

  return (
    <GameControllerContext.Provider
      value={{
        modalOpen,
        imageList,
        modalMode,
        toggleCharacterFound,
        startGame,
        isGameOver,
        isGameStarted,
        foundItemsCount,
        setFoundItemsCount,
      }}
    >
      {children}
    </GameControllerContext.Provider>
  );
}
export { GameControllerProvider, GameControllerContext };
