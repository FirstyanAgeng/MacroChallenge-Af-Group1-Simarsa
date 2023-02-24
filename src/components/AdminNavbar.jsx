import { Container, Navbar, Nav } from "react-bootstrap";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { HOME } from "../router";
import "../pages/Beranda";

const AdminNavbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar className="navbar-main" variant="dark" expand="lg">
        <Container>
          <NavLink to="/" className="navbar-brand h1Header">
            SIMARSA
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Navbar.Text>
                <p className="hsatu">
                  <strong>Tiara</strong> - Petugas Entry
                </p>
              </Navbar.Text>
            </Nav>

            <IoLogOutOutline
              className="nav-logout"
              onClick={() => navigate(HOME)}
              style={{ color: "white" }}
              size="27px"
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
