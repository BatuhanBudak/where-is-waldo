import React from "react";
import {
  StartGridDiv,
  StyledTitle,
  SpanWithMargin,
  DialogueWrapper,
  BackgroundBlock,
  InfoContainer,
  ImageDetailContainer,
  ImageName,
  ImageAuthor,
  StartButton,
} from "../styledComponents/StartDialogueStyles";
import ItemToFindList from "./ItemToFindList";

export default function StartDialogue({ imageList, startGame }) {
  return (
    <StartGridDiv>
      <StyledTitle>Gotta</StyledTitle>
      <StyledTitle>
        <SpanWithMargin>F</SpanWithMargin> <SpanWithMargin>i</SpanWithMargin>{" "}
        <SpanWithMargin>n</SpanWithMargin> <SpanWithMargin>d</SpanWithMargin>
      </StyledTitle>
      <StyledTitle>Them</StyledTitle>
      <StyledTitle>
        <SpanWithMargin>A</SpanWithMargin> <SpanWithMargin>l</SpanWithMargin>{" "}
        <SpanWithMargin>l</SpanWithMargin>
      </StyledTitle>
      <DialogueWrapper>
        <BackgroundBlock src={imageList.imageUrl} alt={imageList.imageAuthor}/>
        <InfoContainer>
          <ImageDetailContainer>
            <ImageName>{imageList.imageName}</ImageName>
            <ImageAuthor>by {imageList.imageAuthor}</ImageAuthor>
          </ImageDetailContainer>
          <ItemToFindList imageList={imageList} isStartDialogueItem={true} />
          <StartButton onClick={startGame}>Start</StartButton>
        </InfoContainer>
      </DialogueWrapper>
    </StartGridDiv>
  );
}
