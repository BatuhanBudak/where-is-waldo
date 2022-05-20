import React from 'react'
import styled from 'styled-components'
import locNar from '../assets/the-loc-nar.jpg'

export default function StartDialogue({imageList}) {
  return (
      <>
      <h1>Find <RedTitle>Them</RedTitle></h1>
      <DialogueWrapper>
         <BackgroundBlock></BackgroundBlock>
         <InfoContainer>
            <h2>{imageList.imageName}</h2>
            <h4>{imageList.imageAuthor}</h4>
            <button>Start</button>
         </InfoContainer>
    </DialogueWrapper>
    </>
  )
}
const RedTitle = styled.span`
    color:red;
`
const DialogueWrapper = styled.div`
    display: flex;
    width:45rem;
    height:32rem;
    border-radius: 20px;
`
const BackgroundBlock = styled.div`
    width: 55%;
    background-image: url(/static/media/the-loc-nar.314cec99f414807b7e27.jpg);
    background-position: center;
    background-size: cover;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`
const InfoContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    width: 45%;
    background-color: white;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`