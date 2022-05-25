import { useEffect, useState } from "react";

export default function useTimedToggle() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const INTERVAL = 3000;
  useEffect(() => {
    let timeOut;
    if (snackbarOpen) {
      timeOut = setTimeout(() => {
        setSnackbarOpen(false);
      }, INTERVAL);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [snackbarOpen]);

  return [snackbarOpen, setSnackbarOpen];
}
