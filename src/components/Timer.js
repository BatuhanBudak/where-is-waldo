import React, { useEffect, useState } from 'react'
import { formatTime } from '../utils/FormatTime';

export default function Timer({isGameOver}) {
  
  const [time, setTime] = useState(0);

  useEffect(() => {
    
    let interval;

    if(!isGameOver){
      interval = setInterval(() => setTime(time => time +1),1000);
      console.log(time);
    }
    else if(isGameOver){
      clearInterval(interval);
      setTime(0);
    }
    return () => clearInterval(interval);

  }, [isGameOver])


  return (
    <>{formatTime(time)}</>
  )
}
