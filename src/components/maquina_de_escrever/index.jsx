"use client"
import { useEffect, useState } from "react";

function MaquinaDeEscrever(props) {
  const [text, setText] = useState("");
  const [mostrarCursor, setMostrarCursor] = useState(false);

  const escreveNaTela = (text, i = 0) => {
    if(i < text.lenght){
      setMostrarCursor(true);

      setText(text.slice(0, i + 1));
      setTimeout(() => escreveNaTela(text, i + 1), 100);
    }
    else if( i >= text.lenght && props?.esconderCursor){
      setMostrarCursor(false);
    }
  }

  useEffect(() => {
    setTimeout(() => escreveNaTela(props.text), props?.delay ?? 200);
  }, []);

  return (
    <div>
      {text}
      {mostrarCursor && (
        <span className="animate-animar-cursor text-xl md:text-2xl ml-1 font-medium">
          
        </span>
      )}
    </div>
  )
}

export default MaquinaDeEscrever;