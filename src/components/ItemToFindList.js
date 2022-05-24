import React from "react";
import styled from "styled-components";
import ItemToFind from "./ItemToFind";

export default function ItemToFindList({
  itemList,
  toggleCharacterFound,
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
          toggleCharacterFound= {toggleCharacterFound}
          checkCoordsForCharacter= {checkCoordsForCharacter}
          isContextMenuItem={isContextMenuItem}
        />
      );
    });
  if (isContextMenuItem) {
    return (
      <ContextMenuCharactersContainer>
        {contextMenuItems}
      </ContextMenuCharactersContainer>
    );
  } else if (isDropDownMenuItem) {
    return <GenericCharactersContainer>{items}</GenericCharactersContainer>;
  } else if (isStartDialogueItem)
    return <GenericCharactersContainer>{items}</GenericCharactersContainer>;
}

const ContextMenuCharactersContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-family: "Nova Mono", monospace;
  padding: 0.5rem;
  margin: 0;
  list-style: none;
  height: inherit;
  width: inherit;
  justify-content: space-around;
  border-radius: 10px;
  background: linear-gradient(to bottom, #c9d6ff, #e2e2e2);
  color: black;
  align-items: flex-start;
`;
const GenericCharactersContainer = styled(ContextMenuCharactersContainer)`
  background: none;
  width: 100%;
  color: white;
`;
