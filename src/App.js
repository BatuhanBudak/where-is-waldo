import React,{useState} from 'react'
import './style.css'
import imagesData from './imagesData'
import Modal from './components/Modal'
import useToggle from './hooks/useToggle'
import StartDialogue from './components/StartDialogue';
import EndDialogue from './components/EndDialogue';
import Navbar from './components/Navbar'
import MainImage from './components/MainImage'


export default function App() {
  const [imageList, setImageList] = useState(imagesData[0]);
  const [modalOpen, toggleModalOpen] = useToggle(true);
  const [modalMode, setModalMode] = useState("start");
  const [isGameOver, setIsGameOver] = useState(true);
  


  return (
    <div>
    <Navbar imageList={imageList} isGameOver={isGameOver}/>
    <MainImage imageList={imageList}/>
    {modalOpen && 
    <Modal>
      {modalMode === "start" ? 
      <StartDialogue imageList={imageList}></StartDialogue> :
      <EndDialogue></EndDialogue> }
    </Modal>
    }
   
    </div>
  )
}
