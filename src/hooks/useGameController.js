import  {useEffect, useState} from 'react'
import imagesData from "../imagesData";
import useToggle from "./useToggle";

export default function useGameController() {
    const [imageList, setImageList] = useState(imagesData[0]);
    const [modalOpen, toggleModalOpen] = useToggle(true);
    const [modalMode, setModalMode] = useState("start");
    const [isGameOver, setIsGameOver] = useState(true);
    const [foundItemsCount, setFoundItemsCount] = useState(0);

    const startGame = () => {
        toggleModalOpen();
        setIsGameOver(false);
    }
    const restartGame = () => {
        setIsGameOver(false);
        setFoundItemsCount(0);
        setImageList(imagesData[0]);
    }
    function endGame(){
        toggleModalOpen();
        setIsGameOver(true);
        //TODO if highscore show input screen then highscores else just show score and high scores
    }
    useEffect(() => {
        if(foundItemsCount === 3){
            endGame();
        }
    },[foundItemsCount])

   return {imageList,setImageList, modalOpen, modalMode, isGameOver, foundItemsCount,setFoundItemsCount, startGame}
  
}
