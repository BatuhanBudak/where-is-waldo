import React, { useState, useContext } from "react";
import useFirebase from "../hooks/useFirebase";
import styled from "styled-components";
import { TimeContext } from "./TimeContextProvider";
export default function ScoreForm({
  showHighScoreScreen,
  toggleHighScoreScreen,
}) {
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
            maxLength={5}
          />
          <Label htmlFor="name">Name</Label>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Group>
      </section>
    )
  );
}

const Group = styled.form`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
`;

const Label = styled.div`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #9b9b9b;
`;

const SuccessTitle = styled.h3`
  font-size: 1.25rem;
  color: goldenrod;
  margin-block: 1rem;
`;

const ScoreInput = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: #fff;
  padding: 0.4rem 0;
  background: transparent;
  transition: border-color 0.2s;
  &::placeholder {
    color: transparent;
  }
  &:placeholder-shown ~ ${Label} {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
  &:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }
  &:focus ~ ${Label} {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #11998e;
    font-weight: 700;
  }
  &:required,
  &:invalid {
    box-shadow: none;
  }
`;

const SubmitButton = styled.button`
  font-family: inherit;
  cursor: pointer;
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 0.3em 1.25em;
  border: none;
  color: #fff;
  background: linear-gradient(to right, #00b09b, #96c93d);
  transition: transform 0.3s ease;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  margin-block: 1rem;
  width: 100%;
`;
