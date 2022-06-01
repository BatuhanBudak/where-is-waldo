import React, { useContext } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { GameControllerContext } from "./GameControllerProvider";
import imagesData from "../imagesData";
import StartDialogue from "./StartDialogue";

export default function Carousel() {
  const { startGame } = useContext(GameControllerContext);

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const images = imagesData.map((image) => {
    return (
      <StartDialogue imageList={image} startGame={() => startGame(image)} />
    );
  });

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableButtonsControls
      items={images}
      responsive={responsive}
    />
  );
}
