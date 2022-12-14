import { Container, Card, Row, Col } from "react-bootstrap";
import { ADMIN_DASHBOARD } from "../../router";
import { useNavigate } from "react-router-dom";

const KartuAntrian = () => {
  const navigate = useNavigate();
  return (
    <div className="kartuAntrian pageAntrian">
      <Container className="cont9 text-center">
        <p className="t9 bold">KARTU ANTRIAN</p>
        <Card className="cardAntrian card">
          <Card.Title className="cardTA">
            <h4>No Antrian</h4>
          </Card.Title>

          <Card.Body style={{ marginTop: "0px" }}>
            <Row className="content9 mb-3">
              <p className="mt-2 mb-2 idl">
                <strong>UM01</strong>
                <span>
                  <p className="idl1">Kamis</p>
                </span>
              </p>
            </Row>
            <Row className="content9">
              <p className="mt-1 mb-1 idl2">
                Dokter
                <span>
                  <p className="idl3">dr. Wahyu Mustiadi, Sp. P. M.Kes</p>
                </span>
              </p>
            </Row>

            <Row>
              <Col sm={6} l className="content8">
                <p className="mt-3 idl2">
                  Poli Tujuan
                  <span>
                    <p className="idl4">POLI PARU</p>
                  </span>
                </p>
              </Col>

              <Col sm={6} l className="content8">
                <p className="mt-3 idl2">
                  Nama
                  <span>
                    <p className="idl4">Tengku Mahmudi</p>
                  </span>
                </p>
              </Col>
            </Row>

            <Row>
              <Col sm={6} l className="content8">
                <p className="mt-3 idl2">
                  No. rekam Medis
                  <span>
                    <p className="idl4">PS.123458888</p>
                  </span>
                </p>
              </Col>

              <Col sm={6} l className="content8">
                <p className="mt-3 idl2">
                  Waktu
                  <span>
                    <p className="idl4">08:00-11:00</p>
                  </span>
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Row className="text-center mt-2">
          <Col sm={6}>
            <button
              className="btn btn9"
              onClick={() => navigate(ADMIN_DASHBOARD)}
            >
              Home
            </button>
          </Col>
          <Col sm={6}>
            <button className="btn btn7">Print</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default KartuAntrian;
