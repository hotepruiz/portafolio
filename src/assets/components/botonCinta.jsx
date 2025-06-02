import { useEffect, useState } from "react"
import {audioHover, audioSelect} from '../audios'

export const BotonCinta = ({ onClick , texto }) => {
  return (
    <button 
      className=""
      onMouseEnter={() => audioHover()} 
      onClick={onClick} 
    >
        <div className="text-2xl font-dobra-medium text-white break-words whitespace-normal" >
            {texto}
        </div>
    </button>
  );
};