import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="flex flex-row items-center pl-20">

      <div className="cinta h-screen overflow-y-auto flex flex-col items-center  gap-8  p-1" >
        <h1 className="text-4xl font-dobra naranja text-naranja" >
          Hotep ruiz 
        </h1>
        <h1 className="text-4xl font-dobra text-naranja break-words max-w-full">
          max-w-full
        </h1>
      </div>


      <div className=" flex flex-col items-center justify-start gap-8  p-1 h-screen" >
        <img src="src\assets\imagenes\carta-cafe.png" className="w-180 h-auto" alt=""  />
      </div>

    </div>
  );
}

export default App
