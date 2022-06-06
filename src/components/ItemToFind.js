import React from "react";
import {
  DifficultyLabel,
  ContextMenuListItem,
  ContextMenuItemName,
  DropDownMenuListItem,
  CharacterInfo,
  StyledImage,
  CharacterDetail,
  CharacterName,
  CharacterFranchise,
} from "../styledComponents/ItemtoFindStyles";
export default function ItemToFind({
  item,
  isContextMenuItem,
  isDropDownMenuItem,
  isStartDialogueItem,
  checkCoordsForCharacter,
}) {
  const { difficulty, imageUrl, imageName, name, franchise, found, id } = item;

  function genericItem(found) {
    return (
      <DropDownMenuListItem>
        <DifficultyLabel difficulty={difficulty}>{difficulty}</DifficultyLabel>
        <CharacterInfo>
          <StyledImage src={imageUrl} alt={imageName} found={found} />
          <CharacterDetail found={found}>
            <CharacterName>{name}</CharacterName>
            <CharacterFranchise>{franchise}</CharacterFranchise>
          </CharacterDetail>
        </CharacterInfo>
      </DropDownMenuListItem>
    );
  }

  if (isContextMenuItem) {
    return (
      <ContextMenuListItem onClick={(e) => checkCoordsForCharacter(e, id)}>
        <ContextMenuItemName>{name}</ContextMenuItemName>
      </ContextMenuListItem>
    );
  } else if (isDropDownMenuItem) {
    return (
      // <DropDownMenuListItem>
      //   <DifficultyLabel difficulty={difficulty}>{difficulty}</DifficultyLabel>
      //   <CharacterInfo>
      //     <StyledImage src={imageUrl} alt={imageName} found={found} />
      //     <CharacterDetail found={found}>
      //       <CharacterName>{name}</CharacterName>
      //       <CharacterFranchise>{franchise}</CharacterFranchise>
      //     </CharacterDetail>
      //   </CharacterInfo>
      // </DropDownMenuListItem>
      genericItem(found)
    );
  } else if (isStartDialogueItem) {
    return (
      // <DropDownMenuListItem>
      //   <DifficultyLabel difficulty={difficulty}>{difficulty}</DifficultyLabel>
      //   <CharacterInfo>
      //     <StyledImage src={imageUrl} alt={imageName} />
      //     <CharacterDetail>
      //       <CharacterName>{name}</CharacterName>
      //       <CharacterFranchise>{franchise}</CharacterFranchise>
      //     </CharacterDetail>
      //   </CharacterInfo>
      // </DropDownMenuListItem>
      genericItem()
    );
  }
}
