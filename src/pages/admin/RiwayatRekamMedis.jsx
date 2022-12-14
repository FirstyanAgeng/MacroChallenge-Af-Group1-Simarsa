import AdminLayout from "../../components/AdminLayout";
import {
  Container,
  Card,
  Row,
  Navbar,
  Nav,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import { ADMIN_DASHBOARD, DATA_POLIKLINIK, DATA_POLI } from "../../router";
import male from "../../assets/images/male.png";

const RiwayatPasien = () => {
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
                    <Nav.Link href={DATA_POLI}>Data Pasien</Nav.Link>
                    <AiOutlineRight className="ho1" />
                    <Nav.Link style={{ color: "black" }}>
                      Riwayat Rekam Medis
                    </Nav.Link>
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
                    <h4>Riwayat Rekam Medis</h4>
                  </Card.Title>
                </Row>

                <Container className="container-fluid mb-5">
                  <Row>
                    <Col sm={6} style={{ paddingLeft: "0px" }}>
                      <img src={male} alt="" className="mt-5 ma" />
                    </Col>

                    <Col sm={6}>
                      <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold">
                          Jenis Kunjungan
                        </Form.Label>
                        <Form.Select disabled>
                          <option>Riwayat Jalan</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold">
                          Tanggal Kunjungan
                        </Form.Label>
                        <Row>
                          <Col>
                            <Form.Control placeholder="27/05/2022" />
                          </Col>
                          <Col>
                            <Form.Control placeholder="08:00-11:00" />
                          </Col>
                        </Row>
                      </Form.Group>

                      <Form.Group className="mb-3 tab1">
                        <Form.Label className="bold">Anamnesa</Form.Label>
                        <Form.Control
                          placeholder="Terindikasi ditinggal ayang"
                          as="textarea"
                          rows={4}
                        />
                      </Form.Group>

                      <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold">
                          Riwayat Alergi Obat
                        </Form.Label>
                        <Row>
                          <Col>
                            <Form.Control placeholder="Obat" />
                          </Col>
                          <Col>
                            <Form.Select disabled>
                              <option className="text-center">
                                -- Tidak ada --
                              </option>
                            </Form.Select>
                          </Col>
                        </Row>
                      </Form.Group>

                      <Form.Group className="mb-3 tab1">
                        <Form.Label className="bold">Terapi Obat</Form.Label>
                        <Form.Control
                          placeholder="Paracetamol"
                          as="textarea"
                          rows={4}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3 tab1">
                        <Form.Label className="bold">Diagnosa</Form.Label>
                        <Form.Control
                          placeholder="cardiomyopathy"
                          as="textarea"
                          rows={4}
                        />
                      </Form.Group>

                      <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold">
                          Pemeriksaan Fisik
                        </Form.Label>
                        <Row>
                          <Col>
                            <Form.Label className="bold">
                              Tinggi Badan (cm)
                            </Form.Label>
                            <Form.Control placeholder="175" />
                          </Col>
                          <Col>
                            <Form.Label className="bold">
                              Berat Badan (kg)
                            </Form.Label>
                            <Form.Control placeholder="80" />
                          </Col>
                        </Row>
                      </Form.Group>

                      <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold">Tekanan Darah</Form.Label>
                        <Row>
                          <Col>
                            <Form.Label className="bold">
                              Sistole (mmHg)
                            </Form.Label>
                            <Form.Control placeholder="90" />
                          </Col>
                          <Col>
                            <Form.Label className="bold">
                              Diastole (mmHg)
                            </Form.Label>
                            <Form.Control placeholder="60" />
                          </Col>
                        </Row>
                      </Form.Group>
                      <Form.Group className="tab1 mb-3">
                        <Row>
                          <Col sm={6}>
                            <Form.Label className="bold">Suhu (C)</Form.Label>
                            <Form.Control placeholder="34" />
                          </Col>
                        </Row>
                      </Form.Group>

                      <Form.Group className="tab1 mb-3">
                        <Form.Label className="bold">Status Pulang</Form.Label>
                        <Form.Select disabled>
                          <option>Rawat Jalan</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Label className="bold tab1">
                        *Pastikan semua data terisi benar
                      </Form.Label>
                      <Button className="km2 mt-3">Edit</Button>
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

export default RiwayatPasien;
