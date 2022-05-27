import React, {useState} from 'react'
import styled from 'styled-components'
import useFirebase from '../hooks/useFirebase';
import useGameController from '../hooks/useGameController';

export default function EndDialogue() {
  const [name, setName] = useState();
  const [showHighScoreScreen, setShowHighScoreScreen] = useState(true);
  const {gameWon, isHighScore} = useGameController();
  const {submitScore} = useFirebase();

  function submitForm(){
    setShowHighScoreScreen(false)
  }


  //TODO highscore component
  //GAME WON VEYA LOST TIME'A GORE
  if(gameWon && isHighScore && showHighScoreScreen){
    
    return(
      <DialogueWrapper >
      <h2>Misson Complete!</h2>
      <h3>You did great! Show your success to others!</h3>
      <form onSubmit={submitForm}>
        <input
        type="text"
        name="name"
        required
        placeholder='name'
        value={name}
        onChange = {e => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </DialogueWrapper>
    )
  }else if(gameWon && isHighScore && !showHighScoreScreen){
    return (
      <DialogueWrapper >
      <h2>Misson Complete!</h2>
      </DialogueWrapper>
    )
  }

  return (
    <DialogueWrapper >
      <h2>Misson Complete!</h2>
      
    </DialogueWrapper>
  )
}
const DialogueWrapper = styled.div`
  display: flex;
  width: 45rem;
  height: 32rem;
  border-radius: 20px;
`;
const HighScoresWrapper = styled.div`
  display: grid;

`