import React from "react";
import styled from "styled-components";
import ItemToFind from "./ItemToFind";

export default function ItemToFindList({
  checkCoordsForCharacter,
  isContextMenuItem = false,
  isDropDownMenuItem = false,
  isStartDialogueItem = false,
  imageList
}) {
  const items = imageList.itemList.map((item) => (
    <ItemToFind
      key={item.id}
      item={item}
      isDropDownMenuItem={isDropDownMenuItem}
      isStartDialogueItem={isStartDialogueItem}
    />
  ));
  const contextMenuItems = imageList.itemList
    .filter((item) => !item.found)
    .map((item) => {
      return (
        <ItemToFind
          key={item.id}
          item={item}
          checkCoordsForCharacter={checkCoordsForCharacter}
          isContextMenuItem={isContextMenuItem}
          isDropDownMenuItem={isDropDownMenuItem}
          isStartDialogueItem={isStartDialogueItem}
        />
      );
    });
  if (isContextMenuItem) {
    return (
      <ContextMenuCharactersList>{contextMenuItems}</ContextMenuCharactersList>
    );
  } else if (isDropDownMenuItem) {
    return <DropDownCharactersList>{items}</DropDownCharactersList>;
  } else if (isStartDialogueItem)
    return <StartDialogueCharactersList>{items}</StartDialogueCharactersList>;
}

const ContextMenuCharactersList = styled.ul`
  display: flex;
  flex-direction: column;
  font-family: "Nova Mono", monospace;
  padding: 0;
  margin: 0;
  list-style: none;
  justify-content: space-around;
  border-radius: 10px;
  background: linear-gradient(to bottom, #c9d6ff, #e2e2e2);
  color: black;
  align-items: flex-start;
`;
const StartDialogueCharactersList = styled(ContextMenuCharactersList)`
  background: none;
  width: 100%;
  color: black;
`;
const DropDownCharactersList = styled(ContextMenuCharactersList)`
  background: none;
  width: 100%;
  color: white;
`;
