import React from 'react'
import styled from 'styled-components';
import useGameController from '../hooks/useGameController';
import StartDialogue from './StartDialogue';
import EndDialogue from './EndDialogue';

export default function Modal() {
 const {modalMode} = useGameController();
  if(modalMode === "start"){
    return  (<StyledModal><StartDialogue /></StyledModal>)
  }
  else if(modalMode === "end"){
    return   (<StyledModal><EndDialogue /></StyledModal>)
  }
}
const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background: linear-gradient(to bottom,rgb(20, 30, 48, .8), rgb(36, 59, 85, .8));
`