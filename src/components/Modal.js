import React, { useContext } from "react";
import { StyledModal } from "../styledComponents/ModalStyles";
import EndDialogue from "./EndDialogue";
import { GameControllerContext } from "./context/GameControllerProvider";
import Carousel from "./Carousel";

export default function Modal() {
  const [state] = useContext(GameControllerContext);

  if (state.modalOpen && state.modalMode === "start") {
    return (
      <StyledModal>
        <Carousel />
      </StyledModal>
    );
  } else if (state.modalOpen && state.modalMode === "end") {
    return (
      <StyledModal>
        <EndDialogue />
      </StyledModal>
    );
  }
}
