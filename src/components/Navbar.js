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
import { TimeContext } from "./context/TimeContextProvider";
import { GameControllerContext } from "./context/GameControllerProvider";

export default function Navbar() {
  const [dropDownOpen, setDropDownOpen] = useToggle();

  const { time } = useContext(TimeContext);
  const [state, dispatch] = useContext(GameControllerContext);

  return (
    <NavBar>
      <NavbarList>
        <StyledListItem onClick={() => dispatch({ type: "restartGame" })}>
          GottaFindThem<RedListItem>All!</RedListItem>
        </StyledListItem>
        <StyledTimerItem>
          <Timer time={time} />
        </StyledTimerItem>
        <ItemsToFind>
          <DropDownMenuToggleButton onClick={setDropDownOpen}>
            {state.itemsToFind}
          </DropDownMenuToggleButton>
          {dropDownOpen && <DropDownMenu imageList={state.imageList} />}
        </ItemsToFind>
      </NavbarList>
    </NavBar>
  );
}
