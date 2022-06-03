import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background: linear-gradient(
    to bottom,
    rgb(20, 30, 48, 0.8),
    rgb(36, 59, 85, 0.8)
  );
`;
