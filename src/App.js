import logo from './logo.svg';
import './App.css';
import { Destinos } from './database.js';
import { useState } from 'react';

const [index, setIndex] = useState(0);

function botonSiguiente() {
  Destinos(setIndex + 1);
}
function botonAnterior() {
  Destinos(setIndex - 1);
}


function App() {

  return (
    <>
      <h1>Votacion para el Viaje de final de curso</h1>
      <div>
        <h1>{Destinos[index].Nombre}</h1>
        <h2>{Destinos[index].Precio}</h2>
        <p>{Destinos[index].Descripcion}</p>
        <img src={Destinos[index].Imagen} alt={Destinos[index].Nombre} />

      </div>

      <div>
        <button onClick={botonAnterior}>Anterior</button>
        <button onClick={botonSiguiente}>Siguiente</button>
      </div>

    </>
  );
}
export default App;