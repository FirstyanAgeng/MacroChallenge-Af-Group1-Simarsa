import {Container, Navbar, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
// import { HOME} from "../router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import "../pages/Beranda";



const head = () => {
    return (
      <>
     <Navbar className="navbar-main nav1" variant="dark" expand="lg">
        <Container>
          <NavLink to="/" className="navbar-brand h1Header">
            SIMARS
          </NavLink>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <p className="hsatu">Tiara - Petugas Entry</p>
          </Navbar.Text>
          <Nav>
            <Nav.Link className="logout" href="../pages/Beranda" click="logout">Sign Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    );
  };
  
  export default head;