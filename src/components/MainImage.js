import React, { useRef } from "react";
import styled from "styled-components";
import CharactersContextMenu from "./CharactersContextMenu";
import useContextMenu from "../hooks/useContextMenu";
import Snackbar from "./Snackbar";
import useSnackbar from "../hooks/useSnackbar";
import useFirebase from "../hooks/useFirebase";
import useGameController from "../hooks/useGameController";

export default function MainImage({ imageList, toggleCharacterFound }) {
  const { x, y, showMenu, setShowMenu, handleMainImageClick } =
    useContextMenu();
  const [snackbarOpen, setSnackbarOpen, name, setName, found, setFound] =
    useSnackbar();
  const imageRef = useRef(null);
  const [getCoordsForCharacter] = useFirebase();
  const {foundItemsCount,setFoundItemsCount} = useGameController();

  const isCoordsInRange = ({ minX, maxX, minY, maxY }) => {
    const { imageWidth, imageHeight } = getImageSize();
    //Check if the coords are in range
    return (
      minX * imageWidth <= x &&
      x <= maxX * imageWidth &&
      minY * imageHeight <= y &&
      y <= maxY * imageHeight
    );
  };

  function getImageSize() {
    const imageWidth = Number(
      imageRef.current.getBoundingClientRect().width.toFixed(2)
    );
    const imageHeight = Number(
      imageRef.current.getBoundingClientRect().height.toFixed(2)
    );
    return { imageWidth, imageHeight };
  }

  function handleCharacterNotFound() {
    setShowMenu();
    setFound(false);
    setSnackbarOpen(true);
  }

  function handleCharacterFound(id) {
    toggleCharacterFound(id);
    setFoundItemsCount(foundItemsCount + 1 );
    setShowMenu();
    const characterName = getCharacterName(id);
    setName(characterName);
    setFound(true);
    setSnackbarOpen(true);
  }

  async function checkCoordsForCharacter(id) {
    const coordinates = await getCoordsForCharacter(id);

    if (isCoordsInRange(coordinates)) {
      handleCharacterFound(id);
    } else {
      handleCharacterNotFound();
    }
  }
  const getCharacterName = (id) => {
    const character = imageList.itemList.filter((item) => item.id === id);
    return { ...character[0] }.name;
  };
  return (
    <StyledMain>
      <StyledImage
        src={imageList.imageUrl}
        alt={imageList.imageAuthor}
        ref={imageRef}
        onClick={(e) => handleMainImageClick(e, imageRef)}
      />
      <CharactersContextMenu
        x={x}
        y={y}
        showMenu={showMenu}
        itemList={imageList.itemList}
        checkCoordsForCharacter={checkCoordsForCharacter}
      />
      {snackbarOpen && <Snackbar name={name} found={found} />}
    </StyledMain>
  );
}

const StyledMain = styled.main`
  position: relative;
`;
const StyledImage = styled.img`
  width: 100%;
  display: block;
  margin-top: 3.75rem;
`;
