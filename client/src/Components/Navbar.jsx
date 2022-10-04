import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import axios from "axios";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
function CollapsibleExample() {
  let navigate = useNavigate();
    async function logout(){
        localStorage.removeItem("dataKey");
        return navigate("/");
    }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">REFER EARN PORTAL</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><Button variant="light" onClick={logout}>Logout</Button>{' '}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;