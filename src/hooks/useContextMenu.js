import { useState } from "react";
import useToggle from "./useToggle";

export default function useContextMenu() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [showMenu, setShowMenu] = useToggle();
  const MAXMENUHEIGHT = 150;
  const MAXMENUWIDTH = 150;
  const OFFSET = 30;

  const handleMainImageClick = (e, imageRef) => {
    e.preventDefault();
    if (showMenu) {
      setShowMenu();
    } else {
      e.pageX + MAXMENUWIDTH > imageRef.current.offsetWidth
        ? setX(Number(`${e.pageX - (MAXMENUWIDTH + OFFSET)}`))
        : setX(Number(e.pageX));
      e.pageY + (MAXMENUHEIGHT) > imageRef.current.offsetHeight
        ? setY(Number(`${e.pageY - (MAXMENUHEIGHT + OFFSET)}`))
        : setY(Number(e.pageY));
      setShowMenu();
    }
  };
  return { x, y, showMenu, handleMainImageClick, setShowMenu };
}
