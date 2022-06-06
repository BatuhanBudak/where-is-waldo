import { useEffect, createContext, useReducer, useRef } from "react";
import imagesData from "../../imagesData";
import useSnackbar from "../../hooks/useSnackbar";
import useFirebase from "../../hooks/useFirebase";
import Snackbar from "../../components/Snackbar";
let GameControllerContext = createContext();

function GameControllerProvider({ children }) {
  const { snackbarOpen, setSnackbarOpen, name, setName, found, setFound } =
    useSnackbar();
  const imageRef = useRef(null);
  const { getCoordsForCharacter } = useFirebase();

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
        //Win game if time is lesser than countdown
        case "winGame": {
          return { ...state, gameWon: true };
        }
        //Lose game if time is lesser than countdown
        case "loseGameByTime": {
          return { ...state, gameWon: false, isGameOver: true };
        }
        case "setCoordinates": {
          return {
            ...state,
            x: action.x,
            y: action.y,
            showContextMenu: !state.showContextMenu,
          };
        }
        case "setCurrentImageSize": {
          return {
            ...state,
            imageWidth: Number(state.ref.current.getBoundingClientRect().width),
            imageHeight: Number(
              state.ref.current.getBoundingClientRect().height
            ),
          };
        }
        case "toggleContextMenu": {
          return { ...state, showContextMenu: !state.showContextMenu };
        }
        case "characterFound": {
          const newImageList = toggleCharacterFound(state, action.value);
          return {
            ...state,
            showContextMenu: !state.showContextMenu,
            itemsToFind: state.itemsToFind - 1,
            imageList: newImageList,
          };
        }
        case "characterNotFound": {
          return { ...state, showContextMenu: !state.showContextMenu };
        }
        default: {
          return state;
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
      x: 0,
      y: 0,
      imageWidth: 0,
      imageHeight: 0,
      showContextMenu: false,
      ref: imageRef,
      name: name,
    }
  );

  function toggleCharacterFound(arr, id) {
    const { imageList } = arr;
    const newItemList = imageList.itemList.map((item) => {
      if (item.id === id) {
        return { ...item, found: true };
      } else {
        return item;
      }
    });
    return { ...imageList, itemList: newItemList };
  }

  const areCoordsInRange = ({ minX, maxX, minY, maxY }) => {
    //Check if the coords are in range
    return (
      minX * state.imageWidth <= state.x &&
      state.x <= maxX * state.imageWidth &&
      minY * state.imageHeight <= state.y &&
      state.y <= maxY * state.imageHeight
    );
  };

  function handleCharacterNotFound() {
    dispatch({ type: "characterNotFound" });
    setFound(false);
    setSnackbarOpen(true);
  }

  function handleCharacterFound(id) {
    dispatch({ type: "characterFound", value: id });
    const characterName = getCharacterName(id);
    setName(characterName);
    setFound(true);
    setSnackbarOpen(true);
  }

  async function checkCoordsForCharacter(e, id) {
    e.stopPropagation();
    const coordinates = await getCoordsForCharacter(id);

    if (areCoordsInRange(coordinates)) {
      handleCharacterFound(id);
    } else {
      handleCharacterNotFound();
    }
  }
  function getCharacterName(id) {
    const character = state.imageList.itemList.filter((item) => item.id === id);
    return { ...character[0] }.name;
  }

  useEffect(() => {
    if (state.itemsToFind === 0 && !state.isGameOver && state.isGameStarted) {
      dispatch({ type: "endGame" });
    } else if (!state.gameWon && state.isGameOver && state.isGameStarted) {
      dispatch({ type: "endGame" });
    }
  }, [state.itemsToFind, state.isGameOver, state.isGameStarted, state.gameWon]);

  return (
    <GameControllerContext.Provider
      value={[state, dispatch, checkCoordsForCharacter]}
    >
      {children}
      {snackbarOpen && <Snackbar name={name} found={found} />}
    </GameControllerContext.Provider>
  );
}
export { GameControllerProvider, GameControllerContext };
