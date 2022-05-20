import React,{useState} from 'react'
import style from './style.css'
import imagesData from './imagesData'
import Modal from './components/Modal'
import useToggle from './hooks/useToggle'
import StartDialogue from './components/StartDialogue';
import EndDialogue from './components/EndDialogue';


export default function App() {
  const [imageList, setImageList] = useState(imagesData[0]);
  const [modalOpen, toggleModalOpen] = useToggle(true);
  const [modalMode, setModalMode] = useState("start");



  return (
    <div>
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
