import {useState} from 'react'
import useTimedToggle from './useTimedToggle';

export default function useSnackbar() {

    const [snackbarOpen, setSnackbarOpen] = useTimedToggle();
    const [name, setName] = useState("");
    const [found, setFound] = useState(false);
    const [warning, setWarning] = useState(false);


    return {snackbarOpen, setSnackbarOpen,name, setName, found, setFound,warning, setWarning} 
  
}
