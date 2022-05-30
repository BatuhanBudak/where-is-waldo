import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import useToggle from "../hooks/useToggle";
import DropDownMenu from "./DropDownMenu";
import Timer from "./Timer";
import {TimeContext} from "./TimeContextProvider";
import { GameControllerContext } from "./GameControllerProvider";

export default function Navbar() {
  const [dropDownOpen, setDropDownOpen] = useToggle();

  const [numberOfCharsToFind, setNumberOfCharsToFind] = useState(0);
  const {time} = useContext(TimeContext);
  const {imageList} = useContext(GameControllerContext);
  useEffect(() => {
    function findNumberOfCharactersToFind() {
      return imageList.itemList.filter((item) => !item.found).length;
    }
    setNumberOfCharsToFind(findNumberOfCharactersToFind());
  }, [imageList]);
  return (
    <NavBar>
      <NavbarList>
        <StyledListItem>
          Where<RedListItem>Are</RedListItem>They?
        </StyledListItem>
        <StyledTimerItem>
          <Timer time={time} />
        </StyledTimerItem>
        <ItemsToFind>
          <DropDownMenuToggleButton onClick={setDropDownOpen}>
            {numberOfCharsToFind}
          </DropDownMenuToggleButton>
          {dropDownOpen && <DropDownMenu imageList={imageList}/>}
        </ItemsToFind>
      </NavbarList>
    </NavBar>
  );
}

const NavBar = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  height: 60px;
  background: linear-gradient(to bottom, #141e30, #243b55);
  color: black;
  z-index: 10;
  width: 100%;
  font-family: "Nova Mono";
`;
const NavbarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const StyledListItem = styled.li`
  font-family: "Oswald";
  font-size: 2rem;
  letter-spacing: 1px;
  color: white;
`;
const StyledTimerItem = styled(StyledListItem)`
  width: 7.5rem;
`;
const RedListItem = styled.span`
  color: red;
  font-family: "Nova Mono";
  font-size: 2rem;
`;
const ItemsToFind = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DropDownMenuToggleButton = styled.button`
  width: 2.625rem;
  height: 2.625rem;
  background-color: rgb(226, 124, 0);
  cursor: pointer;
  color: white;
  border-radius: 50%;
  border: none;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 700;
  transition: background-color 0.3s ease;
  &:hover,
  &:focus {
    background-color: #e59400;
  }
`;
