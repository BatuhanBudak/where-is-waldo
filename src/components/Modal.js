import React, { useContext } from "react";
import {StyledModal} from "../styledComponents/ModalStyles"
import EndDialogue from "./EndDialogue";
import { GameControllerContext } from "./GameControllerProvider";
import Carousel from "./Carousel";

export default function Modal() {
  const { modalMode, modalOpen } = useContext(GameControllerContext
  );

  if (modalOpen && modalMode === "start") {
    return (
      <StyledModal>
        <Carousel />
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

