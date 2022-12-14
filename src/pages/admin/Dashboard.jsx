import { DATA_DOKTER, DATA_POLIKLINIK, DAFTAR_PASIEN_BARU } from "../../router";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { RiShieldCrossFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import AdminLayout from "../../components/AdminLayout";
import Pana from "../../assets/images/pana.png";
import Data from "../../assets/images/data.png";

const AdminHome = () => {
  const navigate = useNavigate();
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
                  <Button
                    variant="primary"
                    className="btnHome btn y mb-3"
                    onClick={() => navigate(DAFTAR_PASIEN_BARU)}
                  >
                    <FaPlus size="20px" className="ta" />
                    Pendaftaran pasien baru
                  </Button>
                  <Button
                    variant="primary"
                    className="btnHome btn1 btn-primary mb-4"
                    onClick={() => navigate(DAFTAR_PASIEN_BARU)}
                  >
                    <RiShieldCrossFill size="23px" className="ta" />
                    Pendaftaran pasien lama
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="mb-4">
                <Container>
                  <Row>
                    <Col>
                      <Card.Body>
                        <Card.Img src={Data} />
                      </Card.Body>
                    </Col>
                    <Col>
                      <Card.Body className="center">
                        <Card.Title>DATA POLIKLINIK</Card.Title>
                        <Button
                          variant="primary"
                          className="btnHome mb-4"
                          onClick={() => navigate(DATA_POLIKLINIK)}
                        >
                          LIHAT DATA
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
                        <Card.Body className="center">
                          <Card.Title>DATA DOKTER</Card.Title>
                          <Button
                            variant="primary"
                            className="btnHome btn btn-primary mb-4 text-center"
                            onClick={() => navigate(DATA_DOKTER)}
                          >
                            LIHAT DATA
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
