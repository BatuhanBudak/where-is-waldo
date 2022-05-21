import React from "react";
import ItemToFindList from "./ItemToFindList";
import styled from "styled-components";

export default function DropDownMenu({ itemList }) {
  return (
    <DropDownMenuContainer>
      <ItemToFindList itemList={itemList} />
    </DropDownMenuContainer>
  );
}

const DropDownMenuContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 15%;
  width: 20rem;
  transform: translateX(-45%);
  background-color: #17134d;
  color: #fff;
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  overflow: hidden;
`;
