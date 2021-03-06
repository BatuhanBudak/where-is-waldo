import React, { useContext } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { GameControllerContext } from "./context/GameControllerProvider";
import imagesData from "../imagesData";
import StartDialogue from "./StartDialogue";

export default function Carousel() {
  const [state, dispatch] = useContext(GameControllerContext);

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const images = imagesData.map((image) => {
    return (
      <StartDialogue
        imageList={image}
        startGame={() => dispatch({ type: "startGame", by: image })}
      />
    );
  });

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableButtonsControls
      keyboardNavigation
      items={images}
      responsive={responsive}
    />
  );
}
