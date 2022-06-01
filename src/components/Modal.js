import React, { useContext } from "react";
import styled from "styled-components";
import StartDialogue from "./StartDialogue";
import EndDialogue from "./EndDialogue";
import { GameControllerContext } from "./GameControllerProvider";

export default function Modal() {
  const { imageList, modalMode, startGame, modalOpen } = useContext(
    GameControllerContext
  );

  if (modalOpen && modalMode === "start") {
    return (
      <StyledModal>
        <StartDialogue imageList={imageList} startGame={startGame} />
      </StyledModal>
    );
  } else if (modalOpen && modalMode === "end") {
    return (
      <StyledModal>
        <EndDialogue />
      </StyledModal>
    );
  }
}
const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background: linear-gradient(
    to bottom,
    rgb(20, 30, 48, 0.8),
    rgb(36, 59, 85, 0.8)
  );
`;
