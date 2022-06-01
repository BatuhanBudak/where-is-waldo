import styled from "styled-components";

export const NavBar = styled.nav`
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
export const NavbarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const StyledListItem = styled.li`
  font-family: "Oswald";
  font-size: 2rem;
  letter-spacing: 1px;
  color: white;
  cursor: pointer;
`;
export const StyledTimerItem = styled(StyledListItem)`
  width: 10rem;
  display: flex;
  align-items: center;
`;
export const RedListItem = styled.span`
  color: red;
  font-family: "Nova Mono";
  font-size: 2rem;
`;
export const ItemsToFind = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DropDownMenuToggleButton = styled.button`
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
