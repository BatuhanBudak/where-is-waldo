import React from 'react'
import styled from 'styled-components';

export default function Modal({children}) {
  return (
    <StyledModal>{children}</StyledModal>
  )
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