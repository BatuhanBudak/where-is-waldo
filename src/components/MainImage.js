import React, { useContext } from "react";
import CharactersContextMenu from "./CharactersContextMenu";
import Snackbar from "./Snackbar";
import { GameControllerContext } from "./context/GameControllerProvider";
import { StyledMain, StyledImage } from "../styledComponents/MainImageStyles";

export default function MainImage() {
  const [state, dispatch, checkCoordsForCharacter] = useContext(
    GameControllerContext
  );

  const handleMainImageClick = (e) => {
    e.preventDefault();
    dispatch({ type: "setCurrentImageSize" });
    if (state.showContextMenu) {
      dispatch({ type: "toggleContextMenu" });
    } else {
      let x = Number(e.pageX);
      let y = Number(e.pageY);
      dispatch({ type: "setCoordinates", x: x, y: y });
    }
  };
  return (
    <StyledMain>
      <StyledImage
        src={state.imageList.imageUrl}
        alt={state.imageList.imageAuthor}
        ref={state.ref}
        onClick={(e) => handleMainImageClick(e)}
      />
      <CharactersContextMenu
        x={state.x}
        y={state.y}
        showMenu={state.showContextMenu}
        imageList={state.imageList}
        checkCoordsForCharacter={checkCoordsForCharacter}
        imageHeight={state.imageHeight}
        imageWidth={state.imageWidth}
      />
    </StyledMain>
  );
}
