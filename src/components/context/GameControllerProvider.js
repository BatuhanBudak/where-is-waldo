import { useEffect, useState, createContext, useReducer } from "react";
import imagesData from "../../imagesData";
import useToggle from "../../hooks/useToggle";

let GameControllerContext = createContext();

function GameControllerProvider({ children }) {
  // const [isGameOver, setIsGameOver] = useState(false);
  // const [imageList, setImageList] = useState(imagesData[0]);
  // const [modalOpen, toggleModalOpen] = useState(true);
  // const [modalMode, setModalMode] = useState("start");
  // const [isGameStarted, setisGameStarted] = useState(false);
  // const [foundItemsCount, setFoundItemsCount] = useState(0);
  // const [gameWon, setGameWon] = useState(false);

  // const initialState = {
  //   isGameOver: false,
  //   imageList: imagesData[0],
  //   modalOpen: true,
  //   modalMode: "start",
  //   isGameStarted: false,
  //   foundItemsCount: 0,
  //   gameWon: false,
  // };

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "startGame": {
          return {
            ...state,
            imageList: action.by,
            modalOpen: false,
            isGameStarted: true,
            isGameOver: false,
            isGameWon: false,
            itemsToFind: 3,
          };
        }
        case "endGame": {
          return {
            ...state,
            modalOpen: true,
            isGameStarted: false,
            isGameOver: true,
            modalMode: "end",
            itemsToFind: 0,
          };
        }
        case "restartGame": {
          return {
            ...state,
            modalOpen: true,
            modalMode: "start",
            imageList: imagesData[0],
            isGameStarted: false,
            isGameOver: false,
            itemsToFind: 3,
            gameWon: false,
          };
        }
        case "decrementItemsToFind": {
          return {
            ...state,
            itemsToFind: state.itemsToFind - 1,
          };
        }
        case "toggleCharacter": {
          // return { ...state, imageList: toggleCharacterFound(action.id) };
          const newImageList = toggleCharacterFound(state, action.value);
          return { ...state, imageList: newImageList};
        }
        case "wonGame": {
          return { ...state, gameWon: true };
        }
        case "loseGameByTime": {
          return { ...state, gameWon: false, isGameOver: true };
        }
        default: {
          return state ;
        }
      }
    },
    {
      isGameOver: false,
      imageList: imagesData[0],
      modalOpen: true,
      modalMode: "start",
      isGameStarted: false,
      itemsToFind: 3,
      gameWon: false,
    }
  );

  // function endGame() {
  //   // setIsGameOver(true);
  //   // setisGameStarted(false);
  //   // setModalMode("end");
  //   // toggleModalOpen(true);
  //   // setFoundItemsCount(0);
  // }
  // const startGame = (image) => {
  //   setImageList(image);
  //   toggleModalOpen(false);
  //   setisGameStarted(true);
  //   setIsGameOver(false);
  // };

  function toggleCharacterFound(arr, id){
    const {imageList} = arr;
    const newItemList = imageList.itemList.map((item) => {
          if (item.id === id) {
            return { ...item, found: true };
          } else {
            return item;
          }
        });
        return {...imageList, itemList: newItemList};
      }
   

  // function restartGame() {
  //   setModalMode("start");
  //   toggleModalOpen(true);
  //   setFoundItemsCount(0);
  //   setImageList(imagesData[0]);
  //   setisGameStarted(false);
  //   setIsGameOver(false);
  //   setGameWon(false);
  // }

  useEffect(() => {
    if (state.itemsToFind === 0 && !state.isGameOver && state.isGameStarted) {
      dispatch({ type: "endGame" });
    } else if (!state.gameWon && state.isGameOver && state.isGameStarted) {
      dispatch({ type: "endGame" });
    }
  }, [
    state.itemsToFind,
    state.isGameOver,
    state.isGameStarted,
    state.gameWon,
  ]);

  return (
    <GameControllerContext.Provider value={[state, dispatch]}>
      {children}
    </GameControllerContext.Provider>
  );
}
export { GameControllerProvider, GameControllerContext };
