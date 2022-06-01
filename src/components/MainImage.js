import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import CharactersContextMenu from "./CharactersContextMenu";
import Snackbar from "./Snackbar";
import useSnackbar from "../hooks/useSnackbar";
import useFirebase from "../hooks/useFirebase";
import { GameControllerContext } from "./GameControllerProvider";
import useToggle from "../hooks/useToggle";

export default function MainImage() {
  const {snackbarOpen, setSnackbarOpen, name, setName, found, setFound} =
    useSnackbar();
  const imageRef = useRef(null);
  const { getCoordsForCharacter } = useFirebase();
  const {
    imageList,
    toggleCharacterFound,
    foundItemsCount,
    setFoundItemsCount,
  } = useContext(GameControllerContext);
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
    console.log(x, y);
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
    toggleCharacterFound(id);
    setFoundItemsCount(foundItemsCount + 1);
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
    const character = imageList.itemList.filter((item) => item.id === id);
    return { ...character[0] }.name;
  };
  return (
    <StyledMain>
      <StyledImage
        src={imageList.imageUrl}
        alt={imageList.imageAuthor}
        ref={imageRef}
        onClick={(e) => handleMainImageClick(e)}
      />
      <CharactersContextMenu
        x={x}
        y={y}
        showMenu={showMenu}
        imageList={imageList}
        checkCoordsForCharacter={checkCoordsForCharacter}
        imageHeight={imageHeight}
        imageWidth={imageWidth}
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
  height: auto;
  margin-top: 3.75rem;
`;
