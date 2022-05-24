import React, {useRef} from "react";
import styled from "styled-components";
import CharactersContextMenu from "./CharactersContextMenu";
import useContextMenu from "../hooks/useContextMenu";

export default function MainImage({ imageList, toggleCharacterFound }) {
  const {x, y, showMenu, setShowMenu, handleMainImageClick} = useContextMenu();
    const imageRef = useRef(null);


    const checkCoordsForCharacter = (id) => {
      const characterCoords = imageList.itemList.filter(item => item.id === id).coords;
      if (characterCoords === {x:x, y:y}){
        toggleCharacterFound(id)
      }else{
        setShowMenu();
      }
    } 


  return (
    <StyledMain>
      <StyledImage src={imageList.imageUrl} alt={imageList.imageAuthor} ref={imageRef} onClick={(e ) => handleMainImageClick(e, imageRef) }/>
      <CharactersContextMenu x={x} y={y} showMenu={showMenu} itemList= {imageList.itemList}  checkCoordsForCharacter={checkCoordsForCharacter} toggleCharacterFound = {toggleCharacterFound} />
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
