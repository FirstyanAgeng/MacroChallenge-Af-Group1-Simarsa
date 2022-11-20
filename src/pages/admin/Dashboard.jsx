import { Container, Card, Row, Col, Button } from "react-bootstrap";
import AdminLayout from "../../components/AdminLayout";
import "../../styles/admin.css";

import Pana from "../../assets/images/pana.png";
import Data from "../../assets/images/data.png";

const AdminHome = () => {
  return (
    <AdminLayout>
      <div className="adminHome">
        <Container className="head mt-3">
          <Row>
            <Col>
              <h1 className="titleHome title">Selamat Datang!</h1>
            </Col>
            <Col>
              <p className="date">Kamis, 17/11/2022 14:00:16 </p>
            </Col>
          </Row>
        </Container>

        <Container className="cont">
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title className="card-title">
                    PENDAFTARAN PASIEN
                  </Card.Title>
                  <Card.Img variant="top" src={Pana} />
                  <Card.Text>Saat ini, Kamis, 24/11/2022 8:00:16</Card.Text>
                  <Button variant="primary" className="btnHome btn y mb-3">
                    + Pendaftaran pasien baru
                  </Button>
                  <Button
                    variant="primary"
                    className="btnHome btn1 btn-primary mb-4"
                  >
                    + Pendaftaran pasien lama
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Container>
                  <Row>
                    <Col>
                      <Card.Body>
                        <Card.Img src={Data} />
                      </Card.Body>
                    </Col>
                    <Col>
                      <Card.Body>
                        <Card.Title>DATA POLIKLINIK</Card.Title>
                        <Button variant="primary" className="btnHome mb-4">
                          Lihat Data
                        </Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Container>
              </Card>

              <Col>
                <Card>
                  <Container>
                    <Row>
                      <Col>
                        <Card.Body>
                          <Card.Img src={Data} />
                        </Card.Body>
                      </Col>
                      <Col>
                        <Card.Body>
                          <Card.Title>DATA DOKTER</Card.Title>
                          <Button
                            variant="primary"
                            className="btnHome btn btn-primary mb-4"
                          >
                            Lihat Data
                          </Button>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Container>
                </Card>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    </AdminLayout>
  );
};

export default AdminHome;
