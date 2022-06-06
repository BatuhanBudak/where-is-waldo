import React, { useContext, useRef, useState } from "react";
import CharactersContextMenu from "./CharactersContextMenu";
import Snackbar from "./Snackbar";
import useSnackbar from "../hooks/useSnackbar";
import useFirebase from "../hooks/useFirebase";
import { GameControllerContext } from "./context/GameControllerProvider";
import useToggle from "../hooks/useToggle";
import { StyledMain, StyledImage } from "../styledComponents/MainImageStyles";

export default function MainImage() {
  const { snackbarOpen, setSnackbarOpen, name, setName, found, setFound } =
    useSnackbar();
  const imageRef = useRef(null);
  const { getCoordsForCharacter } = useFirebase();
  const [
   state,
   dispatch
   ] = useContext(GameControllerContext);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [showMenu, setShowMenu] = useToggle();

  const handleMainImageClick = (e) => {
    e.preventDefault();
    getImageSize();
    if (showMenu) {
      setShowMenu();
    } else {
      setX(Number(e.pageX));
      setY(Number(e.pageY));
      setShowMenu();
      console.log(x, y);
    }
  };

  const isCoordsInRange = ({ minX, maxX, minY, maxY }) => {
    
    //Check if the coords are in range
    return (
      minX * imageWidth <= x &&
      x <= maxX * imageWidth &&
      minY * imageHeight <= y &&
      y <= maxY * imageHeight
    );
  };

  function getImageSize() {
    setImageWidth(Number(imageRef.current.getBoundingClientRect().width));
    setImageHeight(Number(imageRef.current.getBoundingClientRect().height));
    return { imageWidth, imageHeight };
  }

  function handleCharacterNotFound() {
    setShowMenu();
    setFound(false);
    setSnackbarOpen(true);
  }

  function handleCharacterFound(id) {
    // toggleCharacterFound(id);
    dispatch({type: 'toggleCharacter', value:id});
    dispatch({type: 'decrementItemsToFind'});
    // setFoundItemsCount(foundItemsCount + 1);
    setShowMenu();
    const characterName = getCharacterName(id);
    setName(characterName);
    setFound(true);
    setSnackbarOpen(true);
  }

  async function checkCoordsForCharacter(e, id) {
    e.stopPropagation();
    const coordinates = await getCoordsForCharacter(id);

    if (isCoordsInRange(coordinates)) {
      handleCharacterFound(id);
    } else {
      handleCharacterNotFound();
    }
  }
  const getCharacterName = (id) => {
    const character = state.imageList.itemList.filter((item) => item.id === id);
    return { ...character[0] }.name;
  };
  return (
    <StyledMain>
      <StyledImage
        src={state.imageList.imageUrl}
        alt={state.imageList.imageAuthor}
        ref={imageRef}
        onClick={(e) => handleMainImageClick(e)}
      />
      <CharactersContextMenu
        x={x}
        y={y}
        showMenu={showMenu}
        imageList={state.imageList}
        checkCoordsForCharacter={checkCoordsForCharacter}
        imageHeight={imageHeight}
        imageWidth={imageWidth}
      />
      {snackbarOpen && <Snackbar name={name} found={found} />}
    </StyledMain>
  );
}
