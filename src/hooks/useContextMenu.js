// import { useState } from "react";
// import useToggle from "./useToggle";

// export default function useContextMenu() {
//   // const [x, setX] = useState(0);
//   // const [y, setY] = useState(0);
//   // const [showMenu, setShowMenu] = useToggle();
  

//   const handleMainImageClick = (e) => {
//     e.preventDefault();
    
//     if (showMenu) {
//       setShowMenu();
//     } else {
//       // e.pageX + MAXMENUWIDTH > imageRef.current.offsetWidth
//         // ? setX(Number(`${e.pageX - (MAXMENUWIDTH + OFFSET)}`))
//         setX(Number(e.pageX));
//       // e.pageY + (MAXMENUHEIGHT) > imageRef.current.offsetHeight
//       //   ? setY(Number(`${e.pageY - (MAXMENUHEIGHT + OFFSET)}`))
//         setY(Number(e.pageY));
//       setShowMenu();
//       console.log(x,y);
//     }
//   };
//   return { x, y, showMenu, handleMainImageClick, setShowMenu };
// }
