import React,{useState} from 'react';
import useFirebase from '../hooks/useFirebase';

export default function ScoreInput({showHighScoreScreen, setShowHighScoreScreen}) {
    
    const [name, setName] = useState();
    const {submitScore} = useFirebase();

  function submitForm(e){
      //send score to database
     e.preventDefault();
    setShowHighScoreScreen(false);
    submitScore();
  }
  return (
      showHighScoreScreen && 
    <section>
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
    </section>
  )
}
