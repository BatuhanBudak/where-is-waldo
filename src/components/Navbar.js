import React, { useContext, useEffect, useState } from "react";
import {
  NavBar,
  NavbarList,
  StyledListItem,
  StyledTimerItem,
  RedListItem,
  ItemsToFind,
  DropDownMenuToggleButton,
} from "../styledComponents/NavBarStyles";
import useToggle from "../hooks/useToggle";
import DropDownMenu from "./DropDownMenu";
import Timer from "./Timer";
import { TimeContext } from "./TimeContextProvider";
import { GameControllerContext } from "./GameControllerProvider";

export default function Navbar() {
  const [dropDownOpen, setDropDownOpen] = useToggle();

  const [numberOfCharsToFind, setNumberOfCharsToFind] = useState(0);
  const { time } = useContext(TimeContext);
  const { imageList } = useContext(GameControllerContext);
  useEffect(() => {
    function findNumberOfCharactersToFind() {
      return imageList.itemList.filter((item) => !item.found).length;
    }
    setNumberOfCharsToFind(findNumberOfCharactersToFind());
  }, [imageList]);
  return (
    <NavBar>
      <NavbarList>
        <StyledListItem onClick={() => window.location.reload()}>
          GottaFindThem<RedListItem>All!</RedListItem>
        </StyledListItem>
        <StyledTimerItem>
          <Timer time={time} />
        </StyledTimerItem>
        <ItemsToFind>
          <DropDownMenuToggleButton onClick={setDropDownOpen}>
            {numberOfCharsToFind}
          </DropDownMenuToggleButton>
          {dropDownOpen && <DropDownMenu imageList={imageList} />}
        </ItemsToFind>
      </NavbarList>
    </NavBar>
  );
}
