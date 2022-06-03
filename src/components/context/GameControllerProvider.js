import { useEffect, useState, createContext } from "react";
import imagesData from "../../imagesData";
import useToggle from "../../hooks/useToggle";

let GameControllerContext = createContext();

function GameControllerProvider({ children }) {
  const [isGameOver, setIsGameOver] = useState(false);
  const [imageList, setImageList] = useState(imagesData[0]);
  const [modalOpen, toggleModalOpen] = useState(true);
  const [modalMode, setModalMode] = useState("start");
  const [isGameStarted, setisGameStarted] = useState(false);
  const [foundItemsCount, setFoundItemsCount] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const startGame = (image) => {
    setImageList(image);
    toggleModalOpen(false);
    setisGameStarted(true);
    setIsGameOver(false);
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

  function restartGame() {
    setModalMode("start");
    toggleModalOpen(true);
    setFoundItemsCount(0);
    setImageList(imagesData[0]);
    setisGameStarted(false);
    setIsGameOver(false);
    setGameWon(false);
  }

  useEffect(() => {
    async function endGame() {
      setIsGameOver(true);
      setisGameStarted(false);
      setModalMode("end");
      toggleModalOpen(true);
      setFoundItemsCount(0);
    }
    if (foundItemsCount === 3 && !isGameOver && isGameStarted) {
      endGame();
    } else if (!gameWon && isGameOver && isGameStarted) {
      endGame();
    }
  }, [foundItemsCount, isGameOver, isGameStarted, toggleModalOpen, gameWon]);

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
        gameWon,
        setGameWon,
        setIsGameOver,
        restartGame,
      }}
    >
      {children}
    </GameControllerContext.Provider>
  );
}
export { GameControllerProvider, GameControllerContext };
