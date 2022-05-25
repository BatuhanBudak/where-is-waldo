import { useEffect, useState } from "react";


export default function useTimedToggle() {

   const [snackbarOpen, setSnackbarOpen] = useState(false);
  
   useEffect(() => {
    
    let interval = 5000;
    let timeOut;
    if(snackbarOpen){
        timeOut = setTimeout(() => {
            setSnackbarOpen(false);
         },interval);
    }
    
   
     return () => {
       clearTimeout(timeOut);
     }
   }, [snackbarOpen])
   
 return [snackbarOpen, setSnackbarOpen ];
    
  
}
