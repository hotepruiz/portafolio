import { useEffect, useState } from "react"

export const PantallaCarga = ({onComplete}) =>{
    const [text, setText] = useState("");
    const fullText = "Cargando...";

    useEffect(() =>{
        let index = 0;
        const interval = setInterval(() =>{
            setText(fullText.substring(0,index));
            index += 1;

            if (index > fullText.length){
                clearInterval(interval);

                setTimeout(()=>{
                    onComplete();   
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete])



    return (
    
    <div className="fixed inset-0 z-50 text-naranja 
    flex flex-col items-center justify-center">
        <div className="mb-4 text-4xl font-dobra"> 
            {text} <span className="animar_parpadeo ml-1">|</span>
        </div>

        <div className="w-[200px] h-[6px] bg-crema rounded relative overflow-hidden"> 
            <div className="w-[40%] h-full bg-naranja shadow-[0_0_15px_rgba(59,130,246,0.5)] animar_barra_carga">
                {""}
            </div>
        </div>
        
    </div>);
}