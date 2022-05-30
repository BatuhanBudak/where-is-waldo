import { useState, useEffect } from "react";

export default function useTimer(isGameOver, isGameStarted) {
  const [time, setTime] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const MAXTIME = 180;

  
  function startTimer(interval, isGameWon,isGameStarted) {
    if (!isGameOver && isGameStarted) {
      interval = setInterval(() => setTime((time) => time + 1), 1000);
    } else if (isGameOver && !isGameStarted) {
      isGameWon();
      clearInterval(interval);
    } else {
      setTime(0);
    }
    return interval;
  }
  const restartTime = () => {
    setTime(0);
  }
    
  useEffect(() => {
    let interval;
    const isGameWon = () => {
      if(time > MAXTIME){
        setGameWon(false);
      }else{
        setGameWon(true);
      }
    }
    interval = startTimer(interval, isGameWon);
    return () => clearInterval(interval);
  }, [isGameOver, isGameStarted]);

  return  {time, restartTime, setGameWon, gameWon, startTimer}


}
