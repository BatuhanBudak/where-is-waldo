import React, { useState, useContext } from "react";
import useFirebase from "../hooks/useFirebase";
import {
  Group,
  Label,
  SuccessTitle,
  ScoreInput,
  SubmitButton,
} from "../styledComponents/ScoreFormStyles";
import { GameControllerContext } from "./context/GameControllerProvider";
import { TimeContext } from "./context/TimeContextProvider";
export default function ScoreForm({
  showHighScoreScreen,
  toggleHighScoreScreen,
}) {
  const [name, setName] = useState("");
  const { submitScore } = useFirebase();
  const { time } = useContext(TimeContext);
  const {imageList} = useContext(GameControllerContext);

  async function submitHighScore(e) {
    //send score to database
    e.preventDefault();
    await submitScore(name, time, imageList.id);
    toggleHighScoreScreen();
  }
  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    showHighScoreScreen && (
      <section>
        <SuccessTitle>You did great! Show your success to others!</SuccessTitle>
        <Group onSubmit={submitHighScore}>
          <ScoreInput
            type="text"
            name="name"
            id="name"
            required
            placeholder="Name"
            value={name}
            onChange={handleChange}
            minlength={3}
            maxLength={8}
          />
          <Label htmlFor="name">Name</Label>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Group>
      </section>
    )
  );
}
