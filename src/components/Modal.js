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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.9);
`