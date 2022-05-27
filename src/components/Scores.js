import React from "react";

export default function Scores({ scores }) {
  const scoresList = scores.map((score) => {
    return (
      <li>
        {score.name} {score.score}
      </li>
    );
  });
  return (
    <section>
      <h3>High Scores</h3>
      <ol>{scoresList}</ol>
    </section>
  );
}
