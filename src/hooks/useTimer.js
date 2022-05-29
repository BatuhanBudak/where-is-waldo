import { useState, useEffect } from "react";
import useGameController from "./useGameController";

export default function useTimer() {
  const { isGameOver, isGameStarted } = useGameController();
  const [time, setTime] = useState(0);

  function setTimer(){
    setTime(0);
  }
    console.log(isGameOver);
    console.log(isGameStarted);


  useEffect(() => {
    let interval;

    if (!isGameOver && isGameStarted) {
      interval = setInterval(() => setTime((time) => time + 1), 1000);
      console.log(time);
    } else if (isGameOver && !isGameStarted) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isGameOver, isGameStarted]);

  return  {time, setTimer} ;
}
