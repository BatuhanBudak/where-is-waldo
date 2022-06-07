import React from "react";
import {
  SnackbarContainer,
  SnackbarTitle,
} from "../styledComponents/SnackbarStyles";
export default function Snackbar({ found, name, warning }) {
  if (found) {
    return (
      <SnackbarContainer>
        <SnackbarTitle found={found}>You found {name}!</SnackbarTitle>
      </SnackbarContainer>
    );
  } else if (warning) {
    if (warning === "half") {
      return (
        <SnackbarContainer>
          <SnackbarTitle found={found} warning={warning}>
            Hurry Up!
          </SnackbarTitle>
        </SnackbarContainer>
      );
    } else if (warning === "quarter") {
      return (
        <SnackbarContainer>
          <SnackbarTitle found={found} warning={warning}>
            Time is fleeting!
          </SnackbarTitle>
        </SnackbarContainer>
      );
    } else if (warning === "hobbits") {
      return (
        <SnackbarContainer>
          <SnackbarTitle found={found} warning={warning}>
            They're taking hobbits to Isengard!
          </SnackbarTitle>
        </SnackbarContainer>
      );
    }
  } else {
    return (
      <SnackbarContainer>
        <SnackbarTitle found={found}>Try again!</SnackbarTitle>
      </SnackbarContainer>
    );
  }
}
