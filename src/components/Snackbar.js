import React from 'react'
import styled from "styled-components";

export default function Snackbar({found, name}) {

    

  
    if(found){
      return <SnackbarContainer>
        <SnackbarTitle found={found}>You found {name}!</SnackbarTitle>
      </SnackbarContainer>
    }else{
      return <SnackbarContainer>
        <SnackbarTitle found={found}>Try again!</SnackbarTitle>
      </SnackbarContainer>
    }
   
    
}
const SnackbarContainer = styled.div`
    position: fixed;
    top:4rem;
    text-align: center;

`
const SnackbarTitle = styled.h3`
  background-color: ${({found})=> found ? "green" : "red"};
`
