import React, { useState } from "react";
import useFirebase from "../hooks/useFirebase";
import useTimer from "../hooks/useTimer";
import useHighScoreMenu from "../hooks/useHighScoreMenu";

export default function ScoreInput() {
  const [name, setName] = useState();
  const { submitScore } = useFirebase();
  const { showHighScoreScreen, setShowHighScoreScreen } = useHighScoreMenu();
  const { time } = useTimer();

  async function submitHighScore(e) {
    //send score to database
    e.preventDefault();
    setShowHighScoreScreen(false);
    await submitScore(name, time);
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
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    )
  );
}
