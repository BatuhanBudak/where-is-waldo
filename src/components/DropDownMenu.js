import React from "react";
import ItemToFindList from "./ItemToFindList";
import styled from "styled-components";

export default function DropDownMenu({ itemList }) {
  return (
    <DropDownMenuContainer>
      <ItemToFindList itemList={itemList} isDropDownMenuItem={true}/>
    </DropDownMenuContainer>
  );
}

const DropDownMenuContainer = styled.div`
  position: absolute;
  top: 60px;
  width: 20rem;
  transform: translateX(-45%);
  background: linear-gradient(to bottom, #0f0c29,#302b63, #24243e);
  color: #fff;
  border-radius: 0.5rem;
  padding: 1rem ;
  overflow: hidden;
  display: grid;
  gap: 1rem;
`;
