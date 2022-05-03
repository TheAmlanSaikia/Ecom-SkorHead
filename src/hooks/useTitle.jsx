import { useEffect } from "react";


const useTitle =(title)=>{

    useEffect(()=>{
     
        document.title = `SkorHead | ${title}`;

    },[title])
    
  

}


export { useTitle };