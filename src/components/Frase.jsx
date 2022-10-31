import { Card, Container, Col, Row } from "react-bootstrap";
import homero from "../assets/img/homero.png";

const Frase = ({personaje}) => {
  return (
    <Container className="d-flex justify-content-center">
      <Card style={{ width: "60rem" }}>
        <Row className="justify-content-around">
          <Col md={4}>
            <Card.Img src={personaje.image} alt={personaje.character} className="w-100" />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{personaje.character}</Card.Title>
              <Card.Text>
                {personaje.quote}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Frase;
