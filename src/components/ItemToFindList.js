import React from "react";
import styled from "styled-components";
import { ItemToFind } from "./ItemToFind";

export default function ItemToFindList({
  itemList,
  isContextMenuItem = false,
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

  return (
    <CharactersContainer>
      {isContextMenuItem ? contextMenuItems : items}
    </CharactersContainer>
  );
}

const CharactersContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.3rem;
  font-family: "Nova Mono", monospace;
  padding: 0.5rem;
  margin: 0;
  list-style: none;
  height: auto;
  width: auto;
  border-radius: 10px;
  background-color: #17134d;
  color: black;
  flex-direction: column;
  align-items: flex-start;
`;
