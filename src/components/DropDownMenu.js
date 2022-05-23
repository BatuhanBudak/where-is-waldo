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
  width: 20rem;
  transform: translateX(-45%);
  background-color: #17134d;
  color: #fff;
  border-radius: 0.5rem;
  padding: .5rem ;
  overflow: hidden;
`;
