import React, { } from 'react'
import { formatTime } from '../utils/FormatTime';
// import TimeContextCC from './TimeContextCC';

export default function Timer({time}) {
   
  return (
    <>{formatTime(time)}</>
  )
}
