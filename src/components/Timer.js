import React from 'react'
import useTimer from '../hooks/useTimer';
import { formatTime } from '../utils/FormatTime';

export default function Timer() {
  
  const {time}  = useTimer();

  return (
    <>{formatTime(time)}</>
  )
}
