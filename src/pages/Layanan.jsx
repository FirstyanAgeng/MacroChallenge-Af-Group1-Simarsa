/* eslint-disable jsx-a11y/alt-text */
import deskfas from "../assets/images/fasilitas.png";
import { Card, Container, Row, Col } from "react-bootstrap";
import picFas from "../assets/images/picFas.png";
import Layout from "../components/Layout";

const Layanan = () => {
  return (
    <Layout>
      <div className="Layanan">
        <Card className="bg-light text-dark">
          <Card.Img src={deskfas} alt="Card image" />
          <Card.ImgOverlay>
            <Container>
              <h1>Layanan Kami</h1>
            </Container>
          </Card.ImgOverlay>
        </Card>
        <Container>
          <div className="p-5 layanan-content">
            <Row className="container mb-5 kartu-layanan">
              <Col xs="6">
                <h3>Layanan Unggulan Kandungan</h3>
                <ul className="list">
                  <li>
                    <p>USG Obsetri Ginekologi</p>
                  </li>
                  <li>
                    <p>
                      USG Skrining Kelainan Kongenital Janin dan Detail Jantung
                    </p>
                  </li>
                  <li>
                    <p>USG 4 Dimensi HD Live Studio</p>
                  </li>
                  <li>
                    <p>Penanganan Kehamilan Resiko Tinggi</p>
                  </li>
                </ul>
              </Col>
              <Col xs="6">
                <img src={picFas} style={{ width: "400px", height: "220px" }} />
              </Col>
            </Row>
            <Row className="container mb-5 kartu-layanan">
              <Col xs="6">
                <h3>Layanan Unggulan Paru</h3>
                <ul className="list">
                  <li>
                    <p>USG Obsetri Ginekologi</p>
                  </li>
                  <li>
                    <p>
                      USG Skrining Kelainan Kongenital Janin dan Detail Jantung
                    </p>
                  </li>
                  <li>
                    <p>USG 4 Dimensi HD Live Studio</p>
                  </li>
                  <li>
                    <p>Penanganan Kehamilan Resiko Tinggi</p>
                  </li>
                </ul>
              </Col>
              <Col xs="6">
                <img src={picFas} width="400px" height="220px" />
              </Col>
            </Row>
            <Row className="container mb-5 kartu-layanan">
              <Col xs="6">
                <h3>Layanan Unggulan Anak</h3>
                <ul className="list">
                  <li>
                    <p>USG Obsetri Ginekologi</p>
                  </li>
                  <li>
                    <p>
                      USG Skrining Kelainan Kongenital Janin dan Detail Jantung
                    </p>
                  </li>
                  <li>
                    <p>USG 4 Dimensi HD Live Studio</p>
                  </li>
                  <li>
                    <p>Penanganan Kehamilan Resiko Tinggi</p>
                  </li>
                </ul>
              </Col>
              <Col xs="6">
                <img src={picFas} width="397.94px" height="219.6px" />
              </Col>
            </Row>
            <Row className="container mb-5 kartu-layanan">
              <Col xs="6">
                <h3>Layanan Unggulan Penyakit Dalam</h3>
                <ul className="list">
                  <li>
                    <p>USG Obsetri Ginekologi</p>
                  </li>
                  <li>
                    <p>
                      USG Skrining Kelainan Kongenital Janin dan Detail Jantung
                    </p>
                  </li>
                  <li>
                    <p>USG 4 Dimensi HD Live Studio</p>
                  </li>
                  <li>
                    <p>Penanganan Kehamilan Resiko Tinggi</p>
                  </li>
                </ul>
              </Col>
              <Col xs="6">
                <img src={picFas} width="400px" height="220px" />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Layanan;
