import React, { useContext } from "react";
import {StyledModal} from "../styledComponents/ModalStyles"
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

