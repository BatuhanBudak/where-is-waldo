import styled from 'styled-components';
import React from "react";

export default function ItemToFind({ item, isContextMenuItem, checkCoordsForCharacter }) {
    const { difficulty, image, imageName, name, franchise, found, id } = item;
  
    const DifficultyLabel = styled.p`
      margin-left: auto;
      color: ${({ difficulty }) => {
        if (difficulty === "easy") return "#067d06";
        else if (difficulty === "medium") return "darkgoldenrod";
        else if (difficulty === "hard") return "#e65a5a";
      }};
      font-weight: 700;
    `;
  
    if (isContextMenuItem) {
      return (
        <ContextMenuListItem onClick = {() => checkCoordsForCharacter(id)} >
          <ContextMenuItemName>{name}</ContextMenuItemName>
        </ContextMenuListItem>
      );
    } else {
        //Style is same for drowDownMenuItems and StartDialogue characters
      return (
        <DropDownMenuListItem>
          <DifficultyLabel difficulty={difficulty}>{difficulty}</DifficultyLabel>
          <CharacterInfo>
            <StyledImage src={image} alt={imageName} found={found} />
            <CharacterDetail found={found}>
              <CharacterName>{name}</CharacterName>
              <CharacterFranchise>{franchise}</CharacterFranchise>
            </CharacterDetail>
          </CharacterInfo>
        </DropDownMenuListItem>
      );
    }
  }
  
  const ContextMenuListItem = styled.li`
    padding: 0.5rem 0.8rem;
    cursor: pointer;
    opacity: .7;
    &:hover,&:focus{
      opacity: 1;
    }
  `;
  const ContextMenuItemName = styled.h3`
    font-size: 1rem;
    font-weight: 400;
  `;
  
  const DropDownMenuListItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
  `

  const CharacterInfo = styled.div`
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  `;
  const StyledImage = styled.img`
    filter: ${({ found }) => {
      if (found) return "invert(50%)";
      else {
        return "invert(0)";
      }
    }};
    width: 100%;
    max-height: 5rem;
    max-width: 5.5rem;
    object-fit: cover;
  `;
  const CharacterDetail = styled.div`
    filter: ${({ found }) => {
      if (found) return "invert(50%)";
      else {
        return "invert(0)";
      }
    }};
    text-decoration: ${({ found }) => {
      return found ? "line-through" : "none";
    }};
  
    display: flex;
    flex-direction: column;
    align-items: center;
    letter-spacing: 2px;
  `;
  const CharacterName = styled.h3`
    font-size: 1.25rem;
    letter-spacing: 2.5px;
    font-weight: 400;
  `;
  const CharacterFranchise = styled.h4`
    font-size: 1rem;
    letter-spacing: 2px;
    font-weight: 400;
  `;
  