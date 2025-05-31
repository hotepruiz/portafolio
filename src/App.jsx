import { useState, useEffect } from 'react'
import {PantallaCarga} from './assets/components/pantalla_carga'
import './App.css'
import "./index.css"
import "./assets/animaciones.css"

function App() {
  const[cargado, setCargado] = useState(false)
  const[posCinta, setPosCinta] = useState(0)

  const cintaRef = useRef(null);

  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        console.log('¡Barra espaciadora presionada!');
        moverCinta();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Limpieza del event listener al desmontar
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // El array vacío asegura que esto solo se ejecute una vez???? no entiendo por que funciona asi xd



  const moverCinta = () => {
    const nuevoPos = posCinta + 50;
    setPosCinta(nuevoPos)

    if(cintaRef.current){
      cintaRef.current.style.backgroundPosition = `left ${nuevoPos}px`;
    }
  };  





  return (
    <>
      {!cargado && <PantallaCarga onComplete={() => setCargado(true)}/>}

      <div className={`flex flex-row min-h-screen transition-opacity duration-700 pl-28 pr-5 ${cargado ? "opacity-100" : "opacity-0"}  `}>
        
        <div className="min-h-screen max-h-screen borde-cinta-izquierda borde-cinta-animada"
         ref={cintaRef}
         style={{ backgroundPosition: `left -${posCinta}px` }}>
        </div>
        
        <div className='flex flex-col min-w-1 cinta'>
        </div>

        <div className="min-h-screen max-h-screen borde-cinta-derecha borde-cinta-animada">
        </div>
        
        



        <div className='flex flex-col'>
          <div className="text-2xl font-dobra-light naranja text-naranja" >
            Hola! soy Hotep Ruiz y quiero suicidarme: 
          </div>
          <div className="text-8xl font-dobra naranja text-naranja text-right">
            Programador y administrador de base de datos
          </div>
        </div>
        
      </div>
    </>
  );
}

export default App
