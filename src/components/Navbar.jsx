import { Container, Nav, Navbar, Row, Col, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo-simarsa.png";
import Telp from "../assets/images/telp.png";
import Jam from "../assets/images/jam.png";
import Lokasi from "../assets/images/lokasi.png";

const Navigasi = () => {
  return (
    <>
      <section className="container logo">
        <Row>
          <Col xs={4}>
            <img src={Logo} width="250px" alt="" />
          </Col>
          <Col xs={8} className="mt-3">
            <Stack direction="horizontal" gap="3">
              <img src={Telp} alt="" />
              GAWAT DARURAT (0281) 635423
              <img src={Jam} alt="" />
              JAM KERJA 24 JAM Senin-Sabtu
              <img src={Lokasi} alt="" />
              LOKASI 0123 Some Place
            </Stack>
          </Col>
        </Row>
      </section>
      <Navbar className="navbar-main" variant="dark" expand="lg">
        <Container>
          <NavLink to="/" className="navbar-brand">
            SIMARSA
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/">
                Halaman Utama
              </NavLink>
              <NavLink className="nav-link" to="/tentangkami">
                Tentang Kami
              </NavLink>
              <NavLink className="nav-link" to="/fasilitas">
                Layanan
              </NavLink>
              <NavLink className="nav-link" to="/jadwaldokter">
                Jadwal Dokter
              </NavLink>
              <NavLink className="nav-link" to="/pendaftaran">
                Pendaftaran Online
              </NavLink>
              <NavLink className="nav-link" to="/hubungikami">
                Hubungi Kami
              </NavLink>
            </Nav>
            <button className="tombol">LOGIN</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigasi;
