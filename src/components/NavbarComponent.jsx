import { Navbar,Container,Nav } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Nusa Tech</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" style={{display: "-ms-inline-grid", textAlign: "Right", marginleft: "400px"}}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Program Pelatihan</Nav.Link>
          <Nav.Link href="#link">Webinar</Nav.Link>
          <Nav.Link href="#link">Hubungi Kami</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default NavbarComponent;