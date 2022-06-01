import React from "react";
import ItemToFind from "./ItemToFind";
import {
  ContextMenuCharactersList,
  StartDialogueCharactersList,
  DropDownCharactersList,
} from "../styledComponents/ItemToFindListStyles";

export default function ItemToFindList({
  checkCoordsForCharacter,
  isContextMenuItem = false,
  isDropDownMenuItem = false,
  isStartDialogueItem = false,
  imageList,
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
