import React from "react";
import { Card, Container } from "react-bootstrap";
import homero from "../assets/img/homero.png";

const Frase = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Card style={{ width: "60rem" }}>
        <section className="row justify-content-around">
          <div className="col-4">
            <Card.Img src={homero} className="w-100" />
          </div>
          <div className="col-8">
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </div>
        </section>
      </Card>
    </Container>
  );
};

export default Frase;
