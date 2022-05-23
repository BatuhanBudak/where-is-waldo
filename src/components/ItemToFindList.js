import React from "react";
import styled from "styled-components";

export default function ItemToFindList({ itemList }) {
  const items = itemList.map((item) => (
    <ItemToFind key={item.id} item={item} />
  ));

  return <CharactersContainer>{items}</CharactersContainer>;
}
function ItemToFind({ item }) {
  const { difficulty, image, imageName, name, franchise } = item;

  const Difficulty = styled.p`
    margin-left: auto;
    color: ${({ difficulty }) => {
      if (difficulty === "easy") return "#067d06";
      else if (difficulty === "medium") return "darkgoldenrod";
      else if (difficulty === "hard") return "#e65a5a";
    }};
    font-weight:700;
  `;
  return (
    <>
      <Difficulty difficulty={difficulty}>{difficulty}</Difficulty>
      <CharacterInfo>
        <StyledImage src={image} alt={imageName} />
        <CharacterDetail>
          <CharacterName>{name}</CharacterName>
          <CharacterFranchise>{franchise}</CharacterFranchise>
        </CharacterDetail>
      </CharacterInfo>
    </>
  );
}

const CharactersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.3rem;
  font-family: "Nova Mono", monospace;
  padding: .5rem ;
`;
const CharacterInfo = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
const StyledImage = styled.img`
  width: 100%;
  max-height: 5rem;
  max-width: 5.5rem;
  object-fit: cover;
`;
const CharacterDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 2px;
`;
const CharacterName = styled.h3`
    font-size: 1.25rem;
    letter-spacing: 2.5px;
    font-weight: 400;
`
const CharacterFranchise = styled.h4`
    font-size: 1rem;
    letter-spacing: 2px;
    font-weight: 400;
`