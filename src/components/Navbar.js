import React from "react";
import styled from "styled-components";
import useToggle from "../hooks/useToggle";
import DropDownMenu from "./DropDownMenu";
import Timer from "./Timer";

export default function Navbar({imageList, isGameOver}) {

    const [dropDownOpen, setDropDownOpen] = useToggle();
    const numberOfItemsToFind = imageList.itemList.filter(item => !item.found).length;

  return (
    <NavBar>
      <NavbarList>
        <StyledListItem>
          Find<RedListItem>Them</RedListItem>
        </StyledListItem>
        <StyledListItem><Timer isGameOver={isGameOver}/></StyledListItem>
        <ItemsToFind>
          <DropDownMenuButton onClick={setDropDownOpen}>{numberOfItemsToFind}</DropDownMenuButton>
          {dropDownOpen && <DropDownMenu itemList = {imageList.itemList}/> }
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
  height: 3.75rem;
  background-color: grey;
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
const DropDownMenuButton = styled.button`
  width: 2.625rem;
  height: 2.625rem;
  background-color: darkorange;
  cursor: pointer;
  color: white;
  border-radius: 50%;
  border: none;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 700;
  transition: background-color 0.3s ease;
  &:hover, &:focus{
    background-color: rgb(226, 124, 0);
  }
`;
