import React, { useRef } from "react";
import styled from "styled-components";
import CharactersContextMenu from "./CharactersContextMenu";
import useContextMenu from "../hooks/useContextMenu";

export default function MainImage({ imageList, toggleCharacterFound }) {
  const { x, y, showMenu, setShowMenu, handleMainImageClick } =
    useContextMenu();
  const imageRef = useRef(null);

  const checkCoordsForCharacter = (id) => {
    const coordinates = getCharacterCoords(id);

    if (isCoordsInRange(coordinates)) {
      toggleCharacterFound(id);
      setShowMenu();
    } else {
      setShowMenu();
    }
  };
  const getCharacterCoords = (id) => {
    const characterArr = imageList.itemList.filter((item) => item.id === id);
    const character = { ...characterArr[0] };
    const { charX, charY } = character.coords;
    const [minX, maxX] = charX;
    const [minY, maxY] = charY;
    return {minX, maxX, minY, maxY}
  };
  const isCoordsInRange = ({minX, maxX, minY, maxY}) => {
    const imageWidth = Number(imageRef.current.getBoundingClientRect().width.toFixed(2));
    const imageHeight = Number(imageRef.current.getBoundingClientRect().height.toFixed(2));
    //Check if the coords are in range 
    return minX * imageWidth <= x && x <= maxX * imageWidth && minY * imageHeight <= y && y <= maxY * imageHeight;
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
        toggleCharacterFound={toggleCharacterFound}
      />
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
