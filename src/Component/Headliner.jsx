import avvocato from "../Avvocato-cassazionista.png";
const { Navbar, Nav, Container } = require("react-bootstrap");
const Headliner = () => {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#162542" }}>
        <Container className="d-flex align-items-center justify-content-end">
          <span style={{ fontWeight: "bold", color: "white" }}>
            Potete contattarmi al numero +39 333 333 3333
          </span>
        </Container>
      </Navbar>
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#3d88cb",
          height: "100px",
          boxShadow: "50px",
        }}
      >
        <Container>
          <Navbar.Brand className="fs-2 me-5">Avv. Jimmy McGill</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="fs-5">Home</Nav.Link>
              <Nav.Link className="fs-5">Lo studio</Nav.Link>
              <Nav.Link className="fs-5">Contatti</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <img style={{ width: "100%", boxShadow: "50px" }} src={avvocato} alt="" />
    </div>
  );
};

export default Headliner;
