import {useState} from 'react'

export default function useToggle(initialValue = false){
    const [state, setState] = useState();

    const toggle = () => {setState(!state)}

    return [state, toggle];

}