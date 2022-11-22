import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Nav,
  Form,
  Modal,
} from "react-bootstrap";
import AdminLayout from "../../components/AdminLayout";
import { ADMIN_DASHBOARD, DETAIL_DOKTER } from "../../router";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../../styles/admin.css";
import React, { useState } from "react";

const DataDokter = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  return (
    <AdminLayout>
      <div className="dataDokter">
        <Container className="container2 container mb-4">
          <Row>
            <Nav className="me-auto">
              <Nav.Item>
                <NavLink className="nav-link nv" to={ADMIN_DASHBOARD}>
                  Home
                </NavLink>
                <NavLink className="nav-link nv">Data Dokter</NavLink>
              </Nav.Item>
            </Nav>
          </Row>
        </Container>

        <Container className="cont">
          <Row>
            <Card className="CardDataDokter card">
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title className="card-title pl-4">
                      <h5>Data Dokter</h5>
                    </Card.Title>
                  </Col>

                  <Col>
                    <Button
                      className="btnDataDokter btn2 btn btn-block"
                      onClick={handleShow}
                    >
                      TAMBAH DATA DOKTER
                    </Button>
                  </Col>

                  {/* modal */}
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Form Tambah Dokter</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group className="mb-3">
                          <Form.Label className="bold tab1">
                            Nama Dokter
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Nama dokter"
                            autoFocus
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label className="bold ">Spesialis:</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Spesialis"
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label className="bold ">
                            Nomor Telepon
                          </Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Nomor Telepon"
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label className="bold ">Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Label className="bold ">Role</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option value="1">Dokter</option>
                          <option value="2">Perawat</option>
                        </Form.Select>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        className="btnModal"
                        variant="outline-dark"
                        onClick={handleClose}
                      >
                        OK
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Row>

                {/* card poli dokter */}
                <Container className="container-fluid text-center mb-5">
                  <Row>
                    <Col sm={6}>
                      <Card className="cardDo1 content mt-4">
                        <Row>
                          <Col className="mt-4">
                            <h6>
                              <strong>POLI PARU</strong>
                            </h6>
                            <h6 className="text mt-2 mb-5">
                              dr.Wahyu Mustiadi, Sp.P. M. Kes
                            </h6>
                          </Col>
                          <Col className="mt-3 text-center mt-4">
                            <button
                              class="btnDataDokter btn btnpad"
                              onClick={() => navigate(DETAIL_DOKTER)}
                            >
                              Lihat data
                            </button>
                            <small className="text">
                              Jadwal: Selasa, Kamis, Sabtu
                            </small>
                          </Col>
                        </Row>
                      </Card>
                    </Col>

                    <Col sm={6}>
                      <Card className="cardDo1 content mt-4">
                        <Row>
                          <Col className="mt-4">
                            <h6>
                              <strong>POLI RADIOLOGI</strong>
                            </h6>
                            <h6 className="text mt-2 mb-5">
                              dr.Anisah Amalia, Sp.P.Rad
                            </h6>
                          </Col>
                          <Col className="mt-3 text-center mt-4">
                            <button
                              class="btnDataDokter btn btnpad"
                              onClick={() => navigate(DETAIL_DOKTER)}
                            >
                              Lihat data
                            </button>
                            <small className="text">
                              Jadwal: Senin - Kamis
                            </small>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>

                  <Row className="mt-5">
                    <Col sm={6}>
                      <Card className="cardDo1 content mt-4">
                        <Row>
                          <Col className="mt-4">
                            <h6>
                              <strong>POLI ANAK</strong>
                            </h6>
                            <h6 className="text mt-2 mb-5">
                              dr.Tiara Nurlita Sari, Sp.A.
                            </h6>
                          </Col>
                          <Col className="mt-3 text-center mt-4">
                            <button
                              class="btnDataDokter btn btnpad "
                              onClick={() => navigate(DETAIL_DOKTER)}
                            >
                              Lihat data
                            </button>
                            <small className="text">
                              Jadwal: Senin - Kamis
                            </small>
                          </Col>
                        </Row>
                      </Card>
                    </Col>

                    <Col sm={6}>
                      <Card className="cardDo1 content mt-4">
                        <Row>
                          <Col className="mt-4">
                            <h6>
                              <strong>POLI SARAF</strong>
                            </h6>
                            <h6 className="text mt-2 mb-5">
                              dr.Yohanes Wiliam Prasetyo, Sp.S
                            </h6>
                          </Col>
                          <Col className="mt-3 text-center mt-4">
                            <button
                              class="btnDataDokter btn btnpad"
                              onClick={() => navigate(DETAIL_DOKTER)}
                            >
                              Lihat data
                            </button>
                            <small className="text">
                              Jadwal: Senin - Sabtu
                            </small>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>

                  <Row className="mt-5">
                    <Col sm={6}>
                      <Card className="cardDo1 content mt-4">
                        <Row>
                          <Col className="mt-4">
                            <h6>
                              <strong>POLI ANAK</strong>
                            </h6>
                            <h6 className="text mt-2 mb-5">
                              dr.Imade Dikky Kalsa, Sp.A.
                            </h6>
                          </Col>
                          <Col className="mt-3 text-center mt-4">
                            <button
                              class="btnDataDokter btnpad btn"
                              onClick={() => navigate(DETAIL_DOKTER)}
                            >
                              Lihat data
                            </button>
                            <small className="text">
                              Jadwal: Senin - Sabtu
                            </small>
                          </Col>
                        </Row>
                      </Card>
                    </Col>

                    <Col sm={6}>
                      <Card className="cardDo1 content mt-4">
                        <Row>
                          <Col className="mt-4">
                            <h6>
                              <strong>POLI P.DALAM</strong>
                            </h6>
                            <h6 className="text mt-2 mb-5">
                              dr.I Gede Arinton, Sp.PD-KGEH,M.Kom,MMR
                            </h6>
                          </Col>
                          <Col className="mt-3 text-center mt-4">
                            <button
                              class="btnDataDokter btn btnpad"
                              onClick={() => navigate(DETAIL_DOKTER)}
                            >
                              Lihat data
                            </button>
                            <small className="text">
                              Jadwal: Senin - Sabtu
                            </small>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>

                  <Row className="mt-5">
                    <Col sm={6}>
                      <Card className="cardDo1 content mt-4">
                        <Row>
                          <Col className="mt-4">
                            <h6>
                              <strong>POLI KANDUNGAN</strong>
                            </h6>
                            <h6 className="text mt-2 mb-5">
                              dr.Sutrisno, M.Kes., SP.OG,Subsp.ONK
                            </h6>
                          </Col>
                          <Col className="mt-3 text-center mt-4">
                            <button
                              class="btnDataDokter btnpad btn"
                              onClick={() => navigate(DETAIL_DOKTER)}
                            >
                              Lihat data
                            </button>
                            <small className="text">
                              Jadwal: Senin - Sabtu
                            </small>
                          </Col>
                        </Row>
                      </Card>
                    </Col>

                    <Col sm={6}>
                      <Card className="cardDo1 content mt-4">
                        <Row>
                          <Col className="mt-4">
                            <h6>
                              <strong>POLI P.DALAM</strong>
                            </h6>
                            <h6 className="text mt-2 mb-5">
                              dr.Achmad Happy Oktavianto, M.Sc, Sp.PD
                            </h6>
                          </Col>
                          <Col className="mt-3 text-center mt-4">
                            <button
                              class="btnDataDokter btn btnpad"
                              onClick={() => navigate(DETAIL_DOKTER)}
                            >
                              Lihat data
                            </button>
                            <small className="text">
                              Jadwal: Senin - Sabtu
                            </small>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>

                  <Row className="mt-5">
                    <Col sm={6}>
                      <Card className="cardDo1 content mt-4">
                        <Row>
                          <Col className="mt-4">
                            <h6>
                              <strong>POLI KANDUNGAN</strong>
                            </h6>
                            <h6 className="text mt-2 mb-5">
                              dr.Budi Irawan, M.Sc, Sp.OG
                            </h6>
                          </Col>
                          <Col className="mt-3 text-center mt-4">
                            <button
                              class="btnDataDokter btn btnpad"
                              onClick={() => navigate(DETAIL_DOKTER)}
                            >
                              Lihat data
                            </button>
                            <small className="text">
                              Jadwal: Senin - Sabtu
                            </small>
                          </Col>
                        </Row>
                      </Card>
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
export default DataDokter;
