import React, { useState, useEffect, createContext, useContext } from "react";
import { GameControllerContext } from "./GameControllerProvider";

let TimeContext = createContext();

function TimeContextProvider({ children }) {
  const [time, setTime] = useState(0);

  const COUNTDOWN = 120;
  const [state, dispatch] = useContext(GameControllerContext);

  useEffect(() => {
    let interval;
    const isGameWon = () => {
      if (time >= COUNTDOWN) {
        dispatch({ type: "loseGameByTime" });
      } else if (state.isGameOver && time < COUNTDOWN) {
        dispatch({ type: "wonGame" });
      }
    };
    if (!state.isGameOver && state.isGameStarted && !state.gameWon) {
      interval = setInterval(() => setTime((time) => time + 1), 1000);
      isGameWon();
      //GameController sets the isGameStarted to false on game end
    } else if (state.isGameOver && !state.isGameStarted) {
      isGameWon();
      clearInterval(interval);
    } else if (!state.gameWon && state.isGameOver) {
      clearInterval(interval);
    } else if (!state.isGameOver && !state.isGameStarted && !state.gameWon) {
      setTime(0);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [state.isGameOver, state.isGameStarted, time, state.gameWon, dispatch]);

  return (
    <TimeContext.Provider value={{ time, COUNTDOWN }}>
      {children}
    </TimeContext.Provider>
  );
}
export { TimeContextProvider, TimeContext };
