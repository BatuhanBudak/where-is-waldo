import React from "react";
import styled from "styled-components";
import ItemToFind from "./ItemToFind";

export default function ItemToFindList({
  itemList,
  checkCoordsForCharacter,
  isContextMenuItem = false,
  isDropDownMenuItem = false,
  isStartDialogueItem = false,
}) {
  const items = itemList.map((item) => (
    <ItemToFind key={item.id} item={item} />
  ));
  const contextMenuItems = itemList
    .filter((item) => !item.found)
    .map((item) => {
      return (
        <ItemToFind
          key={item.id}
          item={item}
          checkCoordsForCharacter= {checkCoordsForCharacter}
          isContextMenuItem={isContextMenuItem}
        />
      );
    });
  if (isContextMenuItem) {
    return (
      <ContextMenuCharactersList>
        {contextMenuItems}
      </ContextMenuCharactersList>
    );
  } else if (isDropDownMenuItem) {
    return <GenericCharactersList>{items}</GenericCharactersList>;
  } else if (isStartDialogueItem)
    return <GenericCharactersList>{items}</GenericCharactersList>;
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
const GenericCharactersList = styled(ContextMenuCharactersList)`
  background: none;
  width: 100%;
  color: white;
`;
