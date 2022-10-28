import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Button } from "react-bootstrap";
import theSimpson from "../src/assets/img/theSimpson.png";
import Frase from "./components/Frase";

function App() {
  return (
    <Container>
      <div className="d-flex justify-content-center my-5">
        <img src={theSimpson} alt="los simpsons" />
      </div>
      <div className="text-center my-4">
        <Button>Obtener Frase</Button>
      </div>
      <Frase></Frase>
    </Container>
  );
}

export default App;
