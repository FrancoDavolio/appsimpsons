import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import theSimpson from "../src/assets/img/theSimpson.png";
import Frase from "./components/Frase";
import Spinner from "./components/Spinner";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      //aqui hago la peticion
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      console.log(respuesta);
      const dato = await respuesta.json();
      console.log(dato[0]);
      //guardar la frase del personaje en el state
      setPersonaje(dato[0]);
      //cambiar el valor del mostrarSpinner
      setMostrarSpinner(false);
    } catch (error) {
      console.log(error);
      //mostrar mensaje de error
    }
  };

  //Cargar un componente condicional
  //usamos el operador ternario
  //(condicion logica)?(cuando se cumple la condicion):(logica si no se cumple la condicion)
  const componenteCondicional = mostrarSpinner ? (
    <Spinner></Spinner>
  ) : (
    <Frase personaje={personaje}></Frase>
  );

  return (
    <Container>
      <div className="d-flex justify-content-center my-5">
        <img src={theSimpson} alt="los simpsons" className="w-100" />
      </div>
      <div className="text-center my-4">
        <Button type="button" onClick={consultarAPI}>
          Obtener Frase
        </Button>
      </div>
      {componenteCondicional}
    </Container>
  );
}

export default App;
