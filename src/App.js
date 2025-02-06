import logo from './logo.svg';
import './App.css';
import {Destinos} from './database.js';

function botonSiguiente(){
  
}
function botonAnterior(){

}

function App() {

  return (
    <>
      <h1>Votacion para el Viaje de final de curso</h1>
      <div>
      {Destinos.map((destino, index) => {
        return (
          <div key={index}>
            <h2>{destino.Nombre}</h2>
            <img src={destino.Imagen} alt={destino.Nombre} />
            <p>{destino.Descripcion}</p>
            <p>Precio: {destino.Precio}</p>
            <button>Me gusta</button>
          </div>
        );
      })}

      </div>

      <div>
        <button onClick={botonAnterior}>Anterior</button>
        <button onClick={botonSiguiente}>Siguiente</button>
      </div>
      
    </>
  );
}
export default App;