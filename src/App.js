import React from "react";
import "./style.css";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import MainImage from "./components/MainImage";
import { TimeContextProvider } from "./components/TimeContextProvider";
import { GameControllerProvider } from "./components/GameControllerProvider";
import { HiddenDiv } from "./styledComponents/hiddenDiv";
import Carousel from "./components/Carousel";

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

