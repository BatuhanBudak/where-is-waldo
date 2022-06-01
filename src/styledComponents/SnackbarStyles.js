import styled from "styled-components"

export const SnackbarContainer = styled.div`
  position: fixed;
  top: 4.5rem;
  left: 50%;
  text-align: center;
  width: max-content;
`;
export const SnackbarTitle = styled.h3`
  background-color: ${({ found }) => (found ? "green" : "red")};
  border-radius: 10px;
  font-size: 1.2rem;
  font-family: "Nova Mono", monospace;
  color: white;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
`;
