import React, { } from 'react'
import { formatTime } from '../utils/FormatTime';
// import TimeContextCC from './TimeContextCC';

export default function Timer({time}) {
   
  const COUNTDOWN = 10;

  const holdAtZero = (time) => {
    if(time <= 0){
      return 0;
    }else{
      return time;
    }
  }

  return (
    <>{formatTime(holdAtZero(COUNTDOWN-time))}</>
  )
}
