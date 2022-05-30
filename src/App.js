import React, { useState, useContext } from "react";
import styled from "styled-components";
import "./style.css";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import MainImage from "./components/MainImage";
import { TimeContextProvider } from "./components/TimeContextProvider";
import { GameControllerProvider } from "./components/GameControllerProvider";
export default function App() {
  return (
    <StyledDiv>
      <GameControllerProvider>
        <TimeContextProvider>
          <Navbar />
        </TimeContextProvider>
        <MainImage />
        <Modal />
      </GameControllerProvider>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  overflow: hidden;
`;
