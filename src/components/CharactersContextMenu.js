import ItemToFindList from "./ItemToFindList";
import styled from "styled-components";
import React from "react";

const CharactersContextMenu = ({
  x,
  y,
  showMenu,
  itemList,
  toggleCharacterFound,
  checkCoordsForCharacter,
}) => {
  const NAVBARHEIGHT = 60;

  //Decrement navbarheight since its position is fixed
  const StyledContextMenuContainer = styled.div`
    top: ${({ y }) => y - NAVBARHEIGHT + "px"};
    left: ${({ x }) => x + "px"};
    position: absolute;
    display: ${({ showMenu }) => (showMenu ? "block" : "none")};
    width: 150px;
    height: 150px;
  `;

  return (
    <StyledContextMenuContainer showMenu={showMenu} x={x} y={y}>
      <ItemToFindList
        itemList={itemList}
        isContextMenuItem={true}
        toggleCharacterFound={toggleCharacterFound}
        checkCoordsForCharacter={checkCoordsForCharacter}
      />
    </StyledContextMenuContainer>
  );
};

export default CharactersContextMenu;
