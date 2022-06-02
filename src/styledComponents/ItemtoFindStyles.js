import styled from "styled-components";

export const DifficultyLabel = styled.p`
  margin-left: auto;
  color: ${({ difficulty }) => {
    if (difficulty === "easy") return "#067d06";
    else if (difficulty === "medium") return "darkgoldenrod";
    else if (difficulty === "hard") return "#e65a5a";
  }};
  font-weight: 700;
`;

export const ContextMenuListItem = styled.li`
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  opacity: 0.7;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;
export const ContextMenuItemName = styled.h3`
  font-size: 0.8rem;
  font-weight: 400;
`;

export const DropDownMenuListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CharacterInfo = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
export const StyledImage = styled.img`
  filter: ${({ found }) => {
    if (found) return "invert(50%)";
    else {
      return "invert(0)";
    }
  }};
  width: 100%;
  max-height: 5.5rem;
  max-width: 5.5rem;
  object-fit: scale-down;
`;
export const CharacterDetail = styled.div`
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
export const CharacterName = styled.h3`
  font-size: 1.25rem;
  letter-spacing: 2.5px;
  font-weight: 400;
`;
export const CharacterFranchise = styled.h4`
  font-size: .8rem;
  font-weight: 400;
  letter-spacing: 0;
`;