import React from 'react'
import styled from 'styled-components'
import locNar from '../assets/the-loc-nar.jpg'
import ItemToFindList from './ItemToFindList'

export default function StartDialogue({imageList}) {
  return (
      <>
      <StyledTitle>Find<RedTitle>Them</RedTitle></StyledTitle>
      <DialogueWrapper>
         <BackgroundBlock></BackgroundBlock>
         <InfoContainer>
            <ImageDetailContainer>
                <ImageName>{imageList.imageName}</ImageName>
                <ImageAuthor>by {imageList.imageAuthor}</ImageAuthor>
            </ImageDetailContainer>
            <ItemToFindList itemList = {imageList.itemList}/>
            <StartButton>Start</StartButton>
         </InfoContainer>
    </DialogueWrapper>
    </>
  )
}
const StyledTitle = styled.h1`
    font-family: 'Oswald';
    margin-bottom: 2rem;
    font-size: 3rem;
    letter-spacing: 8px;
    padding-bottom: .3rem;
    border-bottom: 2px solid white;
    color: white;
`
const RedTitle = styled.span`
    color:red;
    font-family: "Nova Mono";
    font-size: 3.25rem;
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
    background: linear-gradient(to bottom,#ECE9E6,#FFF);
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
const StartButton = styled.button`
    font-family: inherit;
    cursor: pointer;
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: .3em 1.25em;
    border: none;
    border-radius: 1em;
    color: #fff;
    background: #2a2c80;
    background: linear-gradient(to right,#ED213A,#93291E);
    transition: transform .3s ease;
    &:hover, &:focus {
        transform: scale(1.1);
    }
`