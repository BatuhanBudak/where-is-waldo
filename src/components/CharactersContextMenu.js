import ItemToFindList from "./ItemToFindList";
import React from "react";
import { StyledContextMenuContainer } from "../styledComponents/CharacterContextMenuStyles";
const CharactersContextMenu = ({
  x,
  y,
  showMenu,
  imageList,
  checkCoordsForCharacter,
  imageHeight,
  imageWidth,
}) => {
  return (
    <StyledContextMenuContainer
      showMenu={showMenu}
      x={x}
      y={y}
      imageWidth={imageWidth}
      imageHeight={imageHeight}
    >
      <ItemToFindList
        isContextMenuItem={true}
        checkCoordsForCharacter={checkCoordsForCharacter}
        imageList={imageList}
      />
    </StyledContextMenuContainer>
  );
};


export default CharactersContextMenu;
