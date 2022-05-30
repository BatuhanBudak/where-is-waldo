import React, { useState } from "react";
import styled from "styled-components";
import "./style.css";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import MainImage from "./components/MainImage";
import useGameController from "./hooks/useGameController";
export default function App() {
  const { setImageList, modalOpen } = useGameController();

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
      <Navbar />
      <MainImage toggleCharacterFound={toggleCharacterFound} />
      {modalOpen && <Modal />}
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  overflow: hidden;
`;
