import React, {useRef} from "react";
import styled from "styled-components";
import CharactersContextMenu from "./CharactersContextMenu";
import useContextMenu from "../hooks/useContextMenu";

export default function MainImage({ imageList }) {
  const {x, y, showMenu, handleClick} = useContextMenu();
    const imageRef = useRef(null);
  return (
    <StyledMain>
      <StyledImage src={imageList.imageUrl} alt={imageList.imageAuthor} ref={imageRef} onClick={(e ) => handleClick(e, imageRef) }/>
      <CharactersContextMenu x={x} y={y} showMenu={showMenu} />
    </StyledMain>
  );
}

const StyledMain = styled.main`
    position: relative;
`
const StyledImage = styled.img`
  width: 100%;
  display: block;
  margin-top: 3.75rem;
`;
