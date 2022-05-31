import React, { useState, useContext } from "react";
import useFirebase from "../hooks/useFirebase";
import { TimeContext } from "./TimeContextProvider";
export default function ScoreForm({showHighScoreScreen, toggleHighScoreScreen}) {
  const [name, setName] = useState("");
  const { submitScore } = useFirebase();
  const [isSubmittingScore, setIsSubmittingScore] = useState(false);
  const { time } = useContext(TimeContext);

  async function submitHighScore(e) {
    //send score to database
    e.preventDefault();
    await submitScore(name, time);
    toggleHighScoreScreen();
  }
  function handleChange(e){
    setName(e.target.value)
  }
  return (
    showHighScoreScreen && (
      <section>
        <h3>You did great! Show your success to others!</h3>
        <form onSubmit={submitHighScore}>
          <input
            type="text"
            name="name"
            required
            placeholder="name"
            value={name}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    )
  );
}
