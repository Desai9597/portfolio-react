import { useParams } from "react-router-dom";
import React from 'react';

export const Medal = () => {
  const params = useParams();
console.log(params.medalId)
  return (
    <div>
      {params.medalId === "1" ? 
         <iframe src="../files/BCAGoldMedal.pdf" width="100%" height="500px" title="BCAGoldMedal"/>
         :
         <iframe src="../files/MCAGoldMedal.pdf" width="100%" height="500px" title="MCAGoldMedal"/>
  }

 </div>
    
  )
}
