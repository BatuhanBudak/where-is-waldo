import React, { useState, useEffect, createContext, useContext } from "react";
import { GameControllerContext } from "./GameControllerProvider";

let TimeContext = createContext();

function TimeContextProvider({ children }) {
  const [time, setTime] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const MAXTIME = 180;
  const { isGameOver, isGameStarted } = useContext(GameControllerContext);
  useEffect(() => {
    let interval;
    const isGameWon = () => {
      if (time > MAXTIME) {
        setGameWon(false);
      } else {
        setGameWon(true);
      }
    };
    if (!isGameOver && isGameStarted) {
      interval = setInterval(() => setTime((time) => time + 1), 1000);
    } else if (isGameOver && !isGameStarted) {
      isGameWon();
      clearInterval(interval);
    } else {
      setTime(0);
      setGameWon(false);
    }
    return () => clearInterval(interval);
  }, [isGameOver, isGameStarted, time]);

  return (
    <TimeContext.Provider value={{ time, gameWon }}>
      {children}
    </TimeContext.Provider>
  );
}
export { TimeContextProvider, TimeContext };
