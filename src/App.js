import React,{useState} from 'react'
import Modal from './components/Modal'
import useToggle from './hooks/useToggle'
import StartDialogue from './components/StartDialogue';
import EndDialogue from './components/EndDialogue';


export default function App() {

  const [modalOpen, toggleModalOpen] = useToggle(true);
  const [modalMode, setModalMode] = useState("start");



  return (
    <div>
    {modalOpen && 
    <Modal>
      {modalMode === "start" ? 
      <StartDialogue></StartDialogue> :
      <EndDialogue></EndDialogue> }
    </Modal>
    
    }
    </div>
  )
}
