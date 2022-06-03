import React from "react";
import "./style.css";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import MainImage from "./components/MainImage";
import { TimeContextProvider } from "./components/context/TimeContextProvider";
import { GameControllerProvider } from "./components/context/GameControllerProvider";
import { HiddenDiv } from "./styledComponents/hiddenDiv";

export default function App() {
  return (
    <HiddenDiv>
      <GameControllerProvider>
        <TimeContextProvider>
          <Navbar />
        <MainImage />
        <Modal />
        </TimeContextProvider>
      </GameControllerProvider>
    </HiddenDiv>
  );
}

