import React, { useContext, useEffect } from "react";
import useSnackbar from "../hooks/useSnackbar";
import { formatTime } from "../utils/FormatTime";
import { TimeContext } from "./TimeContextProvider";
import Snackbar from "./Snackbar";
import { ReactComponent as ClockIcon } from "../assets/clock.svg";
import { StableSpan } from "../styledComponents/TimerStyles";
export default function Timer({ time }) {
  const { COUNTDOWN } = useContext(TimeContext);
  const { warning, setWarning, snackbarOpen, setSnackbarOpen } = useSnackbar();

  const holdAtZero = (time) => {
    if (time <= 0) {
      return 0;
    } else {
      return time;
    }
  };
  useEffect(() => {
    if (time === COUNTDOWN / 2) {
      setSnackbarOpen(true);
      setWarning("half");
    } else if (time === (COUNTDOWN / 4) * 3) {
      setSnackbarOpen(true);
      setWarning("quarter");
    }
  }, [time, COUNTDOWN, setSnackbarOpen, setWarning]);

  return (
    <>
      <ClockIcon />{" "}
      <StableSpan>{formatTime(holdAtZero(COUNTDOWN - time))}</StableSpan>
      {snackbarOpen && <Snackbar warning={warning} />}
    </>
  );
}
