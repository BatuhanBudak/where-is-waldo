import React from "react";
import styled from "styled-components";

export default function Snackbar({ found, name, warning }) {
  if (found) {
    return (
      <SnackbarContainer>
        <SnackbarTitle found={found}>You found {name}!</SnackbarTitle>
      </SnackbarContainer>
    );
  }
  else if(warning){
    if(warning === "half"){
      return (
        <SnackbarContainer>
          <SnackbarTitle found={found} warning= {warning} >Hurry Up!</SnackbarTitle>
        </SnackbarContainer>
      );
    }else if(warning === "quarter"){
      return (
        <SnackbarContainer>
          <SnackbarTitle  found={found} warning= {warning}>Time is fleeting!</SnackbarTitle>
        </SnackbarContainer>
      );
    }
  }
   else {
    return (
      <SnackbarContainer>
        <SnackbarTitle found={found}>Try again!</SnackbarTitle>
      </SnackbarContainer>
    );
  }
}
const SnackbarContainer = styled.div`
  position: fixed;
  top: 4.5rem;
  left: 50%;
  text-align: center;
  width: max-content;
`;
const SnackbarTitle = styled.h3`
  background-color: ${({ found }) => (found ? "green" : "red")};
  border-radius: 10px;
  font-size: 1.2rem;
  font-family: "Nova Mono", monospace;
  color: white;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
`;
