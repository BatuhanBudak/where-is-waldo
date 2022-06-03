import styled from "styled-components";

const MAXMENUHEIGHT = 100;
const MAXMENUWIDTH = 100;
const OFFSET = 5;

export const StyledContextMenuContainer = styled.div`
  top: ${({ y, imageHeight }) =>
    y + MAXMENUHEIGHT > imageHeight
      ? y - (MAXMENUHEIGHT + OFFSET) + "px"
      : y + "px"};

  left: ${({ x, imageWidth }) =>
    x + MAXMENUWIDTH > imageWidth
      ? x - (MAXMENUWIDTH + OFFSET) + "px"
      : x + "px"};
  position: absolute;
  display: ${({ showMenu }) => (showMenu ? "block" : "none")};
  width: max-content;
  height: auto;
  max-width: 100px;
  max-height: 100px;
`;
