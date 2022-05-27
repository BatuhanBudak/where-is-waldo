import React, {useState} from 'react'
import styled from 'styled-components'
import useFirebase from '../hooks/useFirebase';
import useGameController from '../hooks/useGameController';
import ScoreInput from './ScoreInput';
export default function EndDialogue() {
  
  const [showHighScoreScreen, setShowHighScoreScreen] = useState(true);
  const {gameWon, isHighScore} = useGameController();
  


  //TODO highscore component
  //GAME WON VEYA LOST TIME'A GORE
  if(gameWon && isHighScore){
    
    return(
      <DialogueWrapper showHighScoreScreen={showHighScoreScreen} setShowHighScoreScreen={setShowHighScoreScreen}>
      <h2>Misson Complete!</h2>
      <ScoreInput />
      
     
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