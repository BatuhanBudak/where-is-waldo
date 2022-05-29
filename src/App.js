import React, { useState } from "react";
import styled from "styled-components";
import "./style.css";
import Modal from "./components/Modal";
import StartDialogue from "./components/StartDialogue";
import EndDialogue from "./components/EndDialogue";
import Navbar from "./components/Navbar";
import MainImage from "./components/MainImage";
import useGameController from "./hooks/useGameController";
export default function App() {
  
  const {imageList,setImageList, modalOpen, modalMode} = useGameController();

  const toggleCharacterFound = (id) => {
    setImageList((image) => {
      const newItemList = image.itemList.map((item) => {
        if (item.id === id) {
          return { ...item, found: true };
        } else {
          return item;
        }
      });
      return { ...image, itemList: newItemList };
    });
  };

  return (
    <StyledDiv>
      <Navbar imageList={imageList}  />
      <MainImage
        imageList={imageList}
        toggleCharacterFound={toggleCharacterFound}
      />
      {modalOpen && (
        <Modal>
          {modalMode === "start" ? (
            <StartDialogue imageList={imageList}></StartDialogue>
          ) : (
            <EndDialogue></EndDialogue>
          )}
        </Modal>
      )}
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  overflow: hidden;
`;
