import { useState, useEffect } from 'react'
import {PantallaCarga} from './assets/components/pantalla_carga'
import {BotonCinta} from './assets/components/botonCinta'
import {audioHover, audioSelect} from './assets/audios'
import './App.css'
import "./index.css"
import "./assets/animaciones.css"

function App() {
  const[cargado, setCargado] = useState(false)
  const[posCinta, setPosCinta] = useState(0)
  const[posCinta2, setPosCinta2] = useState(35)
  

  
  useEffect(() => { //esto es para escuchar un input
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        console.log('¡Barra espaciadora presionada!');
        moverCinta();;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // El array vacío asegura que esto solo se ejecute una vez???? no entiendo por que funciona asi xd



  const moverCinta = () => {
    audioSelect();
    setPosCinta((prev) => prev + 300);
    setPosCinta2((prev) => prev + 200);
  };  





  return (
    <>
      {!cargado && <PantallaCarga onComplete={() => setCargado(true)}/>}

      <div className={`flex flex-row min-h-screen transition-opacity duration-700 pl-28 pr-5 ${cargado ? "opacity-100": "opacity-0 "}  `}>
        
        <div className="min-h-screen max-h-screen borde-cinta-izquierda"
         style={{ backgroundPosition: `left -${posCinta}px` }}>
        </div>
        
        <div className='flex flex-col min-w-1 overflow-y-scroll cinta pt-16'>
          
          <div className="text-2xl font-dobra-medium naranja text-naranja text-pretty break-words">
            Programador y administrador de base de datos
          </div>





          <button 
          className="!bg-sky-naranja !hover:bg-sky-700 !px-4 !py-2 !rounded 1transition-colors !duration-300"
          onMouseEnter={() => audioHover()} 
          onClick={() => moverCinta()} >
            <div className="text-2xl font-dobra-medium text-white break-words whitespace-normal" >
              Sobre mi (Personal)
            </div>
          </button> 


          <BotonCinta 
          onClick={() => moverCinta()}
          texto="hola malditso desgraciados"/>
          


          <button class={'bg-indigo-600'}
          onMouseEnter={() => audioHover()} onClick={() => moverCinta()} >
            Hola!
          </button> 
 
        </div>

        <div className="min-h-screen max-h-screen borde-cinta-derecha"
        style={{ backgroundPosition: `left -${posCinta2}px` }}>
        </div>
        
        



        <div className='flex flex-col'>
          <div className="text-2xl font-dobra-light naranja text-verdeazul" >
            Hola! soy Hotep Ruiz y quiero suicidarme: 
          </div>

          <div className="text-8xl font-dobra naranja text-verdeazul text-right">
            Programador y administrador de base de datos
          </div>
        </div>
        
      </div>
    </>
  );
}

export default App


