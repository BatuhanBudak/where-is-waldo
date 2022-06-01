import React from "react";
import ItemToFindList from "./ItemToFindList";
import { DropDownMenuContainer } from "../styledComponents/DropDownMenuStyles";

export default function DropDownMenu({ imageList }) {
  return (
    <DropDownMenuContainer>
      <ItemToFindList imageList={imageList} isDropDownMenuItem={true} />
    </DropDownMenuContainer>
  );
}
