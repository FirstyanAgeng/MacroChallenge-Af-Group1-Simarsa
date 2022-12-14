import {
  Container,
  Card,
  Row,
  Navbar,
  Nav,
  Col,
  Form,
  Tabs,
  Button,
  Tab,
} from "react-bootstrap";
//router
import {
  ADMIN_DASHBOARD,
  DATA_POLIKLINIK,
  DATA_POLI,
  RIWAYAT_PASIEN,
} from "../../router";

import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../components/AdminLayout";
import male from "../../assets/images/male.png";

const DataPasien = () => {
  const navigate = useNavigate();
  return (
    <AdminLayout>
      <div className="dataPasien">
        <Container className="containerDataPasien container mb-4">
          <Row>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <AiFillHome size="25px" className="ho" />
                    <Nav.Link href={ADMIN_DASHBOARD}>Home</Nav.Link>
                    <AiOutlineRight className="ho1" />
                    <Nav.Link href={DATA_POLIKLINIK}>Data Poliklinik</Nav.Link>
                    <AiOutlineRight className="ho1" />
                    <Nav.Link href={DATA_POLI}>Data Poli</Nav.Link>
                    <AiOutlineRight className="ho1" />
                    <Nav.Link style={{ color: "black" }}>Data Pasien</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Row>
        </Container>

        <Container className="cont">
          <Row>
            <Card className="cardDetailPasien">
              <Card.Body>
                <Row>
                  <Card.Title className="card-title pl-4">
                    <h4>Detail Pasien</h4>
                  </Card.Title>
                </Row>

                <Container className="container-fluid mb-5">
                  <Row>
                    <Col sm={6} style={{ paddingLeft: "0px" }}>
                      <img src={male} alt="" className="mt-5 ma" />
                    </Col>

                    <Col sm={6}>
                      <Tabs
                        defaultActiveKey="profile-dokter"
                        className="mb-3 tabq"
                        justify
                      >
                        <Tab eventKey="profile-dokter" title="Detail Pasien">
                          <Form.Group className="tab1 mb-3">
                            <Form.Label className="bold ">NIK</Form.Label>
                            <Form.Control
                              placeholder="1571021703010033"
                              disabled
                            />
                          </Form.Group>
                          <Form.Group className="tab1 mb-3">
                            <Form.Label className="bold ">
                              No. Rekam Medis
                            </Form.Label>
                            <Form.Control placeholder="PS.123458888" disabled />
                          </Form.Group>
                          <Form.Group className="tab1 mb-3">
                            <Form.Label className="bold ">
                              Nama Lengkap
                            </Form.Label>
                            <Form.Control
                              placeholder="Tengku Mahmudi"
                              disabled
                            />
                          </Form.Group>
                          <Form.Group className="tab1 mb-3">
                            <Form.Label className="bold ">
                              Jenis Kelamin
                            </Form.Label>
                            <Form.Select disabled>
                              <option>Laki-laki</option>
                            </Form.Select>
                          </Form.Group>
                          <Form.Group className="tab1 mb-3">
                            <Form.Label className="bold ">No. HP</Form.Label>
                            <Form.Control placeholder="089615829394" disabled />
                          </Form.Group>
                          <Button className="km2">Edit</Button>
                        </Tab>

                        <Tab eventKey="jadwal-praktik" title="Rekam Medis">
                          <Card className="card2 content mt-5">
                            <Row>
                              <Col className="mt-4 text-center">
                                <h6>
                                  <strong>POLI UMUM</strong>
                                </h6>
                                <h6 className="text mt-2 mb-5">
                                  dr.Wahyu Mustiadi, Sp.P. M. Kes
                                </h6>
                              </Col>
                              <Col className="mt-3 text-center mt-3">
                                <button
                                  class="btnDataDokter btn btnpad mt-2 sd1"
                                  style={{ padding: "10px 20px" }}
                                  onClick={() => navigate(RIWAYAT_PASIEN)}
                                >
                                  Sedang diproses
                                </button>
                                <h6 className="text">Tanggal: 27 Mei 2022</h6>
                              </Col>
                            </Row>
                          </Card>
                          <Card className="card2 content mt-5">
                            <Row>
                              <Col className="mt-4 text-center">
                                <h6>
                                  <strong>POLI UMUM</strong>
                                </h6>
                                <h6 className="text mt-2 mb-5">
                                  dr.Wahyu Mustiadi, Sp.P. M. Kes
                                </h6>
                              </Col>
                              <Col className="mt-3 text-center mt-3">
                                <button class="btnDataDokter btn btnpad mt-2 sd">
                                  Selesai
                                </button>
                                <h6 className="text">Tanggal: 27 Mei 2022</h6>
                              </Col>
                            </Row>
                          </Card>
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
export default DataPasien;
