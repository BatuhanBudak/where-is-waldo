import React from "react";
import styled from "styled-components";
import locNar from "../assets/the-loc-nar.jpg";
import useGameController from "../hooks/useGameController";
import ItemToFindList from "./ItemToFindList";

export default function StartDialogue({ imageList }) {
  const { startGame } = useGameController();
  return (
    <>
      <StyledTitle>
        WhereAre<RedTitle>They?</RedTitle>
      </StyledTitle>
      <DialogueWrapper>
        <BackgroundBlock></BackgroundBlock>
        <InfoContainer>
          <ImageDetailContainer>
            <ImageName>{imageList.imageName}</ImageName>
            <ImageAuthor>by {imageList.imageAuthor}</ImageAuthor>
          </ImageDetailContainer>
          <ItemToFindList
            itemList={imageList.itemList}
            isStartDialogueItem={true}
          />
          <StartButton onClick={startGame}>Start</StartButton>
        </InfoContainer>
      </DialogueWrapper>
    </>
  );
}
const StyledTitle = styled.h1`
  font-family: "Oswald";
  margin-bottom: 2rem;
  font-size: 3rem;
  letter-spacing: 8px;
  padding-bottom: 0.3rem;
  border-bottom: 2px solid white;
  color: white;
`;
const RedTitle = styled.span`
  color: red;
  font-family: "Nova Mono";
  font-size: 3.25rem;
`;
const DialogueWrapper = styled.div`
  display: flex;
  width: 45rem;
  height: 32rem;
  border-radius: 20px;
  overflow: hidden;
`;
const BackgroundBlock = styled.div`
  width: 55%;
  background-image: url(/static/media/the-loc-nar.314cec99f414807b7e27.jpg);
  background-position: center;
  background-size: cover;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 45%;
  background: linear-gradient(to bottom, #ece9e6, #fff);
  padding-inline: 1rem;
  font-family: "Oswald", sans-serif;
`;
const ImageDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageName = styled.h2`
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 2rem;
`;
const ImageAuthor = styled.h2`
  font-weight: 400;
  letter-spacing: 3px;
  margin-top: -0.25em;
  font-size: 0.875rem;
  font-style: italic;
`;
const StartButton = styled.button`
  font-family: inherit;
  cursor: pointer;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 0.3em 1.25em;
  border: none;
  border-radius: 1em;
  color: #fff;
  background: linear-gradient(to right, #ed213a, #93291e);
  transition: transform 0.3s ease;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
