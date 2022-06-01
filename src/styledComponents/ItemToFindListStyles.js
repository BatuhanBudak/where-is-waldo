import styled from "styled-components"

export const ContextMenuCharactersList = styled.ul`
  display: flex;
  flex-direction: column;
  font-family: "Nova Mono", monospace;
  padding: 0;
  margin: 0;
  list-style: none;
  justify-content: space-around;
  border-radius: 10px;
  background: linear-gradient(to bottom, #c9d6ff, #e2e2e2);
  color: black;
  align-items: flex-start;
`;
export const StartDialogueCharactersList = styled(ContextMenuCharactersList)`
  background: none;
  width: 100%;
  color: black;
`;
export const DropDownCharactersList = styled(ContextMenuCharactersList)`
  background: none;
  width: 100%;
  color: white;
`;