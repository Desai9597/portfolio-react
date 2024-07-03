import { useParams } from "react-router-dom";
import React from 'react';
import bcaPDF from "../../assets/files/BCAGoldMedal.pdf";
import mcaPDF from "../../assets/files/MCAGoldMedal.pdf";

export const Medal = () => {
  const params = useParams();
  const bcaContent= console.log(params.medalId)
  return (
    <div>
      {params.medalId === "1" ? 
    /*     <iframe src={bcaPDF} width="100%" height="500px" title="BCAGoldMedal"/>
         :
         <iframe src={mcaPDF} width="100%" height="500px" title="MCAGoldMedal"/>
      */   
          <a href={bcaPDF} target="_blank" >BCA link </a>
         :
         <a href={mcaPDF} target="_blank">MCA link</a>
         
  }

 </div>
    
  )
}
