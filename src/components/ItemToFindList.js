import React from "react";
import styled from "styled-components";
import  ItemToFind from "./ItemToFind";

export default function ItemToFindList({
  itemList,
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
          isContextMenuItem={isContextMenuItem}
        />
      );
    });
  if (isContextMenuItem) {
    return <ContextMenuCharactersContainer>{contextMenuItems}</ContextMenuCharactersContainer>;
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
  height: auto;
  width: auto;
  border-radius: 10px;
  background: linear-gradient(to bottom, #C9D6FF, #E2E2E2);
  color: black;
  align-items: flex-start;
`;
const GenericCharactersContainer =styled(ContextMenuCharactersContainer)`
  background: none;
  width: 100%;
  color: white;
`