import { useState } from "react";
import useToggle from "./useToggle";

export default function useContextMenu() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [showMenu, setShowMenu] = useToggle();
  const MENUHEIGHT = 150;
  const MENUWIDTH = 150;
  const NAVBARHEIGHT = 60;
  const OFFSET = 30;

  const handleMainImageClick = (e, imageRef) => {
    
    console.log( );
    e.preventDefault();
    if(showMenu){
        setShowMenu();
    }else{
        e.pageX + MENUWIDTH > imageRef.current.offsetWidth
      ? setX(Number(`${e.pageX - (MENUWIDTH + OFFSET)}`))
      : setX(Number(e.pageX));
    e.pageY + (MENUHEIGHT - NAVBARHEIGHT) > imageRef.current.offsetHeight
      ? setY(Number(`${e.pageY  - (MENUHEIGHT + OFFSET + NAVBARHEIGHT)}`))
      : setY(Number(e.pageY) );
      setShowMenu();
      console.log(e.pageX, e.pageY);
    }
  };
  return { x, y, showMenu, handleMainImageClick,setShowMenu };
}