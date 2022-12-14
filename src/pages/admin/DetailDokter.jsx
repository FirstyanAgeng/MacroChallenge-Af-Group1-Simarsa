import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Nav,
  Form,
  Tab,
  Tabs,
  Navbar,
} from "react-bootstrap";
import { ADMIN_DASHBOARD, DATA_DOKTER } from "../../router";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import AdminLayout from "../../components/AdminLayout";
import Ava from "../../assets/images/Ava.png";
import "../../styles/admin.css";

const DetailDokter = () => {
  return (
    <AdminLayout>
      <div className="detailDokter">
        <Container className="container2 container mb-4">
          <Row>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <AiFillHome size="25px" className="ho" />
                    <Nav.Link href={ADMIN_DASHBOARD}>Home</Nav.Link>
                    <AiOutlineRight className="ho1" />
                    <Nav.Link href={DATA_DOKTER}>Data Dokter</Nav.Link>
                    <AiOutlineRight className="ho1" />
                    <Nav.Link style={{ color: "black" }}>
                      Data Detail Dokter
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Row>
        </Container>

        <Container className="pageJadwalPraktik">
          <Row>
            <Card className="cardJadwalPraktik card">
              <Card.Body>
                <Card.Title>Detail Data Dokter</Card.Title>
                <Container className="container-fluid">
                  <Row>
                    <Col sm={6}>
                      <Card className="uk text-center">
                        {/* <Card.Img variant="top" src={Ava} /> */}
                        <img src={Ava} alt="" className="cardf" />
                        <Card.Body>
                          <Card.Text>
                            <h4 className="hw">
                              <strong>dr.Wahyu Mustiadi, Sp.P. M. Kes</strong>
                            </h4>
                            <h4 className="category mt-4">PARU</h4>
                            <h4 className="mt-3 hw1">Selasa, Kamis, Sabtu</h4>
                            <h4 className="mt-3 hw2">(021) - 123456789</h4>
                          </Card.Text>
                        </Card.Body>
                        <Button className="km">Lihat Surat Izin</Button>
                      </Card>
                    </Col>

                    <Col sm={6}>
                      <Tabs
                        defaultActiveKey="profile-dokter"
                        className="mb-3 tabq"
                        justify
                      >
                        <Tab eventKey="profile-dokter" title="Profile Dokter">
                          <Form.Group className="tab1 mb-3">
                            <Form.Label className="bold ">
                              Nama Dokter
                            </Form.Label>
                            <Form.Control
                              placeholder="dr.Wahyu Mustiadi, Sp.P. M. Kes"
                              disabled
                            />
                          </Form.Group>
                          <Form.Group className="tab1 mb-3">
                            <Form.Label className="bold ">
                              No. Izin Praktek
                            </Form.Label>
                            <Form.Control placeholder="A12345678" disabled />
                          </Form.Group>
                          <Form.Group className="tab1 mb-3">
                            <Form.Label className="bold ">Alamat</Form.Label>
                            <Form.Control
                              placeholder="Jl. Soekarno Hatta, Kota Jambi"
                              disabled
                            />
                          </Form.Group>
                          <Form.Group className="tab1 mb-3">
                            <Form.Label className="bold ">
                              Tempat, Tanggal Lahir
                            </Form.Label>
                            <Form.Control
                              placeholder="Kota Jambi, 17 maret 1989"
                              disabled
                            />
                          </Form.Group>
                          <Form.Group className="tab1 mb-3">
                            <Form.Label className="bold ">Agama</Form.Label>
                            <Form.Control placeholder="Islam" disabled />
                          </Form.Group>
                          <Button className="km2">Edit</Button>
                        </Tab>

                        <Tab eventKey="jadwal-praktik" title="Jadwal Praktik">
                          <Form.Group className="tab1 mb-3">
                            <Form.Label className="bold ">Senin</Form.Label>
                            <Form.Control
                              placeholder="08.00 - 11.00"
                              disabled
                            />
                          </Form.Group>
                          <Form.Group className="tab1 mb-3">
                            <Form.Label className="bold ">Selasa</Form.Label>
                            <Form.Control
                              placeholder="08.00 - 11.00"
                              disabled
                            />
                          </Form.Group>
                          <Form.Group className="tab1 mb-3">
                            <Form.Label className="bold ">Rabu</Form.Label>
                            <Form.Control
                              placeholder="08.00 - 11.00"
                              disabled
                            />
                          </Form.Group>
                          <Form.Group className="tab1 mb-3">
                            <Form.Label className="bold ">Kamisr</Form.Label>
                            <Form.Control
                              placeholder="08.00 - 11.00"
                              disabled
                            />
                          </Form.Group>
                          <Form.Group className="tab1 mb-3">
                            <Form.Label className="bold ">Jumat</Form.Label>
                            <Form.Control
                              placeholder="09.00 - 11.00"
                              disabled
                            />
                          </Form.Group>
                          <Button className="km2">Edit</Button>
                        </Tab>
                      </Tabs>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </AdminLayout>
  );
};

export default DetailDokter;
