import React from 'react'
import styled from 'styled-components'
import locNar from '../assets/the-loc-nar.jpg'
import ItemToFindList from './ItemToFindList'

export default function StartDialogue({imageList}) {
  return (
      <>
      <h1>Find <RedTitle>Them</RedTitle></h1>
      <DialogueWrapper>
         <BackgroundBlock></BackgroundBlock>
         <InfoContainer>
            <ImageDetailContainer>
                <ImageName>{imageList.imageName}</ImageName>
                <ImageAuthor>by {imageList.imageAuthor}</ImageAuthor>
            </ImageDetailContainer>
            <ItemToFindList itemList = {imageList.itemList}/>
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
    justify-content: space-evenly;
    width: 45%;
    background-color: white;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding-inline: 1rem;
    font-family: 'Oswald', sans-serif;
`
const ImageDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ImageName = styled.h2`
    font-weight: 500;
    letter-spacing: 3px;
    font-size: 2rem;
`
const ImageAuthor = styled.h2`
    font-weight: 400;
    letter-spacing: 3px;
    margin-top: -.25em;
    font-size: .875rem;
    font-style:italic;
`