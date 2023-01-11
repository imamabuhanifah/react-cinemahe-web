import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark overlay" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#">CINEMAHE</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">TRENDING</Nav.Link>
            <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
            <div className="ml-4">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  label="Search"
                />
                <Button variant="secondary">Search</Button>
              </Form>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
