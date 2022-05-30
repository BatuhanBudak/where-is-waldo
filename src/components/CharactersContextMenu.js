import ItemToFindList from "./ItemToFindList";
import styled from "styled-components";
import React from "react";

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

const MAXMENUHEIGHT = 100;
const MAXMENUWIDTH = 100;
const OFFSET = 5;

const StyledContextMenuContainer = styled.div`
  ${"" /* top: ${({ y }) => y - NAVBARHEIGHT + "px"}; */}
  top: ${({ y, imageHeight }) =>
    y + MAXMENUHEIGHT > imageHeight
      ? y - (MAXMENUHEIGHT + OFFSET) + "px"
      : y + "px"};

  ${"" /* left: ${({ x }) => x + "px"}; */}
  left: ${({ x, imageWidth }) =>
    x + MAXMENUWIDTH > imageWidth
      ? x - (MAXMENUWIDTH + OFFSET) + "px"
      : x + "px"};
  position: absolute;
  display: ${({ showMenu }) => (showMenu ? "block" : "none")};
  width: max-content;
  height: auto;
  max-width: 100px;
  max-height: 100px;
`;
export default CharactersContextMenu;
