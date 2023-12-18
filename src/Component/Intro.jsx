import { Container } from "react-bootstrap";

const Intro = () => {
  return (
    <Container className="d-flex justify-content-center">
      <div
        style={{
          backgroundColor: "#3d88cb",
          width: "80%",
          marginTop: "6rem",
          marginBottom: "6rem",
          boxShadow: "50px",
        }}
      >
        <h3
          style={{
            marginInline: "50px",
            marginTop: "30px",
            textAlign: "start",
          }}
        >
          <span className="fw-bold">
            Benvenuti nello Studio Legale di Jimmy McGill, Cassazionista
          </span>{" "}
        </h3>
        <h5
          style={{
            marginInline: "50px",
            marginBottom: "30px",
            textAlign: "start",
          }}
        >
          Siamo lieti di accogliervi nel nostro Studio Legale specializzato in
          cassazione, dedicato a fornire consulenza e rappresentanza legale di
          altissimo livello. La nostra pratica legale si concentra
          principalmente sulla cassazione, la cui competenza richiede una
          conoscenza approfondita del diritto e una vasta esperienza nelle
          procedure di questa giurisdizione.
        </h5>
      </div>
    </Container>
  );
};

export default Intro;
